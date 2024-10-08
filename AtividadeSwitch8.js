//Exercício 8
//Faça um programa que receba um número de 1 a 4 representando uma estação do ano (1
//para "Primavera", 2 para "Verão", 3 para "Outono", 4 para "Inverno") e exiba uma
//mensagem com a estação correspondente. Use o switch para definir cada caso.


const prompt = require("prompt-sync")()

const estacao = prompt("Digite uma numeração de 1 a 4: ")

switch(estacao) {
    case '1':
        console.log("Primavera: Meu signo é de ar... de amar! Da estação da primavera, das cores, da diversidade das flores.Tem como símbolo a balança, que pondera, que pela justiça preza.Regido por Vênus, um signo que encanta.Sou eu, libriana... Se você não me odeia, me ama.")
        break
    case '2':
        console.log("Verão: Quero apenas cinco coisas...Primeiro é o amor sem fimA segunda é ver o outono A terceira é o grave inverno Em quarto lugar o verão A quinta coisa são teus olhos Não quero dormir sem teus olhos. Não quero ser... sem que me olhes. Abro mão da primavera para que continues me olhando.")
        break
    case '3':
        console.log("Outono:O outono chegou e trouxe amor...Suavemente nos tocou...Folhas leve...Vento leve...Leve tudo que não preciso.")
        break
    case '4':
        console.log("Inverno: Bem-vindo, inverno! Que a estação traga a tranquilidade que precisamos para nos renovar.” “Que os dias frios do inverno tragam a beleza das pequenas coisas e o calor dos grandes sentimentos")
        break
}