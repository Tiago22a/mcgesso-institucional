"""Validate the crawlable static output without external dependencies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET
from seo_common import ORIGIN

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=True)
        self.tags=[]; self.text=[]; self.feed(source)
    def handle_starttag(self, tag, attrs): self.tags.append((tag,dict(attrs)))
    def handle_data(self, data): self.text.append(data)
    def find(self,tag,**attrs): return [a for t,a in self.tags if t==tag and all(a.get(k)==v for k,v in attrs.items())]

def norm(t): return re.sub(r'\s+',' ',t).strip()
urls=[n.text for n in ET.parse(ROOT/'sitemap.xml').findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls)==len(set(urls))==13
files=[p for p in ROOT.glob('**/index.html') if not any(part in {'dist', 'node_modules', '.git', '.openai'} for part in p.relative_to(ROOT).parts)]
assert len(files)==len(urls), 'Unlisted page in sitemap'
titles=[]; descriptions=[]
for file in files:
    source=file.read_text(); page=Page(source)
    relative=file.parent.relative_to(ROOT).as_posix()
    path='/' if relative=='.' else '/'+relative+'/'
    canonical=ORIGIN+path
    assert canonical in urls, canonical
    assert page.find('html',lang='pt-BR')
    assert len(page.find('h1'))==1, path
    links=page.find('link',rel='canonical'); assert len(links)==1 and links[0]['href']==canonical
    title=re.findall(r'<title>(.*?)</title>',source,re.S); assert len(title)==1 and title[0].strip()
    titles.extend(title)
    desc=page.find('meta',name='description');assert len(desc)==1 and desc[0]['content'].strip()
    descriptions.append(desc[0]['content'])
    assert page.find('meta',name='robots')[0]['content'].startswith('index, follow')
    assert page.find('meta',property='og:url')[0]['content']==canonical
    assert page.find('meta',property='og:image')[0]['content'].startswith(ORIGIN+'/assets/')
    assert page.find('meta',name='twitter:card')
    # Resolve all static local navigation and assets, including fragment targets.
    for tag,attrs in page.tags:
        for attr in ('href','src','poster'):
            value=attrs.get(attr)
            if not value: continue  # Existing dynamic modal image placeholders.
            target=urlsplit(value)
            if target.scheme or target.netloc: continue
            targetpath=unquote(target.path)
            local=(ROOT/targetpath.lstrip('/')) if targetpath.startswith('/') else file.parent/targetpath
            if not targetpath: local=file
            if local.is_dir(): local=local/'index.html'
            assert local.exists(), f'{path}: missing {value}'
            if target.fragment and local.suffix=='.html':
                destination=Page(local.read_text())
                assert any(a.get('id')==unquote(target.fragment) for _,a in destination.tags),f'{path}: missing anchor {value}'
    visible=Page(re.sub(r'<script\b[^>]*>.*?</script>','',source,flags=re.S)).text
    visible=norm(' '.join(visible))
    schemas=[json.loads(x) for x in re.findall(r'<script type="application/ld\+json">(.*?)</script>',source,re.S)]
    assert schemas,path
    for schema in schemas:
        for node in schema.get('@graph',[schema]):
            if node.get('@type')=='FAQPage':
                for qa in node['mainEntity']:
                    assert norm(qa['name']) in visible,(path,qa['name'])
                    assert norm(qa['acceptedAnswer']['text']) in visible,(path,'FAQ answer not visible')
assert len(set(titles))==len(titles),'Duplicate titles'
assert len(set(descriptions))==len(descriptions),'Duplicate descriptions'
assert 'Sitemap: '+ORIGIN+'/sitemap.xml' in (ROOT/'robots.txt').read_text()
home=Page((ROOT/'index.html').read_text())
assert home.find('meta',name='google-site-verification')[0]['content']=='4t0EUwQADWAAzFFkMowIWFoBP88sxzq88Hg8xfv4HYI'
print(f'PASS: {len(files)} pages; unique metadata; canonical/sitemap alignment; local links/assets/anchors; visible FAQ; Google verification.')
