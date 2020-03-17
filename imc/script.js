let peso;
let altura;

peso = prompt("Qual o seu peso?");
altura = prompt("Qual a sua altura?");

function imc(){
    var calculoImc = peso/(altura**2);
    return Math.round(calculoImc);
}

console.log(imc());
imc() < 25 ? console.log("Seu IMC esta ok!") : console.log("Seu IMC esta alto!");