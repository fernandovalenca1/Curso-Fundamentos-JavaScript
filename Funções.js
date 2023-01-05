/*function parimpar(n) {
    if (n%2==0) {  
        return "par!"      
    } else {
        return "impar!"

    } 
}
console.log(parimpar(10))*/

/*function soma(n1, n2) {     
        return n1 + n2      
    } 
console.log(soma(2, 5))*/

/*function soma(n1, n2) {     
    return n1 + n2      
} 
console.log(soma(2,))*/

/*function soma(n1 =0, n2=0) {     
    return n1 + n2      
} 
console.log(soma(7, ))*/

/*let v = function (x) {
    return x*2
}
console.log(v(5))*/

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {       // c =(contador)
        fat*=c
 }
 return fat
}
console.log(fatorial(5))