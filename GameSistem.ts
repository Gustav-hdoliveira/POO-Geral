var reader = require('readline-sync')
interface Game {
    name: string
    genre: string
    minimalAge: number
}
class Game {
    public name: string
    public genre: string
    public minimalAge: number

    constructor(Gamename: string, Gamegenre: string, PlayminAge) {
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
    }
    public getData(): void{
        console.log(`The game ${this.name} from the game genre of ${this.genre} is a sucess, for ${this.minimalAge} years or more`)
    }
    public setGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction?")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
    }
}
class VideoGame extends Game {
    plataformas: string

    super(Gamename: string, Gamegenre: string, PlayminAge: number, plataformasDispo: string){
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
        this.plataformas = plataformasDispo
    }
    public getData(): void{
        console.log(`The game ${this.name} from the game genre of ${this.genre} is a sucess, can be playd into the plataforms ${this.plataformas}, omly for ${this.minimalAge} years or more`)
    }
    public setGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction?")
        let plataformsUpdate = reader.question("What are the plataforms the game is playable")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
        this.plataformas = plataformsUpdate
    }
}
class TableGame extends Game {
    playersMax: number
    super(Gamename: string, Gamegenre: string, PlayminAge, playersMax: number) {
        this.name = Gamename
        this.genre = Gamegenre
        this.minimalAge = PlayminAge
        this.playersMax = playersMax
    }
    public getData(): void{
        console.log(`The games ${this.name} from the game genre of ${this.genre} is a sucess, it´s table game has a max playes of 3, but much more fun, on only for ${this.minimalAge} years or more`)
    }
    public setGame(): void{
        let nameUpdate = reader.question("What´s the game´s name? ")
        let genreUpdate = reader.question("what´s the game´s genre? ")
        let minAgeUpdate = reader.question("What´s the game´s minimal age restriction? ")
        let playmaxUpdate = reader.question("What is the players limit? ")
        this.name = nameUpdate
        this.genre = genreUpdate
        this.minimalAge = minAgeUpdate
        this.playersMax = playmaxUpdate

    }

}
class Databank {
    games: Game[]

    constructor(){
        this.games = []
    }
    public addGames(game: Game): void{
        this.games.push(game)           
    }
    public removeGame(): void{
        console.log(this.games)
        let gametoRemove = reader.question("Qual jogo deseja remover? Escreva: ")
        this.games = this.games.filter(objGame => objGame.name !== gametoRemove)
    }
    public gameList(): void{
        console.log(this.games)
    }
}
let newgame = new Game("Test", "Test", 16)

let menu = true
while (menu = true) {
    const option = reader.question("Where you want to go? OP 1: Game, OP 2: Video game, OP 3: Table game, OP 4 Databank ")
    switch (option) {
        case 1:
            let opcao1 = reader.question("Do you whant to getinfo(1) or setInfo(2)")
            if (opcao1 = 1) {
                newgame.getData()
            } else {
                newgame.setGame()
            }
            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break
    
        default:
            break;
    }
}
let databank = new Databank()
databank.addGames(newgame)

let newTableGame = new TableGame("teste", "teste", 12)

databank.addGames(newgame)