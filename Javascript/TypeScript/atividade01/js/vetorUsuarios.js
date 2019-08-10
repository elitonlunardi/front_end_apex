var usuarios = [];

function cadastrar() {

    var usuario = document.getElementById("novoUsuario");
    var senha1 = document.getElementById("novaSenha");
    var senha2 = document.getElementById("repetirNovaSenha");

    if (usuario.value == "") {
        usuario.focus();
        alert("Favor preencher o campo usuário");
        return false;
    }

    if (senha1.value == "" || senha2.value == "") {
        senha1.focus();
        senha1.value = "";
        senha2.value = "";
        alert("Favor preencher os campos de senha");
        return false;
    }

    if (senha1.value != senha2.value) {
        senha1.focus();
        senha1.value = "";
        senha2.value = "";
        alert("As senhas precisam ser iguais");
        return false;
    }

    if (usuarios.findIndex(u => u.usuario == usuario.value) == -1) {
        var user = new Usuario(usuario.value, senha1.value);
        usuarios.push(user);
        usuario.value = "";
        senha1.value = "";
        senha2.value = "";
        alert("Usuário cadastrado! Efetue o login para continuar.");

    } else {
        alert("Usuário já cadastrado!");
    }


}

function logar() {
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");


    var index = usuarios.findIndex(u => u.usuario == usuario.value);

    if (index != -1) {
        if (usuarios[index].senha == senha.value) {
            tratarLogin();
        } else {
            alert('senha incorreta');
        }
    } else {
        alert("Usuário não encontrado");
    }

}

function tratarLogin() {
    var sectionLogin = document.getElementsByTagName("section")[0];
    var sectionProdutos = document.getElementsByTagName("section")[1];
    var ul = document.getElementsByTagName("ul")[0];
    ul.classList.remove("hidden");
    sectionLogin.className = "hidden";
    sectionProdutos.classList.remove("hidden");
}
