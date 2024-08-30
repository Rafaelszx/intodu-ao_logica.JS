function compararNumeros (num1,num2){
    if (num1>num2){
        return "o primeiro é maior q o segundo"
    }


else if (num1<num2){
    return "o primeiro é menor que o segundo"
}
else{
    return "os numeros sao iguais"
}
}

let resultado = compararNumeros(9,9)
console.log(resultado)