// 2. Crie duas listas de frutas (em string) e crie uma condição para verificar qual
//  lista tem mais elementos. No corpo da declaração do `if` faça o console.log 
//  “a lista a é maior que a lista b” e depois faça o console.log de “a lista a tem x
//  elementos a mais que a lista y” (você vai precisar fazer uma operação matemática
//  para isso achar o valor de x).

const redFruits = ['apple🍎', 'strawberry🍓', 'cherry🍒'];
const yellowFruits = ['orange🍊', 'lemon🍋', 'banana🍌', 'pineapple🍍'];

if(yellowFruits.length > redFruits.length)
console.log('A lista yellowFruits é maior que a lista redFruits');
else
console.log('A lista yellowFruits é menor que a lista redFruits');


const x = yellowFruits.length - redFruits.length
console.log(`A lista yellowFruits tem ${x} elemento(s) a mais que a lista redFruits`)


// function listas(array1, array2) {
//     if (array1.length > array2.length) {
//         console.log('A primeira lista é maior do que a segunda lista');
//         const x = array1.length - array2.length
//         console.log(`A primeira lista tem ${x} elemento(s) a mais que a segunda lista`)
//     }
//     else
//         console.log('A primeira lista é menor do que a segunda lista');
// }
