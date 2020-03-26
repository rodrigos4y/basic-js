let idade = prompt("Quantos anos você tem?");

function calculaDiasDeVida(idade){
    let diasDeVida = idade * 365;   
    return diasDeVida;
}

function calculaBatimentos(dias){
    let batimentos =dias * 24 * 60 * 80;
    return batimentos;
}

let dias = calculaDiasDeVida(idade);
let batimentosCardiacos = calculaBatimentos(dias);


document.write(`Você já viveu ${dias} dias.`);
document.write("Seu coração bateu " + batimentosCardiacos + " vezes até agora.");

