// Dada a seguinte matriz:

const dadosPessoas = [
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'],
    [1.70, 1.72, 1.62, 1.90, 1.53],
    [80, 90, 61, 84, 49]
]

// Faça um programa que escreva no console:

// a. A média de altura

let somaAltura = 0

for (i = 0; i < dadosPessoas[1].length; i++) {
    somaAltura = somaAltura + dadosPessoas[1][i]
}

let mediaAltura = somaAltura / dadosPessoas[1].length

console.log('a) A média de altura dentre os listados é:', mediaAltura.toFixed(2))

// b. A média de peso

let somaPeso = 0

for (i = 0; i < dadosPessoas[2].length; i++) {
    somaPeso = somaPeso + dadosPessoas[2][i]
}

let mediaPeso = somaPeso / dadosPessoas[2].length

console.log('b) A média de peso dentre os listados é:', mediaPeso.toFixed(2))

// c. O nome e IMC de cada uma das pessoas

listaIMC = []

console.log("c) O Índice de Massa Corporal de cada um dos listados é:")

for (i = 0; i < dadosPessoas[0].length; i++) {

    let imc = dadosPessoas[2][i] / dadosPessoas[1][i] ** 2

    console.table(`-> ${dadosPessoas[0][i]}: ${imc.toFixed(1)}`)
    listaIMC.push(Number(imc.toFixed(1)))
}
dadosPessoas.push(listaIMC)

// d. O nome da pessoa mais alta e sua altura

let maiorAltura = 0
let pessoaMaisAlta

for (let i = 0; i < dadosPessoas[1].length; i++) {

    if (dadosPessoas[1][i] > maiorAltura) {
        maiorAltura = dadosPessoas[1][i]
        pessoaMaisAlta = dadosPessoas[0][i]
    }
}
console.log(`d) A pessoa mais alta é ${pessoaMaisAlta} e sua altura é ${maiorAltura.toFixed(2)}.`)

// e. O nome da pessoa mais baixa e sua altura

let menorAltura = maiorAltura
let pessoaBaixa

for (let i = dadosPessoas[1].length - 1; i >= 0; i--) {

    if (dadosPessoas[1][i] < menorAltura) {
        menorAltura = dadosPessoas[1][i]
        pessoaBaixa = dadosPessoas[0][i]
    }
}
console.log(`e) A pessoa mais baixa é ${pessoaBaixa} e sua altura é ${menorAltura}.`)

// f. O nome da pessoa mais pesada e seu peso

let maiorPeso = 0
let pessoaMaiorPeso

for (let i = 0; i < dadosPessoas[2].length; i++) {

    if (dadosPessoas[2][i] > maiorPeso) {
        maiorPeso = dadosPessoas[2][i]
        pessoaMaiorPeso = dadosPessoas[0][i]
    }
}
console.log(`f) A pessoa mais pesada é ${pessoaMaiorPeso} e seu peso é ${maiorPeso}.`)

// g. O nome da pessoa mais leve e seu peso

let menorPeso = maiorPeso
let pessoaMenorPeso

for (let i = 0; i < dadosPessoas[2].length; i++) {

    if (dadosPessoas[2][i] < menorPeso) {
        menorPeso = dadosPessoas[2][i]
        pessoaMenorPeso = dadosPessoas[0][i]
    }
}
console.log(`g) A pessoa mais leve é ${pessoaMenorPeso} e seu peso é ${menorPeso}.`)

// h. O nome da pessoa com o maior IMC e seu valor

let maiorImc = 0
let pessoaMaiorImc

for (let i = 0; i < dadosPessoas[3].length; i++) {

    if (dadosPessoas[3][i] > maiorImc) {
        maiorImc = dadosPessoas[3][i]
        pessoaMaiorImc = dadosPessoas[0][i]
    }
}
console.log(`h) A pessoa de maior IMC é ${pessoaMaiorImc} e seu IMC é ${maiorImc}.`)

// i. O nome da pessoa com o menor IMC e seu valor

let menorImc = maiorImc
let pessoaMenorImc

for (let i = 0; i < dadosPessoas[3].length; i++) {

    if (dadosPessoas[3][i] < menorImc) {
        menorImc = dadosPessoas[3][i]
        pessoaMenorImc = dadosPessoas[0][i]
    }
}
console.log(`i) A pessoa de menor IMC é ${pessoaMenorImc} e seu IMC é ${menorImc}.`)