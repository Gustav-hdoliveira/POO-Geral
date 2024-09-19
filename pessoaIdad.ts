class Pessoa{
    nome: string
    idade: number

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade}`)
    }

}
class Crianca extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou crianca`)
    }
}
class Adulto extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou Adulto`)
    }
}
class Idoso extends Pessoa {
    cumprimentar(): void{
        console.log(`Olá meu nome é: ${this.nome}, tenho ${this.idade} anos e sou Idoso`)
    }
}