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
