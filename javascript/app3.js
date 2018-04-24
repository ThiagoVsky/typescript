"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var moto_1 = __importDefault(require("./moto"));
var carroA = new Carro_1.default("HB20", 4);
var motoA = new moto_1.default("Ninja 300");
console.log(carroA);
console.log(motoA);
