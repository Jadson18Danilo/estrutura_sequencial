//Exercício 10
//Escreva um programa que receba o número de um dia da semana (1 a 7) e exiba se é um
//"Dia Útil" ou "Fim de Semana". Utilize o switch para diferenciar entre os dias úteis e os fins
//de semana.

const prompt = require("prompt-sync")()

const dia = prompt("Digite uma numeração de 1 a 7: ")

switch(dia) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
        console.log("Dia Útil")
        break
    default:
        console.log("Fim de Semana")
}    