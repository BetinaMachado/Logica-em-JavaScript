// por que let?
// var não pode começar com nº, não pode conter símbolos (só underline)
// por que `${} não funciona com objeto?

let gavetaPequena = [
    'caneta',
    'papel',
    'grampeador'
];

console.log(`Minha lista é ${gavetaPequena}`);
console.log(gavetaPequena);

var caneta = {
    marca: "Bic",
    tinta: "Azul"
};

console.log(`A marca da caneta é ${caneta.marca}.`);

console.log(caneta);


// var = é uma variável global que funciona dentro do arquivo
// let = é uma variável que "dura" dentro de um escopo
// const = é um valor imutável

// var x = 5

var x = 5;

if (x > 2) {
    let x = 2;
    let y = x + x;
    console.log(y);
}
else {
    let x = 5;
    console.log(x);
};

console.log(x);


// Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor da compra for menor que R$ 20,00; 
// Caso contrário, o lucro será de 30%. 
// O algoritmo deve receber o valor do produto e imprimir o valor da venda.


var produto = 19.99;

if (produto < 20) {
    let resultado = produto * 1.45;
    console.log(resultado);
} else {
    let resultado = produto * 1.3;
    console.log(resultado);
};

let x = 2;
var y = 2;
let z = 9;
if (z > 3) {
    y++;
    console.log("y dentro do if vale:", y);
    let y = 0;
    console.log("y depois do let interno vale:", y);
    console.log("x dentro if vale:", x);
    //let x = "xis";  
    console.log("x do dentro if vale:", x);
    var k = "ka";
    console.log("K criado dentro do if:", k);
}
console.log(`Fora do if: ${x}, ${y}, ${k}`);

// Calculo IMC

const input = require('readline-sync')

let peso = Number(input.question("Informe seu peso em Kg: "))
let altura = Number(input.question("Informe sua altura em metros: "))
let imc = peso / altura ** 2
console.log(`Seu IMC é: ${ imc }`)

if (imc > 40) {
    console.log("De acordo com seus dados a classificação é de Obesidade Grau3")
} else if (imc > 35) {
    console.log('De acordo com seus dados a classificação é de Obesidade Grau2')
} else if (imc > 30) {
    console.log('De acordo com seus dados a classificação é de Obesidade Grau1')
} else if (imc > 25) {
    console.log('De acordo com seus dados a classificação é de Sobrepeso')
} else if (imc >= 18.5) {
    console.log('De acordo com seus dados a classificação é de Saudável')
} else {
    console.log('De acordo com seus dados a classificação é de Magreza')
}