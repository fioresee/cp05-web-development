# GourmetON

Landing Page desenvolvida para o aplicativo GourmetON, uma plataforma voltada para a descoberta de receitas e novas ideias para cozinhar.

A aplicação apresenta receitas obtidas através de uma API externa, permitindo ao usuário pesquisar receitas e filtrá-las de acordo com o tempo de preparo.

## Funcionalidades

- Busca de receitas por nome;
- Filtro de receitas por tempo de preparo;
- Visualização das receitas obtidas através da API;
- Exibição do tempo de preparo;
- Visualização das instruções da receita;
- Seção de depoimentos;
- Formulário para cadastro de e-mail;
- Navegação entre as seções da página;
- Layout responsivo para diferentes tamanhos de tela.

## Tecnologias utilizadas

- React
- JavaScript
- Tailwind CSS
- Vite
- Fetch API
- JSON
- Spoonacular API

## API

As receitas apresentadas na aplicação são obtidas através da **Spoonacular API**, utilizando requisições `fetch()` para buscar os dados.

Os dados retornados pela API são convertidos para JSON e utilizados para preencher os cards de receitas dinamicamente.

## Estrutura do projeto

```text
src/
├── components/
│   └── Produtos.jsx
├── App.jsx
├── main.jsx
└── index.css
```

# Integrantes
- Arthur Caram Fiorese Herrada - RM 569578
- Matheus Medeiros da Cunha – RM 572780
- Felipe Ricardo Moreira Aguiar – RM 573410
- Gustavo Ferreira Silva – RM 571675
- Matheus Sequeira Franco da Silva – RM 571127
- Felipi Bandeira de Godoy - RM 573741

# Links
- Repositório:
[CP05 - Web Development - GITHUB](https://github.com/fioresee/cp05-web-development)

- Deploy no Vercel:
[CP05 - Web Development - VERCEL](https://cp05-web-development.vercel.app/)

# Sobre o Projeto

Projeto desenvolvido como parte da disciplina de Web Development, utilizando React, Tailwind CSS, Fetch API e integração com uma API externa de receitas.
