# SecureDocTec

Este repositório reúne a proposta acadêmica e a prova de conceito visual do SecureDocTec: uma solução para proteção, validação e autenticação de documentos acadêmicos digitais.

## Estrutura do projeto

- `securedoctec/docs/` — textos e pesquisas dos integrantes do grupo.
- `securedoctec/proto/` — protótipo visual interativo de emissão, validação e adulteração.
- `securedoctec/slides/` — apresentação em slides em HTML + CSS + JS, com visual institucional da FATEC.
- `index.html` — ponto de entrada geral para a apresentação do projeto.

## Como abrir a apresentação

A forma mais simples é abrir a apresentação em slide diretamente no navegador ou iniciar um servidor local:

```bash
cd /home/breno-oliveira/Documentos/gitRepositories/SecureDocTec
python3 -m http.server 8000
```

Depois, abra:

- `http://localhost:8000/` para a página de entrada
- `http://localhost:8000/securedoctec/slides/` para a apresentação em slides
- `http://localhost:8000/securedoctec/proto/` para o protótipo interativo

## Como usar a demonstração

1. Acesse a apresentação em slides e acompanhe a narrativa da proposta.
2. Abra a POC em `securedoctec/proto/`.
3. Emita um documento, valide o conteúdo original e simule uma adulteração para confirmar a falha de integridade.

## Observação

A solução é didática e acadêmica. A POC usa Web Crypto API para simular a lógica de hash SHA-256, cifragem AES-256-GCM e assinatura digital em um contexto educacional e seguro.
