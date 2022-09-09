/*1. escreva um loop while com usando como condição uma variável número ser menor que o número 15, 
use qualquer nome para a variável. Dentro do while faça uma soma de 2 em 2 e também faça o console.log do 
valor da variável e um frase poética.*/

let par = 0
let soma = 0

while(par < 15) {
soma = soma + 2
console.log(soma, "O amor é uma flor roxa")
par++
}

// 2. escreva um for que execute um código 20x. Nesse código, faça 2 cálculos matemáticos e faça o console.log 
// do resultado desses dois cálculos.

for(let code = 0; code < 20; code++) {
let soma1 = 125 + 58
let multiplicacao = 12 * 1
console.log('O resultado da soma é ', soma1, ' e da multiplicação é ', multiplicacao)
}

// 3 . Localize os 3 primeiros valores de uma lista com for.

let emocoes = ['amor💕', 'tristeza😢', 'alegria😁', 'vergonha😳', 'raiva😡']

for(vale=0; vale<3; vale++){
    console.log(emocoes[vale])
}

//     if(i<3){
//         break;
//     }
// }

// let emocoes = ['amor💕', 'tristeza😢', 'alegria😁', 'vergonha😳', 'raiva😡']

// for(let [v,i] of emocoes.entries()) {
//     console.log(v, i)

// }