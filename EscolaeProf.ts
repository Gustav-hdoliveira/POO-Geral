var leitor = require('readline-sync');
class Professor{
    nome: string
    nascimento: number
    ano_prof: number

    constructor(nome:string, nascimento:number , ano_prof:number){
        this.nome = nome
        this.nascimento = nascimento
        this.ano_prof = ano_prof
    }

    getProfessor(): void{
        console.log(`Nome: ${this.nome},Nascimento: ${this.nascimento} e Tempo de Exp.: ${this.ano_prof}`)
    }
    public setProfessor():void{
        let nomeUpdate = leitor.question("Qual o nome do professor? ")
        let nascimentoUpdate = leitor.question("Quando o professor nasceu? ")
        let ano_profUpdate = leitor.question('A quantos anos ele é professor? ')
        this.nome = nomeUpdate
        this.nascimento = nascimentoUpdate
        this.ano_prof = ano_profUpdate
    }
}

class Escola{
    profe: Professor
    nome_escola: string
    endereço: string
    num_alunos: number

    constructor(prof: Professor, nome_escola: string, endereço: string, num_alunos: number){
        this.profe = prof
        this.nome_escola = nome_escola
        this.endereço = endereço
        this.num_alunos = num_alunos
    }

    getEscola(): void{
        console.log(`Nome da Escola: ${this.nome_escola}, End. Escola: ${this.endereço} num alunos ${this.num_alunos}`)
    }
    setEscola(): void{
            let nome_escolaUpdate = leitor.question("Qual o nome da escola? ")
            let endereçoUpdate = leitor.question('Qual o endereço da escola? ')
            let num_alunosUpdate = leitor.question("Qual o numero de alunos? ")
            this.nome_escola = nome_escolaUpdate
            this.endereço = endereçoUpdate
            this.num_alunos = num_alunosUpdate
        
    }
}
let menu: Boolean = true

let prof = new Professor("", 0, 0)
let escola = new Escola(prof, "", "", 0)

function perguntas(modificar: number) {
    if (modificar == 1) {
        prof.setProfessor()
    } else if(modificar == 2){
        escola.setEscola()
    } else {
        prof.setProfessor()
        escola.setEscola()
    }
    let getdados = leitor.question('Deseja ler os dados? S ou N ')
    if (getdados.toUpperCase() == "S"){
        prof.getProfessor()
        escola.getEscola()
    } else {

    }
    let sair = leitor.question("Deseja sair? S ou N ")
    if(sair == "S"){
        menu = false
    } else {

    }
}
function Main() {
    while (menu == true) {
        let modificar = leitor.question('Deseja modificar os dados do: 1: Professor, 2: Escola, 3: Ambos')
        perguntas(modificar)
    }
}
Main()