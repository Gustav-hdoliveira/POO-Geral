var reader = require('readline-sync')
export class FilaDeParque{
    private pessoas: string[] = []

    public entrarNaFila(nome: string): void{
        this.pessoas.unshift(nome)
        //insere no início do vetor, ao invés do final
    }

    public atender(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas.pop()
        //retira do fim do vetor
    }

    public proximaNaFila(): string | undefined{
        if(this.estaVazia()){
            console.log("A fila está vazia!")
            return undefined
        }
        return this.pessoas[this.pessoas.length - 1]
    }

    public estaVazia(): boolean{
        return this.pessoas.length === 0
    }

    public tamanho(): number{
        return this.pessoas.length
    }
}

let filadeparque = new FilaDeParque()

function estaVaziavericar() {
    if (filadeparque.estaVazia()){
        console.log("A fila está vazia.")
    } else {
        console.log("A fila não está vazia")        
    }
}

let sistema = true
function menu() {
    console.log(`
     ___________________________________________________________
    |             Menu do funcionario do Parque Cururu          |
    |                                                           |
    |       OP 1: inserir na fila       OP 2: Ver tamanho       |
    |       OP 3: atender               OP 4: Proxima na fila   |
    |       OP 5: está vazia?           OP 6: Encerrar programa |
    |___________________________________________________________|`)

    let escolha = reader.question("Escolha uma opção: ")
    opcoes(escolha)
}

function opcoes(opEscolhida: string) {
    switch (opEscolhida) {
        case "1":
            let nomeCliente = reader.question("Nome do cliente: ")
            filadeparque.entrarNaFila(nomeCliente)
            console.log("Cliente inserido")
            break;
        case "2":
            console.log(filadeparque.tamanho())
            break;
        case "3":
            filadeparque.atender()
            break;
        case "4":
            console.log(filadeparque.proximaNaFila())
            break;
        case "5":
            estaVaziavericar()
            break;
        case "6":
            console.log("Encerrando Programa...")
            sistema = false
            break;
        default:
            console.log("Opção escolhida incorretamente, se")
            break;
    }
}

function programa() {
    while (sistema) {
        menu()
    }
}

programa()