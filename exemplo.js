export default class OrdenandoArray{
    constructor(){
        this.arr = [
            {nome: "Cteste3", valor: 3},
            {nome: "Ateste1", valor: 1},
            {nome: "Dteste4", valor: 4},
            {nome: "Fteste6", valor: 6},          
            {nome: "Gteste7", valor: 7},
            {nome: "Bteste2", valor: 2},
            {nome: "Eteste5", valor: 5}
        ]
    }
    ordenandoPorNome(){
        this.arr.sort(function(a,b) {
            return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
        });
        console.log(this.arr)
    }
    ordenandoPorValor(){
        this.arr.sort(function(a,b) {
            return a.valor < b.valor ? -1 : a.valor > b.valor ? 1 : 0;
        });
        console.log(this.arr)
    }
}