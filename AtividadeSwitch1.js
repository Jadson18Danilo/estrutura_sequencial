//Exercício 1
//Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana
//correspondente (por exemplo, 1 para "Domingo", 2 para "Segunda-feira", etc.). Use a
//estrutura switch para implementar a solução.

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
        break
    case '7':
        console.log("Domingo")
        break
}