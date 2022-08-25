//Para mostrar a letra de um determinado indice na string é utilizado a função charAt()

const palavra = 'amor'
console.log(palavra.charAt(3))
console.log(palavra.charAt(1))

//Se houver um indice inexistente, o java não mostrará nada
console.log(palavra.charAt(4))

//Para ver quanto vale a letra em determinada string na tabela unicode
console.log(palavra.charCodeAt(2))

//Para a ver se existe determinada letra na string e retornar a posição em que está no indice
console.log(palavra.indexOf('a'))

//Para imprimir o valor a partir de uma determinada posição no index
console.log(palavra.substring(1))

//Para imprimir de uma posição até outra posição
console.log(palavra.substring(0, 3))

//Para concatenar uma string
console.log('Eu tenho '.concat(palavra).concat('!'))
//Outra forma
console.log('Eu tenho '+ palavra + '!')

//Para substituir um valor por outro na string
console.log(palavra.replace('a', 'A'))//Aqui substitui o 'a' por 'A'

//Para transformar uma string em um array
console.log('Ana, Maria, Pedro'.split(','))//Ira separar pela vírgula 