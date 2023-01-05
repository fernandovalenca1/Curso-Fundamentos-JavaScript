const escola = ("Cod3r");

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));
console.log(escola.substring(1));
console.log(escola.substring(0, 3));
console.log("Escola ".concat(escola).concat(" ! "));
console.log("Escola " + escola + " ! ")
console.log(escola.replace(3, "e"));     // replace troca uma infomaçºao por outra
console.log("ana,maria,clara".split(" , "));     // split é um separador



var s = "javascript"

console.log("estou aprendendo s")         // não faz interpolação
console.log("estou apendendo " + s)       // usa concatenação
console.log(`estou aprendendo ${s}`)     // usa template string

length()  // quantos caracteres a string tem  ( estudar e ver exemplo)
toUpperCase("casa de pipinha")  // tudo para MAIÚSCULA (estudar e ver exemplo)
tolowercase("CADA")   //tudo para MINÚSCULA (estudar e ver exemplo)
substring()   //( estudar e ver exemplo)
split()   // ( estudar e ver exemplo)

var nome = window.prompt("Qual o seu nome")  // para guardar a informação
