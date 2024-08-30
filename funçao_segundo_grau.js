function resolverFunçaoSegundoGrau(a,b,c){
    /// passao : calcular o delta
    let delta = b*b-4*a*c

    // passo 2: verificar se odelta é zero, neativo ou positivo
if (delta<0){
    // se o delta for negativo, a equaçao nao tem raizes reais
    console.log("a equaçao nao tem soluçoes reais")

}
else if (delta===0){
    // se o delta for igual a zero, a equaçao tem duas raizes iguais
    console.log("a equaçao tem raizes iguais. ")
}
else {
    // se o delta for positivo,a equaçao tem duas razes diferentes
let x1 = (-b + Math.sqrt(delta))/(2*a)
let x2 = (-b - Math.sqrt(delta))/(2*a)

console.log("a equaçao tem duas raizes reais: x1= ",x1, "e x2= ",x2 )


}



}

resolverFunçaoSegundoGrau(1, -3, 2)