console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao paulo`,
    `Rio de janeiro`
);

const idadeComprador = 14;
const estaAcompanhada = false;
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa viajem");
    //Delete on list
    listaDeDestinos.splice(1, 1);
} else {
    console.log("nao eh maior de idade");
}

console.log(listaDeDestinos);
//Delete last element
// lista2.pop();

// lista2.reverse();

