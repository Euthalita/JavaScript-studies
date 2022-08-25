/*No Java há três formas de declarar uma variável: 
    1. Com var oi= 'Hello'
    2. Com let mundo= 'world'
    3. Com const sinal = '!'
O var e o let são possiveis de serem alterados e o const é uma constante, ou seja, um valor que não será alterado durante todo o programa
*/

var oi= 'Hello'
let mundo='world'
const sinal = '!'
console.log(mundo)

//Após declarar uma váriavel que não seja constante, não é necessário escrever let e var novamente, basta colocar o nome da variável
mundo = 'mundo'
console.log(mundo)

//Sempre que possivel, priorizar constantes e se for necesário, o uso do let é mais recomendado que o var
