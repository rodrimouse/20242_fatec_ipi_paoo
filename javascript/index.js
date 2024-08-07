//Dado esse vetor, produzir outro. Ele deve conter a letra inicial de cada nome, na sua posição original
//[A, J, R, A]
const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
const resultado = []
console.log(resultado)

//Dado esse vetor, construa outro. Ele deve conter apenas os nomes que começam com a letra A.
// const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// const resultado = nomes.filter((n) => {return n[0] === 'A'})
// console.log(resultado)
// SELECT * FROM tb_pessoa WHERE idade >= 18
// const resultado = []
// for(let i = 0; i < nomes.length; i++){
//   if (nomes[i[0]] === 'A')
//     resultado.push(nomes[i]) 
// }
console.log(resultado)

//vetores
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++)
//   console.log(v1[i])
//comparação por igualdade: == e ===
// console.log(1 == 1)
// console.log(1 === 1)
// console.log(1 == '1')
// console.log (1 === '1')
// console.log (true === 1)
// console.log (true == 1)
// console.log (1 == [1])
// console.log(1 == [])
// console.log(1 == [0])
// console.log(1 == [0, 1])
// console.log(1 == [1, 0])
// console.log(3 == [3])
// console.log(null == null)
// console.log(null === undefined)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// console.log(null == 0)
// console.log(false == 0)

//coerção implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)

//declaração de variáveis e constantes
// let a = null
// let b = undefined
// var idade = 18
// let nome = 'Ana'
// console.log ('Você tem ' + idade + ' anos')
// console.log('Oi, ' + nome)
// //hoist: içamento
// if(idade >= 18){
//   console.log(nome + ', você pode dirigir')
// }
// console.log('Tchau, ' + nome)
// var linguagem = 'javascript'
// var linguagem = 'java'
// const pi = 3.14
// pi = 3.141
//let, const e var
// let nome = 'João'
// nome = 'João Silva'
// console.log(nome)
// const n = 1
// n++ // n = n + 1
// const nome = 'João'
// //nome = 'João Silva'
// const idade = 19

//js usa sistema de tipos dinâmico
//java usa sistema de tipos estático
//sistema de tipos estático:
//java, c, c++
//sistema de tipos dinâmico:
//javascript, python, php, perl, ruby
//sistema de tipos gradual
//C#, Dart, Typescript, Kotlin
// a = "abc"
// a.toUppercase()
// int a;
// a = 2;
// a = "abc";
// a.falar();
// String s = "abc";
// s.toUppercase();
// s.falar();

// let a: number = 2
// a.falar()