"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reader = require('readline-sync');
//Parte 3
var atividadPT1_1 = require("./atividadPT1");
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.acento = [];
    }
    Voo.prototype.proximoLivre = function () {
        console.log(this.numeroVoo[0]);
    };
    Voo.prototype.verifica = function (cadeira) {
        for (var A = 0; A < 101; A++) {
            this.acento.push(0); // adiciona valores todas as vezes que o ciclo é começado
            var element = this.acento[cadeira]; //seleciona qual o valor dentro do array que vai ser celecionado
            if (A = 100) {
                if (element == 0) {
                    console.log("A cadeira n\u00BA ".concat(cadeira, " est\u00E1 ocupada"));
                    console.log(element);
                }
                else {
                    console.log("A cadeira n\u00BA ".concat(cadeira, " est\u00E1 livre"));
                    console.log(element);
                }
            }
        }
    };
    Voo.prototype.ocupa = function (cadeira) {
        this.acento[cadeira + 1] = 1;
        if (this.acento[cadeira] == 0) {
            console.log("Tente novamente");
        }
        else {
            console.log("Parabens sua reserva foi realizada");
        }
    };
    Voo.prototype.vagas = function () {
        for (var w = 0; w < this.acento.length; w++) {
            if (this.acento[w] < 1) {
                console.log("o acento n\u00BA:".concat(this.acento[w] + 1, " est\u00E1 livre."));
            }
        }
    };
    Voo.prototype.setVOO = function () {
        var numvooUP = reader.question("Qual o numero do próximo voo disponivel? ");
        this.numeroVoo = numvooUP;
        var dayup = reader.question("Digite um dia: ");
        var mouthup = reader.question("DIgite um mes: ");
        var anoup = reader.question("Digite um ano: ");
        this.data.dia = dayup;
        this.data.mes = mouthup;
        this.data.ano = anoup;
    };
    Voo.prototype.getvoo = function () {
        return this.numeroVoo;
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.clone = function () {
        return new Voo(this.numeroVoo, this.data);
    };
    return Voo;
}());
var dataNovo = new atividadPT1_1.Data(10, 11, 2000);
var voonovo = new Voo("20B", dataNovo);
voonovo.setVOO;
console.log(voonovo.verifica(30));
console.log(voonovo.ocupa(30));
console.log(voonovo.proximoLivre());
console.log(voonovo.vagas());
console.log(voonovo.acento);
