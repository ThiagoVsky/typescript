import Veiculo from './veiculo'

class Moto extends Veiculo {

    constructor(modelo: string,){
        super()
        this.modelo = modelo
    }
}

export default Moto