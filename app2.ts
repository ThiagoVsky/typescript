class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0;

    constructor(modelo: string, portas: number){
        this.modelo = modelo
        this.numeroDePortas = portas
    }
    public acelerar(): void {
        this.velocidade += 10
    }
    public parar(): void{
        this.velocidade = 0
    }
    public velocidadeAtual(): number{
        return this.velocidade;
    }

}

class Concessionaria {
    private endereco:string
    private listaDeCarros:any

    constructor(endereco: string, listaDeCarros: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }
    public fornecerEndereco():string {
        return this.endereco
    }
    public mostrarListaDeCarros(): any{
        return this.listaDeCarros
    }
}

class Pessoa {
    private nome:string
    private carroPreferido:string
    private carro:Carro

    constructor(nome:string, carroPreferido:string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }
    public dizerCarroPreferido(): string{
        return this.carroPreferido
    }
    public comprarCarro(carro:Carro):void{
        this.carro = carro
    }
    public dizerCarroQueTem():Carro{
        return this.carro
    }
}

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