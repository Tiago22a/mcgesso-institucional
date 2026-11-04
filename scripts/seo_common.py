"""Shared metadata for the buildless MC Gesso site (Python standard library)."""
import html
import json

ORIGIN = 'https://mcgesso.com.br'
IMAGE = ORIGIN + '/assets/portfolio/portfolio_06.png'
BUSINESS_ID = ORIGIN + '/#business'
PHONE = '+55 11 98650-4178'

def structured(data):
    return '<script type="application/ld+json">' + json.dumps(data, ensure_ascii=False).replace('<', '\\u003c') + '</script>'

def metadata(title, description, path):
    url = ORIGIN + path
    values = [('name', 'description', description), ('name', 'robots', 'index, follow, max-image-preview:large'),
              ('property', 'og:locale', 'pt_BR'), ('property', 'og:type', 'website'),
              ('property', 'og:site_name', 'MC Gesso'), ('property', 'og:title', title),
              ('property', 'og:description', description), ('property', 'og:url', url),
              ('property', 'og:image', IMAGE), ('property', 'og:image:alt', 'Ambiente corporativo — portfólio MC Gesso'),
              ('name', 'twitter:card', 'summary_large_image'), ('name', 'twitter:title', title),
              ('name', 'twitter:description', description), ('name', 'twitter:image', IMAGE)]
    return '\n'.join([f'<title>{html.escape(title)}</title>', f'<link rel="canonical" href="{url}" />'] +
                     [f'<meta {kind}="{key}" content="{html.escape(value, quote=True)}" />' for kind, key, value in values])

def business():
    return {'@type': 'HomeAndConstructionBusiness', '@id': BUSINESS_ID, 'name': 'MC Gesso',
            'url': ORIGIN + '/', 'telephone': PHONE, 'logo': ORIGIN + '/assets/brand/logo_mc_gesso_white.png',
            'image': IMAGE, 'areaServed': {'@type': 'City', 'name': 'São Paulo'},
            'sameAs': ['https://www.instagram.com/mc.gesso.ofc/', 'https://www.facebook.com/profile.php?id=61595875121346']}
