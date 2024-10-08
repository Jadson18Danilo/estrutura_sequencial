//Exercício 7
//Desenvolva um programa que receba o número de um mês (de 1 a 12) e exiba quantos dias
//esse mês possui. Considere fevereiro com 28 dias. Use a estrutura switch para implementar
//a lógica.
//Janeiro, março, maio, julho, agosto, outubro e dezembro: com 31 dias
//Abril, junho e setembro: com 30 dias
const prompt = require("prompt-sync")()

const mes = prompt("Digite uma numeração do mês de 1 a 12: ")

switch(mes) {
    case '1':
        console.log("Janeiro com 31 dias")
        break
    case '2':
        console.log("Fevereiro com 28 dias, ou 29 nos anos bissextos")
        break
    case '3':
        console.log("Março com 31 dias")
        break
    case '4':
        console.log("Abriu com 30 dias")
        break
    case '5':
        console.log("Maio com 31 dias")
        break
    case '6':
        console.log("Junho com 30 dias")
        break
    case '7':
        console.log("Julho com 31 dias")
        break
    case '8':
        console.log("Agosto com 31 dias")
        break
    case '9':
        console.log("Setembro com 30 dias")
        break
    case '10':
        console.log("Outubro com 31 dias")
        break
    case '11':
        console.log("Novembro com 30 dias")
        break
    case '12':
        console.log("Dezembro com 31 dias")
        break
}