//O operador destructor extrai de dentro dos objetos ou arrays os atributos em especifico, e é possível retirar mais de um de uma vez

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1001
    }
}

const {nome, idade} = pessoa //Foi retirado os atributos nome e idade do objeto pessoa
console.log(nome, idade)
//É a forma de retirar vários atributos em uma única linha

//É possivel atribuir outro nome ao par chave: valor
const {nome: n, idade: i} = pessoa
console.log(n, i)

//Outra forma de acessar a chave e o valor no objeto
console.log(pessoa.nome, pessoa.idade)

//Caso eu queira acessar uma variavel que não existe, será retornado um valor de undefined
const {endereço: {logradouro, numero , cep}} = pessoa//Para acessar uma chave dentro da outra
console.log(logradouro, cep , numero)//O cep não existe, o valor retornado é  undefined

//Não é possivel acessar um dado filho que não exista, será gerado um erro. Só é possivel fazer isso com um filho que exista, como no exemplo acima, o cep não existe, mas está dentro de um filho que existe
const {conta: {agencia, num}} = pessoa
