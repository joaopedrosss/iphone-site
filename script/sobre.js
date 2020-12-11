function riscar(name){
    if (name.style.color == "white"){
        name.style.color = "#0056B3"
    } else {
        name.style.color = "white"
    }
}

function fundo(fundo){
    if(fundo.style.color == "white"){
        fundo.style.background = "#0f3bbd";
        fundo.style.color = "black";
    }
    fundo.textContent = "Atualizado em 12 de dezembro de 2020";
}

function fundo2(fundo){
        fundo.style.background = "black";
        fundo.style.color = "white"; 
}

function color(l) {
    l.style.color= "#0f3bbd";
}
function uncolor(l) {
    l.style.color="white";
}
