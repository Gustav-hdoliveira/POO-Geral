var reader = require('readline-sync')

class Pessoa{
    primeiroNome: string
    sobrenome: string
    nome_do_pai: string
    nome_da_mãe: string
    numeroRG: string
    numeroCPF: string
    dataNascimento: Array<number>
    
    constructor(nome: string, sobrenome:string, nome_do_pai: string, nome_da_mae:string, numero_rg:string, numero_cpf:string){
        this.primeiroNome = nome
        this.sobrenome = sobrenome
        this.nome_do_pai = nome_do_pai
        this.nome_da_mãe = nome_da_mae
        this.numeroRG = numero_rg
        this.numeroCPF = numero_cpf
        this.dataNascimento = []
    }
    getPessoa(): void{
        let nomeUpdate = reader.question("Qual o primeiro nome ?")
        this.primeiroNome = nomeUpdate
        let nome2Update = reader.question("Qual o sobrenome? ")
        this.sobrenome = nome2Update
        let nomePAIupdate = reader.question("Qual o nome do Pai? ")
        this.nome_do_pai = nomePAIupdate
        let nomeMãeUpdate = reader.question("Qual o nome da Mãe? ")
        this.nome_da_mãe = nomeMãeUpdate
        let RGUPdate = reader.question("Qual o RG? ")
        this.numeroRG = RGUPdate
        let CPFUpdate = reader.question("Qual o CPF? ")
        this.numeroCPF = CPFUpdate
        let NascimentoDiaUP = reader.question("Qual o dia da data de nascimento? ")
        let NascimentomesUP = reader.question("Qual a data do mes? ")
        let NascAnoUP = reader.question("Qual o ano da data? ")
        this.dataNascimento[0] = NascimentoDiaUP
        this.dataNascimento[1] = NascimentomesUP
        this.dataNascimento[2] = NascAnoUP
        console.log(Pessoa)
    }
    
    SistemaIdade(): void{
        if (this.dataNascimento[0] < 30 && this.dataNascimento[1] < 8 && this.dataNascimento[2] < 2024 ) {
            console.log(`Os responsaveis de ${this.primeiroNome, this.sobrenome}, são ${this.nome_do_pai}(pai) e ${this.nome_da_mãe}(mãe)`);
        } else {
            console.log("não são nescessarios responsaveis");
        }
    }
}

let pessoa = new Pessoa("Gustavo", "Henrique de Oliveira", "Geovane de Oliveira", "Silvia Leticia", "04383868096", "1939123",)

pessoa.getPessoa()
pessoa.SistemaIdade()