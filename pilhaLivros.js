var rl = require('readline-sync');
var PilhaLivros = /** @class */ (function () {
    function PilhaLivros() {
        this.livros = [];
    }
    PilhaLivros.prototype.addLivro = function (livro) {
        this.livros.push(livro);
    };
    PilhaLivros.prototype.retirarLivro = function () {
        var livrofora = this.livros.pop();
        if (livrofora) {
            console.log("O livro n\u00BA ".concat(this.livros.length + 1, ": ").concat(livrofora, " foi removido da pilha."));
        }
        else {
            console.log("A pilha est\u00E1 vazia.");
        }
        return livrofora;
    };
    PilhaLivros.prototype.isEmpty = function () {
        return this.livros.length === 0;
    };
    PilhaLivros.prototype.tamanho = function () {
        return this.livros.length;
    };
    PilhaLivros.prototype.addAuto = function (quant) {
        var quantidade = this.livros.length + quant;
        for (var i = this.livros.length; i < quantidade; i++) {
            var nomeNovoLivro = 'Livro';
            var novoLivro = "".concat(nomeNovoLivro, " n\u00BA ").concat(this.livros.length + 1);
            this.livros.push(novoLivro);
        }
    };
    PilhaLivros.prototype.removeAuto = function (quant) {
        var quantidade = this.livros.length - quant;
        for (var i = this.livros.length; i > quantidade; i--) {
            console.log("O livro: ".concat(this.livros[i - 1], " foi removido."));
            this.livros.pop();
        }
    };
    return PilhaLivros;
}());
var pilhadeLivros = new PilhaLivros();
pilhadeLivros.addLivro("Revolução dos bichos");
pilhadeLivros.addLivro("Apenas 50centavos");
pilhadeLivros.addLivro("1984");
pilhadeLivros.addLivro("Pequeno Principe");
pilhadeLivros.addLivro("O Principe");
console.log(pilhadeLivros.isEmpty());
console.log(pilhadeLivros.tamanho());
pilhadeLivros.retirarLivro();
console.log(pilhadeLivros);
console.log(pilhadeLivros.tamanho());
pilhadeLivros.addAuto(3);
console.log(pilhadeLivros);
pilhadeLivros.removeAuto(4);
console.log(pilhadeLivros);
