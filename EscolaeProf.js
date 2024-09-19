var leitor = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, nascimento, ano_prof) {
        this.nome = nome;
        this.nascimento = nascimento;
        this.ano_prof = ano_prof;
    }
    Professor.prototype.getProfessor = function () {
        console.log("Nome: ".concat(this.nome, ",Nascimento: ").concat(this.nascimento, " e Tempo de Exp.: ").concat(this.ano_prof));
    };
    Professor.prototype.setProfessor = function () {
        var nomeUpdate = leitor.question("Qual o nome do professor? ");
        var nascimentoUpdate = leitor.question("Quando o professor nasceu? ");
        var ano_profUpdate = leitor.question('A quantos anos ele é professor? ');
        this.nome = nomeUpdate;
        this.nascimento = nascimentoUpdate;
        this.ano_prof = ano_profUpdate;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(prof, nome_escola, endereço, num_alunos) {
        this.profe = prof;
        this.nome_escola = nome_escola;
        this.endereço = endereço;
        this.num_alunos = num_alunos;
    }
    Escola.prototype.getEscola = function () {
        console.log("Nome da Escola: ".concat(this.nome_escola, ", End. Escola: ").concat(this.endereço, " num alunos ").concat(this.num_alunos));
    };
    Escola.prototype.setEscola = function () {
        var nome_escolaUpdate = leitor.question("Qual o nome da escola? ");
        var endereçoUpdate = leitor.question('Qual o endereço da escola? ');
        var num_alunosUpdate = leitor.question("Qual o numero de alunos? ");
        this.nome_escola = nome_escolaUpdate;
        this.endereço = endereçoUpdate;
        this.num_alunos = num_alunosUpdate;
    };
    return Escola;
}());
var menu = true;
var prof = new Professor("", 0, 0);
var escola = new Escola(prof, "", "", 0);
function perguntas(modificar) {
    if (modificar == 1) {
        prof.setProfessor();
    }
    else if (modificar == 2) {
        escola.setEscola();
    }
    else {
        prof.setProfessor();
        escola.setEscola();
    }
    var getdados = leitor.question('Deseja ler os dados? S ou N ');
    if (getdados.toUpperCase() == "S") {
        prof.getProfessor();
        escola.getEscola();
    }
    else {
    }
    var sair = leitor.question("Deseja sair? S ou N ");
    if (sair == "S") {
        menu = false;
    }
    else {
    }
}
function Main() {
    while (menu == true) {
        var modificar = leitor.question('Deseja modificar os dados do: 1: Professor, 2: Escola, 3: Ambos');
        perguntas(modificar);
    }
}
Main();
