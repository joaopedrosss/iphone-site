# iphone-12-pro-max
Um site promovendo o Iphone 12 Pro Max.
A web site promoting Iphone 12 Pro Max.

## See by yourself:
https://joaopedrosss.github.io/iphone-12-pro-max/

## Para melhor visualizar este conteúdo
Este documento foi escrito em Markdown Language.
[Clique Aqui](https://github.com/joaopedrosss/iphone-12-pro-max/blob/main/README.md) para melhor visualização do conteúdo.

## Integrantes da Equipe

- Antonny Gabriel da Conceição Félix
- Eduardo Romero de Araújo Guilhermino Sousa
- João Pedro Simões da Silva Sousa
- Maria Clara Gomes Oliveira

## IFAL - Resumo das alterações - 22/11/2020

### sobre.html
Mudamos o nome da antiga pagina `devs.html` para `sobre.html`, bem como seu nome na barra de navegação.Apenas uma mudança de nome,haja visto que seu conteúdo já estava presente na versão anterior.
Além disso, agora ela conta com um link do repositório do projeto no github:

```
<div class='github'>
        <p>
            O código fonte do projeto se encontra em seu <a href='https://github.com/joaopedrosss/iphone-12-pro-max' target='_blank'>Repositório do Github</a>
        </p>
    </div>
```
### devs.css
Foi adicionado um seletor a fim de mudar o estilo no bloco de código anterior:

```
.github{
    text-align: center !important;
    font-size: 1.5rem;
}
```

### index.html
Foi adicionado a tag `<pictures>` a fim de ter imagens responsivas:

```
<picture>
    <source media="(min-width: 900px)" srcset="phone -2.png" >
    <img src="images/iphone -1.png" alt="iphone-12" style='width:auto'>
</picture>
```

### buy.html
Foi criada esta nova página na qual estão inseridas uma imagem de fundo,uma tabela( `class="dados"`) e um título (`h2`).
A tabela tem **Título** (`<caption>Meu Iphone</caption>`),**Cabecalho**(`<thead><tr><td colspan="2">Iphone 12 Pro Max</td></tr></thead>`),com **mesclagem de colunas** incluido.

### buy.css

Foi adicionado uma imagem de fundo a página `buy.html`:
```
body {
    background-image: url("https://lh3.googleusercontent.com/pw/ACtC-3e3mO3DMh-YoArEDcXwdnwcgtnf8Rn_BAbv5MHWOy9jMeCeHIHq7-_sMY1o_X-nf1NZKsULQwzETRCw9F3nNkfGfDCtnu8Vjm5CsJUPdC9_2xabZInEkrjyOfaQdUTWDI-F_thIYxxUY5i0XLsFPgHK=w1151-h647-no?authuser=0");
}
``` 

Além disso, outro recurso disponível é o de **células zebradas**.

```
tbody > tr:nth-child(even){
    background-color: rgba(11, 11, 216, 0.137);
}
tbody > tr:nth-child(odd){
    background-color: #04041b;
}
```

Somando a isso,ainda há todas as outras declarações CSS para estilizar a página.

### index.css
Também foi acrescentado um recurso de **sombreamento** em `index.css` em `<h1 class="title">Chegou o Novo Iphone da Apple</h1>`:

```
.title {
    text-shadow: 2px 2px 5px rgb(78, 73, 73);
}
```

## IFAL - Resumo das alterações - 15/11/2020

### index.html

Em `<body>` , há duas tags delimitadores de conteúdo: `<header>` e `<section>`.
A tag `<header>` ,cuja classe é `main-header`, delimita o **Cabeçalho** da página.
A tag `<header>` e seu conteúdo está presente e é o mesmo em todos os documentos html. 

Foi alterado em `<header>`:
* o nome da página "Especificações" passar a ser "Funcionalidades".

Em `<section>`, da classe `main-section`, é onde fica o conteúdo principal da página.

### index.css

Houve sutis mudanças de cores: foi alterado a cor de fundo da `<div>` da classe `action-text`, além de adicionada na mesma margem no topo de 2%.

Além disso,foi adicionado o seguinte bloco de código:

```
.btn{
    background-color:#0f3bbd;
    outline: none;
   border: none;
}
```

Tal bloco é referente ao botão na `<div>` "Saiba Mais" no qual foram retiradas bordas e contornos, além de mudar a cor de fundo.

### whats.html

Foi adicionado o seguinte bloco de código:

```
<p>
    Conheça mais sobre as funcionalidades que o novo Iphone tem a te oferecer.
</p>
<div class='saiba-mais'>
    <a class="btn btn-primary btn-lg" href="hardware.html" role="button">Funcionalidades</a>
</div>
```

### whats.css

Foi adicionado o seguinte bloco de código:

```
.btn{
    background-color:#0f3bbd;
    outline: none;
   border: none;
}
```
Para o botão de "Funcionalidades".

### devs.html

Foi adicionada uma `<div>`, de classe "devs", e um `<footer>`.

A `<div>` contém os créditos aos desenvolvedores do front-end, com um título `<h2>` e uma lista não ordenada `<ul>`.

Já `<footer>` contém apenas um título `<h4>` com a data da última atualização feita no site.

### devs.html

Foram adicionadas diversas declarações css para melhor estilização dos elementos, definindo:
- margens
- tamanho de fonte
- alinhamento de texto
- estilo de lista

Em especial, vale destacar o seguinte bloco:

```
h4 {
    border: 1px white solid;
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
    padding: 1%;
}
```

Que define a estilização do título `<h4>` em `<footer>`.

Para `<h4>` , foi adicionada uma**borda**, de 1px de largura, de cor branca e estilo solid.

### Considerações Finais

**Não foi usada nenhum tipo de sombreamento, seja para bordas ou textos, por razões de escolha das estéticas mais apropriadas ao front-end.**

## IFAL - Resumo das alterações - 08/11/2020
O resumo das alterações estão nos comentários em um dos últimos commits feitos disponivel em:
https://github.com/joaopedrosss/iphone-12-pro-max/commit/4f983af5eaa95eb5601d01812a38c95893c75473
