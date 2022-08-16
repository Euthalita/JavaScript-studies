//No JavaScript não há diferença entre numeros inteiros e números com ponto flutuante
const num1 = 1.0
const num2 = 2.1

//É possivel transformar uma string em número
const num3 = Number('2.0')

console.log(num1+','+ num2 +','+ num3)

//Podemos fazer a confirmação se é um número inteiro. Veja:
console.log(Number.isInteger(num2))
console.log(Number.isInteger(num3))

//Transformar um número de ponto flutuante em binário
console.log(num2.toString(2))//É obrigatorio colocar o numero 2
//Atenção! Para transformar um número inteiro em número binário, é necessário colocar entre parenteses, se não estiver em uma variavel
console.log((10).toString(2))
console.log((3).toString(2))

//Informar a quantidade de casas decimais para um número muito grande
const num = 2.89333333333933939
console.log(num.toFixed(2)) //No caso do 2, informa a quantidade de casas decimais


//No JS há a possibilidade de fazer operações de string com numeros
const numA = '10'
const numB= 2
console.log(numA/numB)

console.log('10.3'/2)

//O js devolve um valor infinito em divisões por 0
console.log(2 / 0)


//Não é possivel multiplicar palavras, para duplicar, triplicar,etc
console.log('show'*2)

//Operações com ponto flutuante, normalmente não dão um número exato, por conta de algumas especificações da linguagem, porque se fosse 100% preciso, a linguagem seria mais lenta. FIQUE ATENTO!
console.log(0.7 + 0.1)
