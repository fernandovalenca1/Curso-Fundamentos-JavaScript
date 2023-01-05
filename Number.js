const peso1 = 1.0
const peso2 = Number("2.2")

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));       // isIstereger diz se o valor é inteiro ou quebrado(flutuante) (true or false)
console.log(Number.isInteger(peso2)) 


const avaliacao1 = 9.865
const avaliacao2 = 5.235

const total = peso1 * avaliacao1 + peso2 * avaliacao2
const media = total / (peso1 + peso2);
console.log(media.toFixed(4));  // determina a quantidade de casa decimal

{var n1 = 1563.32
    n1
    n1.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}  // coloca o valor monetário - ver exemplos e estudar


    



