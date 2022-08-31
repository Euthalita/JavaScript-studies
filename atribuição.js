/*Atribuição por referencia*/

//Criando-se uma variavel "a" ela não armazena o valor, mas sim, um endereço na memoria. Então, a variavel a aponta para um endereço na memoria
const a = {name: 'Teste'}

//Se criar outra variavel, exemplo "b", e ela receber a variavel "a", ela receberá o mesmo endereço de "a"

const b = a
console.log(b)

//Se alterar o valor de "b", automaticamente o valor de "a" também é alterado, como a e b armazenam o mesmo endereço de memória, ambos serão alterados
b.name = 'Opa'
console.log(a)

/*Eu consigo alterar o valor do objeto mesmo sendo const, visto que a variavel const está apontando para o endereço de memoria. Quando você aponta uma variável para um objeto, a variável, no caso o 'const a', aponta para o endereço da memoria que se encontra o objeto. Isso significa que você não pode alterar o endereço que essa variável esta apontando, porem você consegue alterar o objeto em si.
*/

/* Aqui você cria um objeto, esse objeto é armazenado em um local na memoria,
e a variável aponta para o endereço que se encontra o objeto. */
const c = { nome: "João"};
  
/* Aqui você não consegue alterar a variável, porque ela é uma constante, e no caso você esta tentando
atribuir o endereço de outro objeto para ela. */
d = {};
 
/* Já aqui você consegue alterar o atributo 'nome', porque se trata do atributo do objeto, e não da variável,
a variável simplesmente aponta pro local onde o objeto está. */
c.nome = "Maria"; 