// inventario do herói

let inventario = ["espada de madeira","escudo","poçao de vida", " machado"];

// exibindo o inventaro inicial
console.log("seu inventario inicial:", inventario);

// herói encontra um novo item 
let novoItem = "elmo de ferro";
inventario.push(novoItem);

// exibndo o inventario atualizado

console.log("voce encontrouum baú! novo item adicionado ao seu inventario:", inventario);

// herói enfrenta um goblin

console.log("um goblin apareceu! prepare-se para a batalha.");

let itemUsado3 = inventario[3];
console.log("voce ataca o globin com seu",itemUsado3);

console.log("voce derrotou o globin e contiua sua jornada.");

console.log(inventario.length)