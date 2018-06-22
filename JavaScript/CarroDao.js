"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('Lógica insert');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('Lógica update');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('Lógica Delete');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('Lógica select');
        return new Carro_1.default('', 0);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('Lógica GetAll');
        return [new Carro_1.default('', 0)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
