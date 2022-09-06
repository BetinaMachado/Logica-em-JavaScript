// 2. Crie uma lista contendo 3 números e atribua essa lista a uma variável chamada “notas”. Na sequência, faça a
// soma dos 3 elementos da lista acessando pela posição e atribua uma variável “somatória”. 
// Por fim, divida o valor da somatória pelo tamanho da lista “notas” usando a propriedade length.

var notas = [1, 2, 3];

var somatoria = notas[0] + notas[1] + notas[2];

console.log(somatoria);

const media = somatoria / notas.length;

console.log(media);

//COM FOR: 
// const notas = [6, 9, 7];
// let somatoria = 0;

// for (let i = 0; i < notas.length; i++) {
//     somatoria += notas[i];
// }
// console.log(`A soma dos números é : ${somatoria}`);

// let divisao = somatoria / notas.length;
// console.log(`A divisão da Soma pelo tamanho da lista é : ${divisao}`);


// COM WHILE:
// const notas = [6, 5, 7];
// let somatoria = 0;
// let i = 0;
// while (i < notas.length) {
//     somatoria += notas[i];
//     i++
// };

// console.log(somatoria / notas.length);