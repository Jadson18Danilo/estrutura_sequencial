//Exercício 3
//Escreva um programa que receba um valor de 1 a 12 representando um mês do ano e exiba
//o nome do mês correspondente. Utilize o switch para a lógica.

const prompt = require("prompt-sync")()

const mes = prompt("Digite uma numeração do mês entre 1 a 12: ")

switch(mes) {
    case '1':
        console.log("Janeiro")
        break
    case '2':
        console.log("Fevereiro")
        break
    case '3':
        console.log("Março")
        break
    case '4':
        console.log("Abriu")
        break
    case '5':
        console.log("Maio")
        break
    case '6':
        console.log("Junho")
        break
    case '7':
        console.log("Julho")
        break
    case '8':
        console.log("Agosto")
        break
    case '9':
        console.log("Setembro")
        break
    case '10':
        console.log("Outubro")
        break
    case '11':
        console.log("Novembro")
        break
    case '12':
        console.log("Dezembro")
        break
}