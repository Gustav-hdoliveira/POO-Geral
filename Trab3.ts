import { Basededados } from "./Trab3dados"

var reader = require('readline-sync')

export interface CarroPadra{
    modelo: string
    marca: string
    gasolinaQuant: number
    KmporLitro: number
}
export interface CarroTestes{
    andar():void;
    setDados():void;
    obterVeiculo():void;
}
export class Carro implements CarroPadra, CarroTestes{
    modelo: string
    marca: string
    gasolinaQuant: number
    KmporLitro: number
    constructor(nomedoCarro: string, marcaCarro: string, quantidadedeGasolina: number, KilometragemporLitro: number){
        this.modelo = nomedoCarro
        this.marca = marcaCarro
        this.gasolinaQuant = quantidadedeGasolina
        this.KmporLitro = KilometragemporLitro        
    }
    andar(): void {
        let distancia = reader.question("Quantos quilometros de viagem deseja atravessar? ")
        let consumoporKm = 1000 / this.KmporLitro //Calcula quantos ML equivalem a 1 quilometro
        let consumoTotal = consumoporKm * distancia //
        let gasolinaAtualizar = this.gasolinaQuant - consumoTotal
        if (gasolinaAtualizar < 0){
            console.log("Não á gasolina o bastante no carro para concluir a viagem")
        } else {
            this.gasolinaQuant = gasolinaAtualizar
            console.log(`a gasolina restante é: ${this.gasolinaQuant}`);
            
        }
    }
    setDados(): void {
        let quantGasolin = reader.question("Quantos litros de gasolina existem no tanque de seu carro? ")
        let consumoGasolina = reader.question("Quantos quilometros seu carro faz por litro? ")
        this.gasolinaQuant = quantGasolin
        this.KmporLitro = consumoGasolina
    }
    obterVeiculo(): void {
        let nomeCarroUpdate = reader.question("Qual o modelo do carro? ")
        let marcaUpdate = reader.question("Qual a marca dona do carro? ")
        this.modelo = nomeCarroUpdate
        this.marca = marcaUpdate
    }
}
let carro = new Carro("Fiesta", "Wolksvaguen", 22, 8)
carro.obterVeiculo()
carro.setDados()
carro.andar()
let veiculo = new Carro("fusca", "Chevrolet", 20, 10)
let garagem = new Basededados()

garagem.addCarros(veiculo)
garagem.getCarros()