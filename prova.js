var reader = require("readline-sync");
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.respostas = [];
        this.gabarito = gabarito;
    }
    Prova.prototype.respostaAluno = function () {
        for (var _i = 0, _a = this.gabarito; _i < _a.length; _i++) {
            var valor = _a[_i];
            var pergunta = 1;
            console.log("Pergunta n\u00BA ".concat(pergunta));
            var respostaAluno = reader.question("Qual sua resposta? A, B, C, D, E: ");
            this.respostas[pergunta - 1] = respostaAluno.toUpperCase();
            pergunta++;
        }
    };
    Prova.prototype.acertos = function (vall) {
        var acertos = 0;
        var acertos2 = 0;
        for (var _i = 0, _a = this.gabarito; _i < _a.length; _i++) {
            var RespQuest = _a[_i];
            var NUMquest = 0;
            if (RespQuest == this.respostas[NUMquest] && NUMquest < 10) {
                acertos++;
            }
            else if (RespQuest == this.respostas[NUMquest]) {
                acertos2++;
            }
            else {
            }
        }
        if (vall = 1) {
            return acertos;
        }
        else if (vall = 2) {
            return acertos2;
        }
        else {
            return acertos + acertos2;
        }
    };
    Prova.prototype.setProva = function () {
        for (var i = 0; i < this.gabarito.length; i++) {
            var PerguntaProva = reader.question("Qual a resposta da pergunta ".concat(i + 1, "? A, B, C, D ou E? "));
            this.gabarito[i] = PerguntaProva;
        }
    };
    Prova.prototype.nota = function () {
        var nota10P = this.acertos(1) / 2;
        var nota5U = this.acertos(2);
        var notaTOTAL = nota10P + nota5U;
        return notaTOTAL;
    };
    Prova.prototype.maior = function (outraProva) {
        return new Prova(['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C']);
    };
    return Prova;
}());
var prova = new Prova(['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C']);
prova.respostaAluno();
prova.nota();
