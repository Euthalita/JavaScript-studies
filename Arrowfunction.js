//É possivel armazenar função em variavel
const soma = function (a, b){ 
    console.log(a + b)
}
soma(2,3)
//Quando se armazena a função em uma variavel, para passar os parametros é atraves da variável

/*Função arrow
-Com Arrow Function, podemos deixar nosso códio muito menos verboso
-A função arrow é pode ser também uma forma reduzida de escrever a função em uma variavel
- Para declarar uma função arrow não é necessário declarar o function e nem o nome da função, apenas a variável e o 
simbolo "=>"
*/
const adição = (a, b) => {
    return a + b
}
console.log(adição(3,4))

/*É possivel diminuir ainda mais o arrow function (RETORNO IMPLICITO)
Nesse caso, não é necessário usar o return, ele já vai direto
*/
const subtracao = (a, b) => a - b //Aqui é uma função anonima dentro da variavel(é obrigatorio declarar a variavel)
console.log(subtracao(6, 2))
//Tem que declarar a variavel para poder passar os parametros


/*Outro exemplo:
Considere que você tenha uma função que recebe um parâmetro e tenha uma única instrução e com arrow function
podemos deixar nosso código muito menos verboso
*/
function imprimi(texto){
    console.log(`Esse é o ${texto}`)
}

var text = texto => console.log(`Esse é o ${texto}`)

//Com mais parametros:
let c = (arg1, arg2) => {
    let arg3 = arg1+arg2
    console.log(`Esse é o ${arg3}`)
}
c(3,3)

//Sem parametros e sem argumentos
let noarg = (semArg) => console.log('Não tem argumentos')
noarg()
/*
    Função Arrow e Hoisting
A arrowfunction não possui hoisting. O hoisting é uma propriedade do JS no qual não é necessario criar 
a variavel antes de utiliza-la em alguma função, etc. O código é lido de cima para baixo, mas quando 
criado uma variavel com var, ela pode ser jogada em outro escopo acima(se não estiver dentro de uma função),
como por exemplo, se for criada após uma função e a função chame esse variavel mesmo que tenha sido criada após, 
ela é jogada pra cima e funcionará nessa função.
    No caso da arrow, não há essa possibilidade, por isso é necessario criar a variavel antes, ou usar uma função 
    normal
    Veja o exemplo abaixo: */
console.log (ex1)//Aparece undefined, mas não gera erro
var ex1 = 'Hello World' //No caso de outra linguagem, não funcionaria

console.log(mult(2, 6)) //Erro
var mult = (c, d) => c * d


