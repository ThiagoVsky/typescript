"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
//import { MotoDao } from './MotoDao';
//import { PessoaDao } from './PessoaDao';
//import { ConcessionariaDao } from './ConcessionariaDao';
//import { CarroDao } from './CarroDao';
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
//let dao: ConcessionariaDao = new ConcessionariaDao()
//let dao2: PessoaDao = new PessoaDao()
//let dao3 = new CarroDao()
//let dao4 = new MotoDao()
var dao5 = new Dao_1.Dao();
var dao6 = new Dao_1.Dao();
var pessoa = new Pessoa_1.default('', '');
var concessionaria = new Concessionaria_1.default('', []);
dao5.inserir(concessionaria);
dao6.atualizar(pessoa);
