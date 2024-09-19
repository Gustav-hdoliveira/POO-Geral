"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basededados = void 0;
var Basededados = /** @class */ (function () {
    function Basededados() {
        this.cars = [];
    }
    Basededados.prototype.addCarros = function (carro) {
        this.cars.push(carro);
    };
    Basededados.prototype.getCarros = function () {
        console.log(this.cars);
    };
    return Basededados;
}());
exports.Basededados = Basededados;
/*
let veiculo = new Carro("fusca", "Chevrolet", 20, 10)
let garagem = new Basededados()

garagem.addCarros(veiculo)
garagem.getCarros() */ 
