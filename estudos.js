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


/* Crie um programa que recebe uma lista/vetor de números inteiros; Seu programa deve alterar a lista de modo que
o maior número fique na primeira posição dela.*/

let arr = [885.9, 984.9, 444.9, 528.9, 528.9, 10000];

function b ( arr ) {
    let num = 0

    for (let index = 0; index < arr.length; index++) {

        if ( arr[index] > num ) {
            num = arr[index]
        }
    }

    const b = arr.indexOf(num)

    arr.splice(b, 1)
    arr.unshift(num)

    return console.log(arr)
}

b ( [3, 2, 6, 1, 9, -2, 5, 2, 9])

let frutasComA = {nome: "Fruta com A", list:["Acerola", "Abacaxi", "Abacate"]};
let frutasComM = {nome: "Fruta com M", list:["Maracujá", "Melão"]};
function compara(array1, array2) {
    let diff = Math.abs(array1.list.length - array2.list.length);
    if (array1.list.length > array2.list.length){
        console.log(`${array1.nome} é maior que ${array2.nome} tendo ${diff} elemento(s) a mais.`);
    }else {
        console.log(`${array2.nome} é maior que ${array1.nome} tendo ${diff} elemento(s) a mais.`);
    }
}
compara(frutasComA, frutasComM);



/*1. escreva um loop while com usando como condição uma variável número ser menor que o número 15, 
use qualquer nome para a variável. Dentro do while faça uma soma de 2 em 2 e também faça o console.log do 
valor da variável e um frase poética.*/

let par = 0

while(par < 15) {
let soma = 0
soma = soma + 2
console.log(soma, "O amor é uma flor roxa")
par++
}

// 2. escreva um for que execute um código 20x. Nesse código, faça 2 cálculos matemáticos e faça o console.log 
// do resultado desses dois cálculos.


for() 

execute código 20x, que o code faça dois cálculos matemáticos e faça o console.log desses dois cálculos

/*
  > Maior que
  < Menor que
  >= Maior igual que
  <= Menor igual que
  == igual a  (vê apenas o valor)
  === idêntico (ve o valor e o tipo)
  != Diferente de
  !== Não identico
  && = e/and
  || = ou/or
*/