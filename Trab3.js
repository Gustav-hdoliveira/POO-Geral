"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Trab3dados_1 = require("./Trab3dados");
var reader = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(nomedoCarro, marcaCarro, quantidadedeGasolina, KilometragemporLitro) {
        this.modelo = nomedoCarro;
        this.marca = marcaCarro;
        this.gasolinaQuant = quantidadedeGasolina;
        this.KmporLitro = KilometragemporLitro;
    }
    Carro.prototype.andar = function () {
        var distancia = reader.question("Quantos quilometros de viagem deseja atravessar? ");
        var consumoporKm = 1000 / this.KmporLitro; //Calcula quantos ML equivalem a 1 quilometro
        var consumoTotal = consumoporKm * distancia; //
        var gasolinaAtualizar = this.gasolinaQuant - consumoTotal;
        if (gasolinaAtualizar < 0) {
            console.log("Não á gasolina o bastante no carro para concluir a viagem");
        }
        else {
            this.gasolinaQuant = gasolinaAtualizar;
            console.log("a gasolina restante \u00E9: ".concat(this.gasolinaQuant));
        }
    };
    Carro.prototype.setDados = function () {
        var quantGasolin = reader.question("Quantos litros de gasolina existem no tanque de seu carro? ");
        var consumoGasolina = reader.question("Quantos quilometros seu carro faz por litro? ");
        this.gasolinaQuant = quantGasolin;
        this.KmporLitro = consumoGasolina;
    };
    Carro.prototype.obterVeiculo = function () {
        var nomeCarroUpdate = reader.question("Qual o modelo do carro? ");
        var marcaUpdate = reader.question("Qual a marca dona do carro? ");
        this.modelo = nomeCarroUpdate;
        this.marca = marcaUpdate;
    };
    return Carro;
}());
exports.Carro = Carro;
var carro = new Carro("Fiesta", "Wolksvaguen", 22, 8);
carro.obterVeiculo();
carro.setDados();
carro.andar();
var garagem = new Trab3dados_1.Basededados();
garagem.getCarros();
