localStorage.setItem("ic","0")
localStorage.setItem("0","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000")
localStorage.setItem("1","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-silver-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000")
localStorage.setItem("2","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021660000")
localStorage.setItem("3","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-graphite-hero?wid=470&hei=556&fmt=png-alpha&.v=1604021658000")


function mudar(){
    //cores do iphone para informar no title
    var cores = ["Iphone 12 Pro Max Blue","Iphone 12 Pro Max Silver","Iphone 12 Pro Max Gold","Iphone 12 Pro Max Graphite"]

    //ic = image counter - variavel que vai servir para navegar entre as imagens do iphone em diferentes cores - blue,silver,gold,graphite - nos links acima
    var imagem = document.getElementById("iphones")
    const ic = localStorage.getItem("ic")

    console.log(ic);

    var novo = String(parseInt(ic)+ 1)
    localStorage.removeItem("ic");
    if (novo > 3 ){
        novo = 0;
    }

    const nova_imagem = localStorage.getItem(novo)
    console.log(nova_imagem);
    imagem.src = String(nova_imagem)
    imagem.title = cores[novo]

    localStorage.setItem("ic",novo);
}


function color(l) {
    l.style.color= "#0f3bbd";
}
function uncolor(l) {
    l.style.color="white";
}

