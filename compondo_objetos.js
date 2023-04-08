const cliente = {
    nome: "André",
    idade: 36,
    cpf: '32132442',
    email: "andre@hotmail.com",
    fones: ["5565568", "55641785"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNas: "20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)