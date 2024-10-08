//Exercício 5
//Crie um programa que receba um valor numérico correspondente a uma operação
//aritmética (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão) e, com base
//nesse valor, execute a operação entre dois números fornecidos pelo usuário.


const prompt = require("prompt-sync")()

const operacao = prompt("Digite uma operação entre 1 a 4: ")

switch(operacao) {
    case '1':
        const som1 = parseInt(prompt("Digite o primeiro valor: ")) 
        const som2 = parseInt(prompt("Digite o segundo valor: "))
        const soma = som1 + som2
        console.log(`O resultado da soma é ${soma}`)
        break
    case '2':
        const sub1 = parseInt(prompt("Digite o primeiro valor: ")) 
        const sub2 = parseInt(prompt("Digite o segundo valor: ")) 
        const sub = sub1 - sub2 
        console.log(`O resultado da subtração é ${sub}`)
        break
    case '3':
        const mult1 = parseInt(prompt("Digite o primeiro valor: ")) 
        const mult2 = parseInt(prompt("Digite o segundo valor: ")) 
        const mult = mult1 * mult2 
        console.log(`O resultado da multiplicação é ${mult}`)
        break
    case '4':
        const div1 = parseInt(prompt("Digite o primeiro valor: ")) 
        const div2 = parseInt(prompt("Digite o segundo valor: ")) 
        const div = div1 / div2 
        console.log(`O resultado da divisão é ${div}`)
        break
}