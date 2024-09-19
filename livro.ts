var reader = require('readline-sync')
class Livro{
    titulo: string
    autor: string
    anoPublicado: number

    constructor(titulo: string, autor: string, anoPublicado: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicado = anoPublicado
    }

    getlivro(): void{
        let tituloUP = reader.question('Qual o titulo do livro? ')
        let autorUP = reader.question('Qual o nome do autor? ')
        let anoUP = reader.question('Qual o ano de lançamento do livro? ')
        this.titulo = tituloUP
        this.autor = autorUP
        this.anoPublicado = anoUP
    }
    obterDetalhes(): void{
        console.log(`O livro: "${this.titulo}" foi feito pelo escritor ${this.autor} e publicado em ${this.anoPublicado}`)
    }
}

let livro = new Livro("Sombras Ossos e Metal", "Gustavo Henrique de Oliveira", 2028)
livro.obterDetalhes()