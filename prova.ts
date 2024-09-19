let reader = require("readline-sync")

interface Prova {
    constructor(gabarito: Array<string>);
    respostaAluno(): void;
    acertos(call: number): number;
    nota(): number;
    maior(outraProva: Prova): Prova;
}

class Prova implements Prova {
    gabarito: Array<string>
    respostas: string[]= []

    constructor(gabarito: string[]) {
        this.gabarito = gabarito
    }

    respostaAluno(): void {
        
        for (const valor of this.gabarito) {
            let pergunta = 1
            console.log(`Pergunta nº ${pergunta}`)
            let respostaAluno = reader.question("Qual sua resposta? A, B, C, D, E: ")
            this.respostas[pergunta - 1] = respostaAluno.toUpperCase()
            pergunta++
        }
    }
    acertos(vall: number): number {
        let acertos = 0
        let acertos2 = 0
        for (const RespQuest of this.gabarito) {
            let NUMquest = 0
            if (RespQuest == this.respostas[NUMquest] && NUMquest < 10) {
                acertos++
            } else if(RespQuest == this.respostas[NUMquest]) {
                acertos2++
            } else {

            }
        }
        if(vall = 1){
            return acertos
        } else if(vall = 2){
            return acertos2
        } else {
            return acertos + acertos2
        }
    }
    setProva(){
        for (let i = 0; i < this.gabarito.length; i++) {
            let PerguntaProva = reader.question(`Qual a resposta da pergunta ${i + 1}? A, B, C, D ou E? `)
            this.gabarito[i] = PerguntaProva
        }
    }
    nota(): number {
        let nota10P = this.acertos(1) / 2
        let nota5U = this.acertos(2)
        let notaTOTAL = nota10P + nota5U
        return notaTOTAL
    }
    maior(outraProva: Prova): Prova{
        return new Prova(['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C'])
    }
}

let prova = new Prova(['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C'])

prova.respostaAluno()
prova.acertos(3)
prova.nota()