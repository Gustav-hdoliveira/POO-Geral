export class PilhadePratos{
    private pratos: string[] = []

    //add um prato no topo
    addPrato(prato: string):void{
        this.pratos.push(prato)
        console.log(`${prato} foi colocado no topo da pilha!`)
                
    }

    //remove e retorna o prato do topo
    retirarPrato(): string | undefined{
        const prato = this.pratos.pop()
        if (prato){
            console.log(`${prato} foi removido do topo da pilha`)
            
        } else {
            console.log(`A pilha está vazia.`)
        }
        return prato
    }

    // verificar se tá vazio
    isEmpty(): boolean{
        return this.pratos.length === 0
    }

    size(): number{
        return this.pratos.length
    }
}

const pilhadepratos = new PilhadePratos()

pilhadepratos.addPrato(`Prato 1`)
pilhadepratos.addPrato(`Prato 2`)
pilhadepratos.addPrato(`Prato 3`)

pilhadepratos.retirarPrato()
pilhadepratos.retirarPrato()
pilhadepratos.retirarPrato()
pilhadepratos.retirarPrato()

console.log(`A pilha de pratos está vazia? ${pilhadepratos.isEmpty()}`)