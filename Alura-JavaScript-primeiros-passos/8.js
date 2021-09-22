console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao paulo`,
    `Rio de janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("destino existe");
        break;
    };
    contador++;
}

