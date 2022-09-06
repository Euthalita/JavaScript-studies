/*O contexto léxico é o local onde a variavel foi definida(criada), por exemplo, há variáveis que são criadas dentro de funções

Pode-se criar uma constante dentro e fora da função com o mesmo nome que não dara erro, visto que estão em contexto lexico diferentes
Mas se for criada constantes com o mesmo nome no mesmo contexto lexico(escopo), dará erro
*/

const saudacao = 'OPA!'//contexto lexico 1

function exex () {
    const saudacao = 'OIEE!'//contexto lexico 2
    return saudacao
}
//Se não houvesse o const dentro da função, a função iria procurar fora do contexto dela, entao seria retornado a const com o valor "OPA! "

console.log(saudacao)
console.log(exex())