"""Regenerate committed static landing pages and sitemap: python3 scripts/generate_seo.py."""
from pathlib import Path
from html import escape as e
from urllib.parse import quote
import json
import xml.etree.ElementTree as ET
from seo_common import ORIGIN, BUSINESS_ID, metadata, structured
from seo_content import PAGES

ROOT = Path(__file__).resolve().parents[1]
GROUPS = {'servicos': ('Serviços de gesso e drywall em São Paulo', 'Conheça os serviços de gesso, drywall, forros e sancas da MC Gesso em São Paulo. Consulte as opções e solicite orçamento para sua obra.'),
          'solucoes': ('Soluções de gesso e drywall para projetos em São Paulo', 'Soluções da MC Gesso para apartamentos, escritórios e lojas em São Paulo. Forro tabicado, cortineiro com LED e paredes com isolamento acústico.')}

def url(page): return f'/{page[0]}/{page[1]}/'
def cards(pages): return '<ul class="cards">'+''.join(f'<li><a href="{url(p)}">{e(p[2])} →</a></li>' for p in pages)+'</ul>'
def cta(title):
    message = quote(f'Olá, MC Gesso! Gostaria de um orçamento: {title}. Bairro: __. Medidas aproximadas: __. Prazo desejado: __.')
    return f'<a class="cta" href="https://wa.me/5511986504178?text={message}">Solicitar orçamento pelo WhatsApp</a>'

def render(title,description,path,content,crumbs,graph):
    breadcrumbs={'@type':'BreadcrumbList','itemListElement':[{'@type':'ListItem','position':i+1,'name':name,'item':ORIGIN+link} for i,(name,link) in enumerate(crumbs)]}
    trail=' <span aria-hidden="true">/</span> '.join(f'<a href="{link}">{e(name)}</a>' if i<len(crumbs)-1 else f'<span aria-current="page">{e(name)}</span>' for i,(name,link) in enumerate(crumbs))
    page=f'''<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
{metadata(title+' | MC Gesso',description,path)}
<link rel="icon" type="image/png" href="/assets/brand/logo_mc_gesso_white.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="/assets/css/services.css" />
{structured({'@context':'https://schema.org','@graph':[breadcrumbs]+graph})}
</head><body><a class="skip" href="#conteudo">Ir para o conteúdo</a>
<header><a href="/"><img src="/assets/brand/logo_mc_gesso_white.png" alt="" width="52" height="52" />MC GESSO</a><nav aria-label="Menu principal"><a href="/servicos/">Serviços</a><a href="/solucoes/">Soluções</a><a href="/#portfolio">Portfólio</a><a href="/#orcamento">Orçamento</a></nav></header>
<main id="conteudo"><nav class="breadcrumb" aria-label="Caminho da página">{trail}</nav><p class="eyebrow">MC Gesso · São Paulo</p><h1>{e(title)}</h1>{content}</main>
<footer><p>MC Gesso · Soluções arquitetônicas em São Paulo</p><nav aria-label="Links do rodapé"><a href="/">Início</a><a href="/servicos/">Serviços</a><a href="/solucoes/">Soluções por projeto</a><a href="tel:+5511986504178">(11) 98650-4178</a><a href="https://www.instagram.com/mc.gesso.ofc/">Instagram</a></nav></footer></body></html>'''
    target=ROOT/path.strip('/')/'index.html'; target.parent.mkdir(parents=True,exist_ok=True);target.write_text(page)

for page in PAGES:
    group,slug,title,description,intro,sections,faq=page
    path=url(page)
    content=f'<p class="lead">{e(intro)}</p>'+cta(title)+'<img class="cover" src="/assets/portfolio/portfolio_06.png" width="1122" height="1402" alt="Ambiente corporativo do portfólio MC Gesso" />'
    content+=''.join(f'<section><h2>{e(heading)}</h2><p>{e(body)}</p></section>' for heading,body in sections)
    content+='<section aria-labelledby="perguntas"><h2 id="perguntas">Perguntas frequentes</h2>'+''.join(f'<details><summary>{e(q)}</summary><p>{e(a)}</p></details>' for q,a in faq)+'</section>'
    content+='<section><h2>Solicite uma avaliação do projeto</h2><p>Para sua obra em São Paulo, envie o bairro, medidas aproximadas, fotos e a planta, se disponível. A equipe poderá avaliar o escopo e orientar os próximos passos do orçamento.</p>'+cta(title)+'</section>'
    related=([p for p in PAGES if p[0]=='solucoes'] if group=='servicos' else [p for p in PAGES if p[0]=='servicos'])
    content+='<section><h2>Conheça também</h2>'+cards(related)+'</section>'
    graph=[{'@type':'Service','@id':ORIGIN+path+'#service','name':title,'description':description,'url':ORIGIN+path,'provider':{'@id':BUSINESS_ID},'areaServed':{'@type':'City','name':'São Paulo'}},
           {'@type':'FAQPage','mainEntity':[{'@type':'Question','name':q,'acceptedAnswer':{'@type':'Answer','text':a}} for q,a in faq]}]
    render(title,description,path,content,[('Início','/'),('Serviços' if group=='servicos' else 'Soluções',f'/{group}/'),(title,path)],graph)

for group,(title,description) in GROUPS.items():
    pages=[p for p in PAGES if p[0]==group]
    body=f'<p class="lead">{e(description)}</p>'+cards(pages)
    other='solucoes' if group=='servicos' else 'servicos'
    body+=f'<section><h2>Encontre a solução para sua obra</h2><p>O escopo depende do ambiente, das instalações e do acabamento previsto. Consulte também nossas <a href="/{other}/">'+('soluções por tipo de projeto' if other=='solucoes' else 'páginas de serviços')+'</a> e compartilhe fotos e medidas para conversar sobre sua necessidade.</p>'+cta(title)+'</section>'
    graph=[{'@type':'CollectionPage','url':ORIGIN+f'/{group}/','name':title,'mainEntity':{'@type':'ItemList','itemListElement':[{'@type':'ListItem','position':i+1,'url':ORIGIN+url(p),'name':p[2]} for i,p in enumerate(pages)]}}]
    render(title,description,f'/{group}/',body,[('Início','/'),('Serviços' if group=='servicos' else 'Soluções',f'/{group}/')],graph)

ns='http://www.sitemaps.org/schemas/sitemap/0.9';ET.register_namespace('',ns)
root=ET.Element('{'+ns+'}urlset')
for path in ['/','/servicos/','/solucoes/']+[url(p) for p in PAGES]:
    item=ET.SubElement(root,'{'+ns+'}url'); ET.SubElement(item,'{'+ns+'}loc').text=ORIGIN+path
ET.indent(root);ET.ElementTree(root).write(ROOT/'sitemap.xml',encoding='utf-8',xml_declaration=True)
print(f'Generated {len(PAGES)} landing pages, 2 hubs and sitemap (13 URLs).')
