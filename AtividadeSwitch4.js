//Exercício 4
//Implemente um programa que receba uma string com o nome de uma fruta ("maçã",
//"banana", "laranja", etc.) e exiba o preço da fruta com base em um conjunto de preços
//predefinidos usando a estrutura switch.

const prompt = require("prompt-sync")()

const fruta = prompt("Digite uma numeração de 1 a 7: ")

switch(fruta) {
    case 'baça':
        console.log("R$ 2,50")
        break
    case 'banana':
        console.log("R$ 0,50")
        break
    case 'laranja':
        console.log("R$ 1,50")
        break
}