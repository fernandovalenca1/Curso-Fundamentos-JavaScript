/*const prod1 = {}   // objeto é criado dentro de chave
prod1.nome = " celular legal"
prod1.preco = 4325.63
prod1["celular legal"] = 0.40

console.log(prod1)

const prod2 = {
    nome: "Camisa Polo"
    ,preco: 79.90
}

console.log("Camisa Polo " + 79.90)*/

let amigo = {nome: "José" ,
sexo: "M",
peso: 85.4,
engordar (p=2) {
    console.log("engordou")
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)

