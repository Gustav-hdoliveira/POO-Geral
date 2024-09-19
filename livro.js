var reader = require('readline-sync');
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }
    Livro.prototype.getlivro = function () {
        var tituloUP = reader.question('Qual o titulo do livro? ');
        var autorUP = reader.question('Qual o nome do autor? ');
        var anoUP = reader.question('Qual o ano de lançamento do livro? ');
        this.titulo = tituloUP;
        this.autor = autorUP;
        this.anoPublicado = anoUP;
    };
    Livro.prototype.obterDetalhes = function () {
        console.log("O livro: \"".concat(this.titulo, "\" foi publicado em ").concat(this.anoPublicado, " pelo escritor ").concat(this.autor));
    };
    return Livro;
}());
var livro = new Livro("Sombras Ossos e Metal", "Gustavo Henrique de Oliveira", 2028);
livro.obterDetalhes();
