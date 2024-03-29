//O tipo de dado mais importante de JavaScript é o objeto
//Tudo que possui chaves é um objeto
//O objeto é uma coleção de chave e valor
//Dentro de um objeto pode haver outros objetos
const prod1 = {}

//Podemos definir o objeto, atribuindo atributos e comportamentos. Veja:
prod1.nome = 'Celular ultra mega' //O objeto terá a propriedade "nome" e o valor 'Celular ultra mega'
prod1.valor = 4.122
console.log(prod1)

//Dessa forma será impresso somente o valor, mas não é possivel identificar o nome do objeto sendo prod1 na impressão

//É possivel criar um objeto dessa forma também
prod1['Desconto'] = 0.40
prod1.porcentagem = 0.70
console.log(prod1)

//E de forma direta
const prod2 = {
    nome: 'Paulo',
    preco: 79.90
}
console.log(prod2)

//Para acessar as propriedades de um objeto, há duas formas
console.log(prod2["nome"])
console.log(prod2.nome)

//Para deletar valores de um objeto
delete prod2.nome
console.log(prod2)
