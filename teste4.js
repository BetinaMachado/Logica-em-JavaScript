// Escreva um programa em que o usuário entre com uma sigla de um estado e imprima mensagens específicas.

var estado = "RS"

if (estado == "RJ"){
    console.log("Carioca")
}
else if (estado == "SP"){
    console.log("Paulista")
}
else if (estado == "MG"){
    console.log("Mineiro")
}
else if (estado == "PE"){
    console.log("Pernambucano")
}
else if (estado == "PB") {
console.log("Paraibano")
}
else if (estado == "RN") {
    console.log("Potiguar")
}
else {
    console.log("Outros Estados.")
};

// ALTERNATIVA:
// let sigla = 'SC'

// const estados = {
//   'RJ': 'Carioca',
//   'SP': 'Paulista',
//   'MG': 'Mineiro',
//   'PE': 'Pernambucano',
//   'PB': 'Paraibano',
//   'RN': 'Potiguar'
// }
// if(estados[sigla]==undefined) {
//     console.log("Outros Estados.")
// }
// else
// console.log(estados[sigla])

