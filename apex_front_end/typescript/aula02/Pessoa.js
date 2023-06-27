"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // Construtor
    function Pessoa(nome, idade, trabalho) {
        this.nome = nome;
        this.idade = idade;
        this.trabalho = trabalho;
        this.mensagem();
    }
    // Método Função
    Pessoa.prototype.mensagem = function () {
        console.log("O nome informador \u00E9 ".concat(this.nome));
        console.log("A idade informada ".concat(this.idade));
        console.log("".concat(this.trabalho == true ? 'Esta trabalhando' : 'Não esta trabalhando'));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
