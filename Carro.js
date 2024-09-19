var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(motor, rodas, marca, cor) {
        this.motor = motor;
        this.rodas = rodas;
        this.marca = marca;
        this.cor = cor;
        this.kmhmax = 215;
    }
    Carro.prototype.dirigir = function () {
        console.log("Estou dirigindo meu ".concat(this.marca));
    };
    Carro.prototype.pintarCarro = function () {
        console.log("Vou levar meu carro para repintar a cor ".concat(this.cor));
    };
    Carro.prototype.recalibrar = function () {
        console.log("Tenho que recraliar os pneus");
    };
    return Carro;
}());
var novocarro = new Carro(1.6, 22, 'Toyota', 'preto', '215kmh');
console.log(novocarro);
