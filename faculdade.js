function podeestudar(concluiensinomedio,idade,cursandooutrafaculdade){
    return concluiensinomedio &&idade>=18 &&!cursandooutrafaculdade}
    
    
    //dados para testar a funçao
    let concluiensinomedio = true // sim concluiu
    let idade = 108 // definindo idade
    let cursandooutrafaculdade = false //false para dizer que nao

    // verificar se pode estudar na faculdade
    let resultado = podeestudar(concluiensinomedio,idade,cursandooutrafaculdade)
    

  //  exibindo o resultado
  if(resultado){
    console.log("voce pode entar na faculdade")
  }
  else{
    console.log("voce nao pode entrar na faculdade")
  }