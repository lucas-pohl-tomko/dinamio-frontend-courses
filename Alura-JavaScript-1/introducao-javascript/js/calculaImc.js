// ####### Aula 1 #######

console.log('Ola mundos');
console.log(document);
console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");

console.log(titulo);
console.log(titulo.textContent);
// titulo.textContent = "Banana";


// ########## Aula 2 #########

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
}

if (altura <= 0 || altura >= 4) {
    console.log("Altura invalida")
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
}

if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;

}


// ######## Aula 3 #######

// var pacientes = document.querySelectorAll(".paciente");

// for (var i = 0; i < pacientes.length; i++) {

//     var paciente = pacientes[i];

//     var tdPeso = paciente.querySelector(".info-peso");
//     var peso = tdPeso.textContent;

//     var tdAltura = paciente.querySelector(".info-altura");
//     var altura = tdAltura.textContent;

//     var tdImc = paciente.querySelector(".info-imc");

//     var pesoValido = true;
//     var alturaValida = true;

//     if (peso <= 0 || peso >= 1000) {
//         console.log("Peso invalido");
//         pesoValido = false;
//         tdImc.textContent = "Peso Invalido";
//         paciente.classList.add("paciente-invalido");
//     }

//     if (altura <= 0 || altura >= 4) {
//         console.log("Altura invalida")
//         alturaValida = false;
//         tdImc.textContent = "Altura Invalida";
//         paciente.classList.add("paciente-invalido");
//     }

//     if (alturaValida && pesoValido) {
//         var imc = calculaImc(peso, altura);
//         tdImc.textContent = imc;

//     }

// }


// ####### Aula 4 ##########

// foi para a pagina form.js


// ######## Aula 5 ########

// Separar o codigo dividi em dois arquivos e comecei a criar funcoes

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}