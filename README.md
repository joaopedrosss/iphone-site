# iphone-12-pro-max
a web site promoting Iphone 12 Pro Max

## See by yourself:
https://joaopedrosss.github.io/iphone-12-pro-max/

## Para melhor visualizar este conteúdo
Este documento foi escrito em Markdown Language.
[Clique Aqui](https://github.com/joaopedrosss/iphone-12-pro-max/blob/main/README.md) para melhor visualização do conteúdo.

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
