//Exercício 10
//Escreva um programa que receba o número de um dia da semana (1 a 7) e exiba se é um
//"Dia Útil" ou "Fim de Semana". Utilize o switch para diferenciar entre os dias úteis e os fins
//de semana.

const prompt = require("prompt-sync")()

const dia = prompt("Digite uma numeração de 1 a 7: ")

switch(dia) {
    case '1':
        console.log("Segunda-feira")
        break
    case '2':
        console.log("Terça-feira")
        break
    case '3':
        console.log("Quarta-feira")
        break
    case '4':
        console.log("Quinta-feira")
        break
    case '5':
        console.log("Sexta-feira")
        break
    case '6':
        console.log("Sábado")
    case '7':
        console.log("Domingo")
}