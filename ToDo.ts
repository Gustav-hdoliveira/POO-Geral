let ler = require("readline-sync")
export class Tarefa {
    descricao: string
    prioridade: number
    status: string
    constructor(descricao: string, prioridade: number, statusconclusao: string){
        this.descricao = descricao
        this.prioridade = prioridade
        this.status = statusconclusao
    }

    getDescricao(){
        return this.descricao
    }

    getNivelPrioridade(){
        return this.prioridade
    }

    getstatus(){
        return this.status
    }

    alterStatus(){
        let newStatus = ler.question("Novo status da tarefa: ")
        this.status = newStatus
    }

    alterPrioridade(){
        let newpriority = ler.questionINT("Novo nivel de prioridade (1-3): ")
        this.prioridade = newpriority
    }

    alterDescrição(){
        let newDescricao = ler.question("Nova descricao: ")
        this.descricao = newDescricao
    }
}

export class Lista{
    tarefas: Tarefa[]
    constructor(){
        this.tarefas = []
    }
    
    addTarefa(tarefa: Tarefa):void{
        setNewTarefa()
        this.tarefas.push()
    }

    removerTarefa(){
        this.tarefas.pop()
    }

    listarTarefas(){
        console.log(this.tarefas)
    }

    tarefa_pronta(){
        this.tarefas[0].alterStatus()
    }
}


function setNewTarefa(){
    let descricaoUP = ler.question("Descricao da tarefa: ")
    let prioridadeUP = ler.question("Nivel de prioridade da Tarefa. (1-3): ")
    let statusUP = ler.question("Qual o status da tarefa? ")
    return new Tarefa(descricaoUP, prioridadeUP, statusUP)
}