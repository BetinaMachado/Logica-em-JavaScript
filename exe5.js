// 5. Crie um objeto que represente um usuário com 3 propriedades: nome, idade e 
// nacionalidade. Todos os valores serão strings. Escreva uma declaração do tipo 
// `switch` que verifica se a nacionalidade desse usuário é brasileira, italiana ou 
// estadunidense

const usuario = {
    nome: 'Pedro',
    idade: '25',
    nacionalidade: 'brasileira'
}

switch (usuario.nacionalidade) {
    case 'brasileira':
        console.log('Pedro é brasileiro.')
        break;
    case 'italiana':
        console.log('Pedro é italiano.')
        break;
    case 'estadunidense':
        console.log('Pedro é estadunidense.')
        break;
    default:
        console.log('A nacionalidade de Pedro é outra.')
}