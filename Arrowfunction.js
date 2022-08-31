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