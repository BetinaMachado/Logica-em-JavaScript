// #2 - Exerci­cio
// - Declare uma const meuAnodeNascimento que recebe o ano de seu nascimento Ex: 2001
// - Declare uma const anoAtual que recebe o ano atual Ex: 2022
// - Exiba as constantes meuAnodeNascimento e anoAtual uma ao lado da outra no console.log()
// - Declare uma variavel chamada minhaIdade que recebe anoAtual subtrai­do a meuAnodeNascimento. 
// Imprima o valor no console. (Nao digite o valore da vari­avel minhaIdade de forma manual)
// - Declare uma variavel chamada numeroCinco, que recebe 5 e:
// - Descomente o console.log abaixo na terceira linha, Os numeros nao devem ser digitados 
// manualmente;
// 1) Substitua a palavra "valor1" pelo anoAtual somado Ã  5;
// 2) Substitua a palavra "valor2" pela minhaIdade somada Ã  5;
// 3)console.log(`Em ${valor1}, estarei com ${valor2} anos.`)

const meuAnodeNascimento = 1995;
const anoAtual = 2022;

console.log(meuAnodeNascimento, anoAtual);

let minhaIdade = anoAtual - meuAnodeNascimento;
console.log(minhaIdade);

const numeroCinco = 5;
console.log(`Em ${anoAtual + numeroCinco}, estarei com ${minhaIdade + numeroCinco} anos.`)
