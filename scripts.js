const botao = document.getElementById("botao");
botao.addEventListener("click", alertar);

var nome= document.getElementById("nome");
var saida = documente.getElementById("saida-de-dados")
var email = documente.getElementById("email")
var telefone = documente.getElementById("telefone")
var CEP = documente.getElementById("CEP")
var logradouro = documente.getElementById("logradouro")
var número = documente.getElementById("número")
var Complemento = documente.getElementById("complemento")
var bairro = documente.getElementById("bairro")
var cidade = documente.getElementById("cidade")
var estado = documente.getElementById("estado")
function alertar(){
// alert(" o nome inserido foi " + nome.value")

    saida.innerTexte = "nome: " + nome.value +
        " \n email: " + email.value; +
        "\n telefone: " + telefone.value; +
        "\n CEP: " + CEP.value; +
        "\n logradouro: " + logradouro.value; +
        "\n número: " + número.value; +
        "\n complemento: " + Complemento.value; +
        "\n bairro: " + bairro.value; +
        "\n cidade: " + cidade.value; +
        "\n estado: " + estado.value; +





     
}