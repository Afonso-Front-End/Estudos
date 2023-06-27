"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    // Construtor
    function Aluno(nome, nota1, nota2) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.mensagem();
    }
    // Metodo media
    Aluno.prototype.media = function () {
        return (this.nota1 + this.nota2) / 2;
    };
    // Metodo de situação
    Aluno.prototype.situacao = function () {
        return this.media() >= 7 ? 'Aprovado' : 'Reprovado';
    };
    // Metodo de mensagem
    Aluno.prototype.mensagem = function () {
        // Realizar media
        var media = this.media();
        // Realizar media
        var situacao = this.situacao();
        // Exibir mensagem
        console.log("".concat(situacao, " com media ").concat(media));
    };
    return Aluno;
}());
exports.Aluno = Aluno;
