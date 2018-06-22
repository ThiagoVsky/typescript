"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Lógica insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Lógica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Lógica select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Lógica GetAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
