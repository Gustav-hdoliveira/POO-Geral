var leitor = require('readline-sync')
class Carro {
    motor: number;
    rodas: number;
    marca: string;
    cor: string;
    kmhmax: number

    constructor(motor: number, rodas: number, marca: string, cor: string, kmhmax: number){
        this.motor = motor
        this.rodas = rodas
        this.marca = marca
        this.cor = cor
        this.kmhmax = 215
    }

    dirigir(){
        console.log(`Estou dirigindo meu ${this.marca}`)
    }

    pintarCarro(){
        console.log(`Vou levar meu carro para repintar a cor ${this.cor}`)
    }

    recalibrar(){
        console.log(`Tenho que recraliar os pneus`)
    }
}
var marCarro = leitor.question("Qual a marca do seu carro? ")
const novocarro = new Carro(1.6, 22, marCarro, 'preto', 215)

let menu = true
while (menu) {
    const opção: number = leitor.questionInt(" 1 - dirigir, 2 -")
    switch (opção) {
        case 1:
            novocarro.dirigir()
            break;
        case 2:
            novocarro.pintarCarro()
            break;
        case 3:
            novocarro.recalibrar()
            break;
        case 4:
            console.log('Saindo...')
            menu = false
            break;
    }
}