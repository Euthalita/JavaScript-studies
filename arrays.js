/*Os arrays são estruturas lineares e que comportam multiplos valores(pode comportar string, números, todas juntas), além de ser uma estrutura indexada, ou seja, os valores são acessados pelo indice
    São colocados colchetes e os elementos são separados por vírgulas
*/
const valores = [7.7, 'Carambolas', 8.1]

//Para acessar o array; os arrays são acessados pelo indice
console.log(valores[0], valores[2])

/* Para adicionar um valor ao array, é necessário inforar o indice e acrescentar o valor. 
Caso o indice informado seja maior, os indices vazios, serão impressos como vazio
*/
valores[4] = 4
console.log(valores)

//Para saber a quantidade de elementos no array
console.log(valores.length)

//Há tabém uma função para adicionar novos elementos aos arrays
valores.push({id:33}, 'Hello', null)
console.log(valores)

//A função pop retorna o ultimo valor do array
console.log(valores.pop())

//Para excluir valor de um indice específico
delete valores[0]
console.log(valores)

//Para encontrar um valor dentro do vetor, será retornado o indice em que o valor está, caso não haja o valor, será retornado o -1
console.log(valores.indexOf(3))
console.log(valores.indexOf(8.1))

//Um array é do tipo object(objeto)
console.log(typeof valores)

//O ideal é possuir um array para cada tipo de dado, para o código ficar mais limpo e organizado, como por exemplo, guardar os nomes dos clientes em um array, os produtos em outro, etc

//Forma de percorrer um array
let num = [2,9,4,6,1]

for(let i in num){
    console.log(`O valor ${num[i]} está na posição ${i}`)
}
