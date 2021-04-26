function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('escreva qualquer coisa');

    area.innerHTML = 'bem vindo'+texto;
}