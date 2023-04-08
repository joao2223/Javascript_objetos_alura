const clientes = [
    {
        nome: "André",
        idade: 36,
        cpf: '32132442',
        email: "andre@hotmail.com",
        fones: ["5565568", "55641785"],
        dependentes: [{
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }]
    }, 
    {
        nome: "Juliana",
        idade: 36,
        cpf: '32132442',
        email: "andre@hotmail.com",
        fones: ["5565568", "55641785"],
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "20/03/2011"
        }]
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)