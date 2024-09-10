let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: false,
    log: (info) => {
        console.log(info)
    }

}

let metas = [
    meta,
    {
        value: "caminhar com os cachorros todos os dias",
        checked: false
    }
]

meta.log(meta.value)

//function //arrow function
const criarMeta = () => {}

//function criarMeta() {}