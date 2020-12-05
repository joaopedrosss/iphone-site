function validarCadastro(){
    var nome = document.cadastro.nome.value;
    var user = document.cadastro.user.value;
    var email = document.cadastro.email.value;
    var senha = document.cadastro.senha.value;
    /*var repsenha = document.cadastro.senha-denovo.value;*/
    /*console.log(nome,user,email,senha);*/
    if (nome == "" || 
    nome.length < 8){
        alert("O campo NOME precisa ter no mínimo 8 dígitos");
        nome.focus();
        return false;
    }
};
