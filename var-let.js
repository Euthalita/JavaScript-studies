/*A declaração de var é vista somente no escopo global, se caso queira declara-la em outro escopo ela não será vista somente naquele escopo, mas sim em todos os escopos(global),exceto se ela for declarada em uma função, ela é vista somente no escopo dessa função.
Como por exemplo, se eu quiser declarar a variavel em um escopo com if e else, ela passará direto, como se não houvesse o if e else, por isso, é aconselhado o uso do let
*/
var num = 321
{var num= 654
    console.log(num) 
}
console.log(num)//Mesmo o var dentro de um escopo, será impresso o valor dentro do escopo novamente, então o var não diferencia escopo, é como se todos fossem globais, exceto funções

//O let consegue diferenciar escopos, veja o exemplo abaixo
let valor = 123
{ let valor= 456
    console.log(valor)
    //As chaves é um escopo que não é global e quando impresso o valor dentro desse escopo permanece
}
console.log(valor)//Mesmo a variavel valor sendo impressa após, ela não pegara o valor de dentro do escopo acima

//Exemplo com loop
for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =', i)

for (let j=0; j < 10; j++){
    console.log(j)
}
console.log(j)
/*O var continua com o resultado mesmo fora do escopo e o let só contabiliza dentro do escopo, após o final do escopo será gerado um erro visto que o j não foi declarado valor*/