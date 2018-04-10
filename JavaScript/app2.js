"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/* Criando carros */
var carroA = new Carro_1.default("Uno", 4);
var carroB = new Carro_1.default("Celta", 4);
var carroC = new Carro_1.default("Palio", 4);
/* Criando lista de carros*/
var listaDeCarros = [carroA, carroB, carroC];
var sagaMotors = new Concessionaria_1.default("Sia Trecho 1", listaDeCarros);
/* comprar carro */
var cliente = new Pessoa_1.default('Joana', 'Idea');
var mapCarro = function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
};
sagaMotors.mostrarListaDeCarros().map(mapCarro);
console.log(cliente.dizerCarroQueTem());
