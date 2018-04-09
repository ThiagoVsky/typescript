"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, portas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = portas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* Criando carros */
var carroA = new Carro("Uno", 4);
var carroB = new Carro("Celta", 4);
var carroC = new Carro("Palio", 4);
/* Criando lista de carros*/
var listaDeCarros = [carroA, carroB, carroC];
var sagaMotors = new Concessionaria("Sia Trecho 1", listaDeCarros);
/* comprar carro */
var cliente = new Pessoa('Joana', 'Idea');
var mapCarro = function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
};
sagaMotors.mostrarListaDeCarros().map(mapCarro);
console.log(cliente.dizerCarroQueTem());
