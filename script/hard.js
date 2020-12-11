function mudar(img){
    img.src = "images/new-apple.svg";
}

function mudar2(img){
    img.src = "images/w-apple.svg";
}

function color(l) {
    l.style.color= "#0f3bbd";
}
function uncolor(l) {
    l.style.color="white";
}

var btop = document.getElementById("botaoTop");
window.onscroll = function(){scroll()}

function scroll(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btop.style.display = "block";
  } else {
    btop.style.display = "none";
  }

}

function goTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
