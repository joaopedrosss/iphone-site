function validarCadastro(){
    var nome = document.cadastro.nome.value;
    var user = document.cadastro.user.value;
    var email = document.cadastro.email.value;
    var senha = document.cadastro.senha.value;
    var rep_senha = document.cadastro.rep_senha.value;
    var receber = document.cadastro.receber;
    var termos = document.cadastro.termos;

    //console.log(termos[0].checked );

    if (nome == "" || 
    nome.length < 3){
        alert("O campo NOME precisa ter no mínimo 3 dígitos");
        nome.focus();
        return false;
    };
    if (user == "" || 
    user.length < 3){
        alert("O campo USUÁRIO precisa ter no mínimo 3 digitos")
        return false;
    };
    if (email == ""){
        alert("O campo EMAIL é de preenchimento obrigatório.")
        return false;
    };
    if (senha == "" ||
    senha.length < 8){
        alert("A SENHA precisa ter no mínimo 8 digitos")
        return false;
    };
    if (rep_senha == "" ||
    senha !== rep_senha) {
        alert("As SENHAS não são iguais")
        return false;
    };
    q_receber = -1;
    for (x = receber.length - 1; x > -1; x--){
        if(receber[x].checked){
            q_receber = x;
        }
    };
    if(q_receber == -1){
        alert("Quer receber nossos emails?");
        receber[0].focus();
        return false;
    };
    if (!(termos[0].checked)){
        alert("Precisa aceitar nossos Termos e Condições de Serviço para prosseguir.");
        return false;
    }
    aceito();
};

function aceito(){
    alert("Seus dados foram aceitos com sucesso");
}

