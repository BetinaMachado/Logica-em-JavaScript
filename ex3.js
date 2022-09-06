// 3. É seu primeiro dia de trabalho e você precisa remover um usuário e depois adicionar um novo em uma lista de
// usuário que você encontrou no código da empresa. A Lista de usuário é a seguinte:

const usuarios = [ 
	{ nome: 'Thiago', idade: 16 },
	{ nome: 'Jade', idade: 25 },
	{ nome: 'Patrícia', idade: 22 },
	{ nome: 'Carlos', idade: 52 }
];

// Você deve criar um novo usuário e adicioná-lo à lista.

usuarios.splice([0], 1)
usuarios.push({nome: 'Danda', idade: 43})

console.log(usuarios)