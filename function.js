/*Tudo em JavaScript é função 
Uma função define um bloco, delimitado por chaves, que tem as sentenças de códigos que serão executados, quando for utilizar aquelas funções,
retornando ou não o resultado, normalmente as funções retornam resultados
Toda função é um bloco de código nomeado(com nome)
*/

console.log(typeof Object)//objeto é uma função
class Produto{}
console.log(typeof Produto)//Classe é uma função

//Para criar uma função, sempre usa-se o function e o nome da função e dentro dos parenteses, colocar os paremetros de entrada, ou seja,
os valores que eles

function firstFunctio(a, b){//Essa função é sem retorno, ou seja, não retorna nada
    console.log(a + b)
}

firstFunctio(3, 5)

//Se for atribuir somente um valor no parametro, o segundo valor será undefined então retornará um valor Not a number(NaN)  
firstFunctio(4)

function soma(a, b= 1){ //Função com retorno
 //Pode-se atribuir valores direto no parametro
    return a + b
}

//A função com retorno não é impressa, é necessário colocar dentro do console.log
console.log(soma(2, 3))
console.log(soma(5))

