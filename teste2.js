// Suponha que average seja uma variável que contém a média de notas de um aluno. 
// Suponha que o objetivo de um programa seja permitir que um aluno saiba se ele está na lista de alunos destaque 
// (a média deve ser 9 ou superior).
// Escreva uma declaração if/else que mostra no console a mensagem apropriada 
// ("Parabéns - você está na lista de alunos destaque do curso!" ou 
// "Desculpe, você não entrou na lista de alunos destaque").

let listaNotas = [
    10,
    8.5,
    9
];

let average = (listaNotas[0] + listaNotas[1] + listaNotas[2]) / listaNotas.length;

if(average >= 9) {
    console.log("Parabéns - você está na lista de alunos destaque do curso!")
}
else {
    console.log("Desculpe, você não entrou na lista de alunos destaque.")
};