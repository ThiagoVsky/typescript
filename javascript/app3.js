"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var moto_1 = __importDefault(require("./moto"));
var carroA = new Carro_1.default("HB20", 4);
carroA.acelerar();
carroA.acelerar();
var motoA = new moto_1.default("Ninja 300");
motoA.acelerar();
motoA.acelerar();
var concessionariaA = new Concessionaria_1.default("", []);
console.log(concessionariaA.fornecerHorarioDeFuncionamento());
console.log(carroA);
console.log(motoA);
