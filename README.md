# Agência Thoth.SP — Landing page

Landing page responsiva para apresentar a Agência Thoth.SP e convidar novos criadores a conhecer a comunidade e entrar em contato pelo WhatsApp.

## Abrir no VS Code

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no VS Code (`Arquivo > Abrir Pasta`).
3. Abra `index.html` diretamente no navegador ou use a extensão **Live Server** para atualizar a página automaticamente durante a edição.

Não há etapa de compilação, instalação de dependências ou servidor obrigatório. É um site estático em HTML, CSS e JavaScript.

## Publicar no GitHub e Hostinger

1. Envie a pasta completa para um repositório GitHub.
2. Para a hospedagem compartilhada da Hostinger, envie o conteúdo do projeto (incluindo `assets/`) para `public_html` pelo Gerenciador de Arquivos ou FTP.
3. Para outro tipo de hospedagem, configure a pasta do projeto como diretório público. O arquivo inicial é `index.html`.
4. Não renomeie as pastas ou imagens sem atualizar os caminhos no HTML.

## Estrutura

```text
.
├── index.html       # Conteúdo, metadados, seções, links e textos
├── styles.css       # Identidade visual, animações e regras responsivas
├── script.js        # Menu móvel, entrada dos elementos e inclinação 3D
├── README.md        # Guia do projeto
└── assets/
    ├── logo-thoth.jpg
    ├── campanha-destaque.jpg
    ├── ranking-agosto.jpg
    └── ranking-setembro.jpg
```

## Conteúdo e identidade

- Identidade visual baseada nas imagens fornecidas: azul profundo, dourado, estrelas e elementos cósmicos.
- O logo também funciona como fundo animado de página inteira, com deriva suave e asas vetoriais em movimento, sob uma camada escura para preservar a leitura. Os cards usam profundidade CSS e inclinação 3D com o ponteiro em computadores compatíveis. Em dispositivos móveis, a experiência mantém os efeitos sem depender do ponteiro.
- As artes da campanha e dos rankings são os arquivos recebidos na pasta original.
- Há quatro links para perfis Kwai, dois botões de contato via WhatsApp, os telefones da equipe visíveis na chamada final e o link do portfólio do desenvolvedor no rodapé.
- Informações exibidas: 80 criadores e fundação em 15 de fevereiro de 2024.
- A página respeita a preferência do sistema por movimento reduzido.

## Alterações comuns

### Atualizar telefones e WhatsApp

Edite os dois links `wa.me` em `index.html`. Use o formato internacional, apenas dígitos: `55` + DDD + número. O texto inicial aparece depois de `?text=` e deve estar codificado para URL.

### Trocar links dos criadores

Edite os `href` no bloco `#criadores` em `index.html`. Ajuste também o nome visível para manter o perfil e o rótulo em sincronia.

### Atualizar imagens

Substitua o arquivo correspondente em `assets/` ou altere o caminho do `src` no HTML. Prefira imagens otimizadas para web. A arte vertical de campanha e os rankings são exibidos sem corte em seus cards.

### Ajustar textos e dados

Os títulos, descrição, quantidade, fundação e contatos estão em `index.html`. Atualize a descrição no `<meta name="description">` junto com a apresentação para manter o compartilhamento coerente.

### Cores, fontes e layout

As cores principais estão como variáveis no início de `styles.css` (`--ink`, `--gold`, `--muted`). Os pontos de quebra para tablet e celular ficam nos blocos `@media` perto do final do arquivo.

## Observações

- As fontes Manrope e DM Sans são carregadas do Google Fonts; sem conexão, o navegador usa fontes alternativas.
- O telefone do Sanderlucio está configurado como `(48) 99991-9017` nos contatos e no link do WhatsApp. O contato da Simone é exibido como `(92) 9304-7541`.
- A agência é apresentada como independente; a marca Kwai pertence aos respectivos proprietários.
