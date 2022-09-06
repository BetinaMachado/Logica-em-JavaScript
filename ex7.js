// 7. Crie um objeto usuário que contenha uma propriedade chamada fotos. O valor dessa propriedade é uma lista de objetos que contem nome e data
//  de criação. Como eu posso saber quantas fotos esse usuário possui? Escreva o código para isso e faça o console.log desse número. 
//  Na sequência, crie uma nova lista de fotos e substitua a lista original do usuário.

const album = {
    capa: "dura",
    cor: "magenta",
    fotos: [
        verao = {
            nome: "Summer Day",
            data: "31/12/82"
        },
        outono = {
            nome: "Autumn Leaves",
            data: "02/05/84"
        }]
}

console.log(album.fotos.length)

novaLista = [
    primavera = {
        nome: "Spring Boot",
        data: "12/10/89"
    },
    inverno = {
        nome: "Winter Fall",
        data: "05/08/95"
    }]

    album.fotos = novaLista

    console.log(album)
