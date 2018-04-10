import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

/* Criando carros */
let carroA = new Carro ("Uno", 4)
let carroB = new Carro ("Celta", 4)
let carroC = new Carro ("Palio", 4)

/* Criando lista de carros*/
let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let sagaMotors = new Concessionaria("Sia Trecho 1", listaDeCarros)

/* comprar carro */
let cliente = new Pessoa('Joana', 'Idea')

let mapCarro = (carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro)
    }
}

sagaMotors.mostrarListaDeCarros().map(mapCarro)

console.log(cliente.dizerCarroQueTem())