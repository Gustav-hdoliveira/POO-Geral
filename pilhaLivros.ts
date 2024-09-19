let rl = require('readline-sync')
class PilhaLivros{
    livros: string[] = []

    addLivro(livro: string): void{
        this.livros.push(livro)
    }

    retirarLivro(): string | undefined{
        const livrofora = this.livros.pop()
        if (livrofora){
            console.log(`O livro nº ${this.livros.length + 1}: ${livrofora} foi removido da pilha.`)
        } else {
            console.log(`A pilha está vazia.`)
        }
        return livrofora
    }

    isEmpty(): boolean{
        return this.livros.length === 0
    }

    tamanho(): number{
        return this.livros.length
    }

    addAuto(quant: number): void{
        let quantidade = this.livros.length + quant
        for (let i = this.livros.length; i < quantidade; i++) {
            let nomeNovoLivro = 'Livro'
            let novoLivro = `${nomeNovoLivro} nº ${this.livros.length + 1}`
            this.livros.push(novoLivro)
        }
    }

    removeAuto(quant: number):void{
        let quantidade = this.livros.length - quant
        for (let i = this.livros.length; i > quantidade; i--) {
            console.log(`O livro: ${this.livros[i - 1]} foi removido.`)
            this.livros.pop()
        }
    }
}

const pilhadeLivros = new PilhaLivros()

pilhadeLivros.addLivro("Revolução dos bichos")
pilhadeLivros.addLivro("Apenas 50centavos")
pilhadeLivros.addLivro("1984")
pilhadeLivros.addLivro("Pequeno Principe")
pilhadeLivros.addLivro("O Principe")
console.log(pilhadeLivros.isEmpty())
console.log(pilhadeLivros.tamanho())


pilhadeLivros.retirarLivro()
console.log(pilhadeLivros)

console.log(pilhadeLivros.tamanho())

pilhadeLivros.addAuto(3)

console.log(pilhadeLivros)

pilhadeLivros.removeAuto(4)

console.log(pilhadeLivros)