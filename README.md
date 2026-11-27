# MC Gesso — Site institucional

Site estático da MC Gesso, com apresentação de serviços, portfólio, galeria, informações institucionais e solicitação de orçamento pelo WhatsApp.

## Como usar

Abra `index.html` no navegador. Não é necessário instalar dependências, executar npm ou gerar um build.

Para conferir por um servidor local, opcionalmente execute na pasta do projeto:

```bash
python3 -m http.server 8080
```

Acesse <http://localhost:8080>.

## Publicação

Envie `index.html` e a pasta `assets/` para o diretório público da hospedagem. Não há comando de instalação nem de build. Em serviços com integração Git, selecione publicação estática, deixe o comando de build vazio e use a raiz do repositório como diretório de publicação.

Os caminhos locais são relativos, permitindo hospedar na raiz do domínio ou em um subdiretório. Mantenha a estrutura de pastas.

## Estrutura

```text
index.html              Conteúdo, estilos personalizados, SEO e interface
assets/js/main.js       Dados e interações em JavaScript puro
assets/brand/           Logotipos
assets/portfolio/       Imagens dos projetos
assets/about/           Fotos institucionais
assets/videos/          Vídeo de apresentação
```

## Tecnologias e dependências externas

HTML5, CSS e JavaScript puro. O navegador carrega Tailwind CSS pelo CDN e a fonte Montserrat pelo Google Fonts. É necessário acesso à internet para carregar esses recursos e acessar os links externos. Não há React, Vite, backend, banco de dados ou chaves de API.

## Manutenção

- Conteúdo, estilos, metadados e links sociais: `index.html`.
- Dados dos serviços e projetos, menu, modais, filtros e formulário: `assets/js/main.js`.
- Imagens, logotipos e vídeo: suas respectivas pastas em `assets/`.
- WhatsApp: procure `5511986504178` no HTML e no JavaScript e atualize todas as ocorrências juntas.

O formulário monta uma mensagem e abre o WhatsApp. O visitante conclui o envio no WhatsApp; os dados não são salvos no site nem enviados por e-mail.

## Conferência após alterações

Confira o menu no celular, os filtros, os modais, a galeria, o vídeo, os downloads dos logotipos e o formulário de orçamento. Verifique também a apresentação em desktop e os links de contato.

## Histórico

Mantenha commits separados por finalidade, usando prefixos como `feat:`, `fix:`, `chore:` e `docs:`. Não versione segredos, arquivos temporários do editor ou cópias duplicadas dos arquivos de mídia.

## SEO e páginas locais

Domínio canônico: `https://mcgesso.com.br/`. Todas as páginas são HTML estático, com título e descrição próprios, canonical absoluto, Open Graph, Twitter Card e links rastreáveis sem JavaScript.

- `/servicos/`: frente genérica — gesseiro, drywall, forro e sanca em São Paulo.
- `/solucoes/`: frente específica — apartamento, forro tabicado, cortineiro com LED, escritório, loja e isolamento acústico.
- `scripts/seo_content.py`: conteúdo editorial de cada página; mantenha informações técnicas e ofertas coerentes com os serviços reais.
- `scripts/seo_common.py`: domínio, identidade e metadados compartilhados.
- `scripts/generate_seo.py`: gera as 10 páginas, os 2 índices e o sitemap. Execute `python3 scripts/generate_seo.py` ao editar essas fontes. Os arquivos gerados são versionados; a hospedagem continua sem build.
- `scripts/check_seo.py`: verifica páginas, canonical, metadados, links, FAQ visível e cobertura do sitemap. Execute `python3 scripts/check_seo.py` antes de publicar.

Os diretórios precisam ser publicados integralmente, junto com `assets/`, `robots.txt`, `sitemap.xml`, `_redirects` e `_headers`. Na Netlify, use a raiz do repositório como diretório de publicação e sem build. As regras `_redirects` consolidam HTTP e www no endereço HTTPS sem www; a Netlify normaliza URLs de diretórios. Não adicione fallback de SPA (`/* /index.html 200`), que transformaria URLs inexistentes em cópias da home. Em outra hospedagem, configure regras equivalentes.

O sitemap contém somente URLs canônicas das páginas existentes; sem datas de modificação artificiais. A navegação da home e os índices permitem descobrir todas as páginas.

### Search Console

A tag `google-site-verification` fornecida está no `<head>` da home. Após a publicação, confirme a propriedade de **prefixo de URL** `https://mcgesso.com.br/` pelo método Tag HTML. A propriedade do tipo **Domínio** `mcgesso.com.br` requer um registro DNS; a tag HTML não substitui esse processo. O código não confirma a propriedade nem envia o sitemap automaticamente. Depois de verificar, envie `https://mcgesso.com.br/sitemap.xml` no Search Console.

Dados estruturados: negócio e site na home; serviços, breadcrumbs e FAQ nas páginas de serviço. Perguntas e respostas marcadas correspondem ao conteúdo visível. FAQPage não garante resultados enriquecidos: o Google restringe essa apresentação principalmente a sites governamentais e de saúde reconhecidos. Não foram inventados endereço, avaliações ou preços para completar o schema.

As palavras-chave foram selecionadas por serviço e intenção de projeto; não representam um ranking comprovado de volume. Não crie páginas iguais trocando apenas palavras ou localidades.
