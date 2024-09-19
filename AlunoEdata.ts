

let reader = require('readline-sync')

interface Aluno {
    constructor(matricula: Array<number>, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): void;
}
class Aluno {
    matricula: Array<number>
    nomeAluno: string
    notaAval1: number
    notaAval2: number
    notaTrabalho: number

    constructor(matricula: Array<number>, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nomeAluno = nome
        this.notaAval1 = notaProva1
        this.notaAval2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    setvalues():void{
        let diaUp = reader.questionInt("Insira o dia do nascimento: ")
        let mesUp = reader.questionInt("Insira o mês de nascimento: ")
        let anoUp = reader.questionInt("Insira o ano de nascimento: ")
        let matricula = [diaUp, mesUp, anoUp]
        this.matricula = matricula
        let alunonome = reader.question('Qual o nome do aluno? ')
        this.nomeAluno = alunonome
        let notaAval1 = reader.questionInt("qual a nota da avaliação 1")
        let notaAval2 = reader.questionInt("qual a nota da avaliação 2")
        let notaAval3 = reader.questionInt("qual a nota do trabalho")
        this.notaAval1 = notaAval1
        this.notaAval2 = notaAval2
        this.notaTrabalho = notaAval3
    }
    getaluno():void{
        console.log(`nome: ${this.nomeAluno}, data de nascimento: ${this.matricula[0]}/${this.matricula[1]}/${this.matricula[2]}, notas: ${this.notaAval1}, ${this.notaAval2}, ${this.notaTrabalho
        }`);
        
    }
    media():number{
        return (this.notaAval1 + this.notaAval2 + this.notaTrabalho) / 3
    }
    final():void{
        //não entendi
    }
}

//Questão 2
export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): number;
    getDia(): void;
    getMes(): void;
    getMesExtenso(): void;
    getAno(): void;
    isBissexto(): void;
    clone(): void;
}
export class Data {
    dia: number
    mes: number
    ano: number
    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    comparar(outraData: Data):void{
        if(this.dia == outraData.dia && this.mes == outraData.mes && this.ano == outraData.ano){
            console.log('as datas são iguais');
        } else {
            console.log("as datas são diferentes")
        }
    }
    getDia(): void{
        return
    }
    getMes(): void{
        let mesUp = reader.questionInt('mes da data mágica: ')
        this.mes = mesUp
    }
    getMesExtenso(): void{
        switch (this.mes) {
            case 1:
                console.log("janeiro")
                break;
            case 2:
                console.log("fevereiro")
                break;
            case 3:
                console.log("março")
                break;
            case 4:
                console.log("abril")
                break;
            case 5:
                console.log("maio")
                break;
            case 6:
                console.log("junho")
                break;
            case 7:
                console.log("julho")
                break;
            case 8:
                console.log("agosto")
                break;
            case 9:
                console.log("setembro")
                break;
            case 10:
                console.log("outubro")
                break;
            case 11:
                console.log("novembro")
                break;
            case 12:
                console.log("dezembro")
                break;
        }
    }
    getAno(): void{
        let anoUp = reader.questionInt('ano da data mágica: ')
        this.ano = anoUp
    }
    isBissexto(): void{
        if (this.ano % 4 == 0 && this.ano % 100 != 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
    clone(): void{
        let clone = `${this.dia}/${this.mes}/${this.ano}`
        console.log(clone)
    }
}
let objum = new Data(10, 2, 2003)
