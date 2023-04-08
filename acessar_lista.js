const cliente = {
    nome: "André",
    idade: 36,
    cpf: '32132442',
    email: "andre@hotmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))
