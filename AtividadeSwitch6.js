//Exercício 6
//Escreva um programa que receba uma letra representando uma categoria de habilitação (A,
//B, C, D, ou E) e exiba uma mensagem informando para quais tipos de veículos essa
//categoria permite dirigir. Utilize switch para cada caso.


const prompt = require("prompt-sync")()

const dia = prompt("Digite a categória entre A, B, C, D ou E: ")

switch(dia) {
    case 'a':
        console.log(" Para motociclistas, dividida em três subcategorias: A1, A2 e A3.")
        break
    case 'b':
        console.log("Para a maioria dos motoristas de automóveis.")
        break
    case 'c':
        console.log("Para veículos de carga, como caminhões, caminhonetes, vans de carga, carros, picapes e vans.")
        break
    case 'd':
        console.log("Para veículos de transporte de passageiros, como vans, micro-ônibus e ônibus")
        break
    case 'e':
        console.log("Para veículos da categoria B, C e D, além de conjuntos de veículos compostos por uma unidade tratora da categoria C ou D e um reboque ou semirreboque com peso bruto total superior a 6.000 kg")
        break
}