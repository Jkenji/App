console.log("hello, world!")

let mensagens = "hello, world!"

const mensagem = "hello, kenji!"
{
    const mensagem = "hello, kenji!"
    console.log(mensagem)
}
console.log(mensagem);

let meta01 = ['kenji', 'hi']
let metas02 = [2, 'kenji']

console.log(metas[1] + ", " + metas[0]) 


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
console.log(metas[1].value)

//function //arrow function
const criarMeta = () => {}

//function criarMeta() {}