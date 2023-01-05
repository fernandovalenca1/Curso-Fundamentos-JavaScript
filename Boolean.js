let isAtivo = false
console.log(isAtivo) // usei let como variavel para no paragrafo seguinte poder mudar como exemplo

isAtivo = true
console.log(isAtivo)  //isAtivo informa se a função é verdadeira ou falsa

isAtivo = 1
console.log(!!!isAtivo)

let nome = " fernando"
console.log(nome || "desconhecido")   //   || equivale a "ou"

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"teste")
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log( "os falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar")
console.log(!!("" ||null ||0 ||" "))
