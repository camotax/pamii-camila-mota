let num1 = 2
const num2 = 3 //váriavel que não muda

function soma(){
    return num1 + num2
}

console.log(soma()) //exibe o resultado da função

// num1 = 6
// num2 = 9

console.log(soma())

const funcaoSoma = (a, b) => {
    return a + b
}

console.log(funcaoSoma(10, 8)) // coloca o valor necessário para soma