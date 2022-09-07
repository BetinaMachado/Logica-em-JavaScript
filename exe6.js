// 6. Com base no exercício anterior, vamos criar um objeto com as propriedades `name`
// e `age` para o caso da Jéssica e da Pamela. (cada variável pode chamar “usuario1” e 
// “usuario2”). Agora, escreva as mesmas condições olhando para a propriedade dos 
// dois objetos.

const usuario1 = {
    name: 'Jéssica',
    age: '15'
}

const usuario2 = {
    name: 'Pâmela',
    age: '21'
}

if (usuario1.age > 18)
console.log('Você é maior de idade, Jéssica!');
else
console.log('Você ainda não atingiu a maioridade, Jéssica.')

if (usuario2.age > 18)
console.log('Você é maior de idade, Pâmela!');
else
console.log('Você ainda não atingiu a maioridade, Pâmela.')
