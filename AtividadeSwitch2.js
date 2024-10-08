//Exercício 2
//Crie um programa que receba uma nota de 0 a 10 e exiba uma mensagem de acordo com a
//nota:
//o 0 a 4: "Reprovado"
//o 5 a 6: "Recuperação"
//o 7 a 10: "Aprovado"
//Use a estrutura switch para lidar com os diferentes casos.

const prompt = require("prompt-sync")()

const nota = prompt("Digite uma nota de 1 a 10: ")

switch(nota) {
    case '0' || '1' || '2' ||  '3' || '4':
        console.log("Reprovado")
        break
    case '5' || '6':
            console.log("Recuperação")
        break
    case '7' || '8' || '9' ||  '10':
                console.log("Aprovado")
        break
}