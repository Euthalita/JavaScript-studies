//É possivel armazenar função em variavel
const soma = function (a, b){ 
    console.log(a + b)
}
soma(2,3)
//Quando se armazena a função em uma variavel, para passar os parametros é atraves da variável

/*Função arrow
-A função arrow é uma forma reduzida de escrever a função em uma variavel
- Para declarar uma função arrow não é necessário declarar o function e nem o nome da função, apenas a variável e o simbolo "=>"
*/
const adição = (a, b) => {
    return a + b
}
console.log(adição(3,4))

/*É possivel diminuir ainda mais o arrow function (RETORNO IMPLICITO)
Nesse caso, não é necessário usar o return, ele já vai direto
*/
const subtracao = (a, b) => a - b
console.log(subtracao(6, 2))

/*A arrowfunction não possui hoisting. O hoisting é uma propriedade do JS no qual não é necessario criar 
a variavel antes de utiliza-la em alguma função, etc. O código é lido de cima para baixo, mas quando 
criado uma variavel com var, ela é jogada para cima, como por exemplo, se for criada após uma função e a 
função chame esse variavel mesmo que tenha sido criada após, ela é jogada pra cima e funcionará nessa função.
    No caso da arrow, não há essa possibilidade, por isso é necessario criar a variavel antes, ou usar uma função normal
    Veja o exemplo abaixo: */
console.log (ex1)//Aparece undefined, mas não gera erro
var ex1 = 'Hello World' //No caso de outra linguagem, não funcionaria

console.log(mult(2, 6)) //Erro
var mult = (c, d) => c * d
