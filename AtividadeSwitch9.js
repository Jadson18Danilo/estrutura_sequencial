//Exercício 9
//Crie um programa que receba um código de status HTTP (por exemplo, 200, 404, 500) e
//exiba a mensagem correspondente (por exemplo, "OK" para 200, "Not Found" para 404).
//Utilize switch para mapear os códigos de status.

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