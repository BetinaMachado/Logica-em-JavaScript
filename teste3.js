// Como coordenador de atividades no The Family Spot Resort, é seu trabalho sugerir atividades adequadas aos hóspedes
// com base no clima:

// temp >= 26°C: natação
// 15 <= temp < 26: tênis
// 5 <= temp < 15: golfe
// temp < 5: esqui

// Escreva uma programa que receba uma temperatura e, em seguida, mostre no console a atividade apropriada para essa 
// temperatura.

let temp = 30

if (temp >= 26){
    console.log("Sugerimos a atividade de natação.")
}
else if (temp >= 15){
    console.log("Sugerimos a atividade de tênis.")
}
else if (temp >= 5){
    console.log("Sugerimos a atividade de golfe.")
}
else {
    console.log("Sugerimos a atividade de esqui.")
}