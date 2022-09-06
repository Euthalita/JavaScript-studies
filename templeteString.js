//É uma outra forma mais fácil e moderna de concatenar
//Com o template string há a possibilidade de haver quebras de linhas e ele será impresso do mesmo modo da quebra
//No template, usa-se crase e cifrão para concatenar com uma variável

const firstName = 'Ana'
const lastName= 'Beatriz'
console.log(`Meu nome é ${firstName} ${lastName}`)

const nome= 'Raquel'
const template = ` 
    Olá
    ${nome}
    !`
//Uso de crase, não é uma aspas normal ''=errado  ``=(certo)
console.log(template)

//Expressões
console.log(`1 + 1 = ${1+1}`)
//É diferente de concatenar, pois juntará os dois números formando o 11, visto que a string com a concatenação "+" se sobrepõe á soma, se fosse "-", seria realizado a subtração de uma string com um número
console.log('1'+ 1)
console.log("1"-1)

console.log(`Olá ${nome}`)