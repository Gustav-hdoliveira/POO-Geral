let reader = require('readline-sync')
//Parte 3
import { Data } from "./AlunoEdata";
class Voo {
    numeroVoo: string
    data: Data
    acento: Array<number>
    constructor(numeroVoo: string, data: Data){
        this.numeroVoo = numeroVoo
        this.data = data
        this.acento = []
    }
    proximoLivre(){
        console.log(this.numeroVoo[0])
    }
    verifica(cadeira: number ): void{
        for (let A = 0; A < 101; A++) {
            this.acento.push(0) // adiciona valores todas as vezes que o ciclo é começado
            let element = this.acento[cadeira] //seleciona qual o valor dentro do array que vai ser celecionado
            if (A = 100) {
                if (element == 0) {
                    console.log(`A cadeira nº ${cadeira} está ocupada`)    
                    console.log(element)
                } else {
                    console.log(`A cadeira nº ${cadeira} está livre`)
                    console.log(element)
                }
            }
        }
        
    }
    ocupa(cadeira: number): void{
        this.acento[cadeira + 1] = 1
        if (this.acento[cadeira] == 0) {
            console.log("Tente novamente")
        } else {
            console.log("Parabens sua reserva foi realizada")
        }
    }
    vagas():void{
        for (let w = 0; w < this.acento.length; w++) {
            
            if (this.acento[w] < 1) {
                console.log(`o acento nº:${this.acento[w] + 1} está livre.`)
            }
        }
    }
    setVOO(): void{
        let numvooUP = reader.question("Qual o numero do próximo voo disponivel? ")
        this.numeroVoo = numvooUP
        let dayup = reader.question("Digite um dia: ")
        let mouthup = reader.question("DIgite um mes: ")
        let anoup = reader.question("Digite um ano: ")
        this.data.dia = dayup
        this.data.mes = mouthup
        this.data.ano = anoup
    }
    getvoo(): string{
        return this.numeroVoo
    }
    getData(){
        return this.data
    }
    clone(): Voo{
        return new Voo(this.numeroVoo, this.data)
    }
}
let dataNovo = new Data(10, 11, 2000)
const voonovo = new Voo("20B", dataNovo)

voonovo.setVOO
console.log(voonovo.verifica(30))
console.log(voonovo.ocupa(30))
console.log(voonovo.proximoLivre())
console.log(voonovo.vagas())

console.log(voonovo.acento)