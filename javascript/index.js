
//processamento assíncrono io-bound
//inferno de callbacks e código hadouken
//promises
//async/await
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
  const exibirConteudo = function(erro, conteudo){
    if(erro)
      console.log(`Erro: ${erro}`)
    else{
      console.log(`Conteúdo: ${conteudo.toString()}`)
      const dobro = Number(conteudo.toString()) * 2
      const finalizar = (erro) => {
        if(erro)
          console.log (`Erro na escrita: ${erro}`)
        else
          console.log(`Escreveu com sucesso`)
      }
      fs.writeFile('dobro.txt', dobro.toString(), finalizar)

    }
  }
  fs.readFile(nomeArquivo, exibirConteudo)
  console.log('Fazendo outras coisas...')
}
abrirArquivo('arquivo.txt')



// function demorada(){
//   const dataAtualMais2Segundos = new Date().getTime() + 2000
//   while (new Date().getTime() <= dataAtualMais2Segundos);//NO OP
//   const d = 2 + 5
//   return d
// }
// const a = 2 + 3
// const b = 8 + 9
// setTimeout(() => {
//   const d = demorada()
//   console.log(`Demorada: ${d}`)
// }, 0)
// const e = a + b + 5
// const atualMais10 = new Date().getTime() + 10000
// while (new Date().getTime() <= atualMais10);
// console.log(e)


// // const a = 2 + 7
// // const b = 6 + 7
// // console.log(a + b)

// // console.log('Eu primeiro')
// // console.log('Depois eu')
// // console.log('Serei sempre a última...:(')




// //Objetos Javascript literais (JSON: Javascript Object Notation)
// //operação somar, que soma dois valores, implementada com uma arrow function
// //que não usa return

// //operação subtrair, que subtrai dois valores, implementada com uma function regular

// // let a = {"": 1}
// // console.log(a[""])

// // let calculadora = {
// //   somar: (a, b) => a + b,
// //   subtrair: function(a, b){
// //     return a - b
// //   }
// //   // subtrair:(a, b) => this.somar(a, b)
// //   // // subtrair: function(a, b){
// //   // //   return this.somar(a, -b)
// //   // // }
// // }

// // console.log(calculadora.somar(2, 2))
// // console.log(calculadora.subtrair(2, 2))



// // //Uma concessionária tem CNPJ e endereço, com rua, numero e bairro. Ela possui alguns carros em estoque. Cada carro tem marca, modelo e ano de fabricação
// // // let concessionaria = {
// // //   nome: 'C1',
// // //   cnpj: '123.456.789-33',
// // //   endereco: {
// // //     logradouro: 'Rua B',
// // //     numero: 11,
// // //     bairro: 'Vila J'
// // //   },
// // //   carros: [
// // //     {
// // //       marca: 'VW',
// // //       modelo: 'Gol',
// // //       ano: 2000
// // //     },
// // //     {
// // //       marca: 'GM',
// // //       modelo: 'Corsa',
// //       ano: 2005
// //     }
// //   ]
// // }

// // for(let veiculo of concessionaria.carros){
// //   console.log(veiculo.marca)
// // }

// //exibir corsa
// // console.log(concessionaria['carros'][1]['modelo'])

// //faça um for, mostrando o modelo de cada veiculo
// //pesquise sobre o for/of no site mdn


// //uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 64
// //Seu nome
// //Seu RA
// //Seu e-mail

// // let pessoa = {
// //   'Seu nome': 'Alicia'
// // }

// // console.log(pessoa['Seu nome'])

// // let pessoa = {
// //   nome: 'Maria',
// //   idade: 21,
// //   endereco: {
// //     logradouro: 'Rua B',
// //     numero: 64
// //   }
// // }
// // console.log(pessoa.endereco.logradouro)
// // console.log(pessoa['endereco']['numero'])
// // console.log(pessoa.endereco[logradouro])
// // console.log(pessoa['endereco'].numero)


// //uma pessoa que se chama João e tem 17 anos
// // let pessoa = {
// //   nome: `João`,
// //   idade: 17
// // }

// // console.log(pessoa.nome)
// // console.log(pessoa['idade'])




// // function eAgora(){
// //   let cont = 1
// //   function f1(){
// //     console.log(cont)
// //     cont++
// //   }
// //   cont++
// //   function f2(){
// //     console.log(cont)
// //     cont++

// //   }
// //   cont++

// //   return [f1, f2]
// // }
// // let funcoes = eAgora()
// // funcoes[0]()
// // funcoes[1]()

// // function ola(){
// //   let nome = 'João'
// //   return function(){
// //     console.log(`Olá ${nome}`)
// //   }
// // }

// // const res = ola()
// // res()

// // function f(){
// //   let nome = 'João'
// //   function g(){
// //     let a
// //     console.log(nome)
// //   }
// //   g()
// // }
// // f()





// // GET localhost:8080/livros
// // app.get('/livros', (req, res) => {

// // })

// // POST localhost:8080/livros
// // app.post('/graphql', function(req, res){})
// //closures


// //função de alta ordem
// // function f (funcao){
// //   console.log('f')
// //   console.log(funcao()())
// //   funcao()()()
// //   return () => console.log('i')
// // }

// // function g(){
// //   console.log('g')
// //   return function(){
// //     console.log('Fui criada por g')
// //     return () => {console.log('h'); return () => 'k'}
// //   }
// // }

// // f(g())()
// // let umaFuncao = function(){
// //   console.log('sou uma função')
// // }
// // umaFuncao()
// // public class Pessoa{
// //   public int andar(){return 1;}

// //   public void teste(){
// //     // var meuMetodo = andar;
// //     this.andar(correr)
// //   }

// //   public void correr(){
// //     return this.andar;
// //   }
// // }

// // const a = () => console.log('a')
// // const b = () => {
// //   console.log('b')
// //   return 'b'
// // }


// // //closures


// // // // //funções regulares e arrow functions

// // // // // const ehPar = n => (n % 2 === 0)

// // // // const f = () => {
// // // //   (return)erro de sintaxe
// // // //   (2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 + 2 )
// // // // }

// // // const f = a => 2
// // // console.log(f())

// // // // const dobro = n => return n * 2
// // // // console.log(dobro(5))
// // // // const hello = () => console.log('Hello')
// // // // hello()
// // // // const helloNome = (nome, idade) => console.log('Oi, ' + nome)


// // // //parâmetros com valor padrão
// // // // () => {}
// // // // const triplo = function(n = 5){
// // // //   return 3 * n
// // // // }
// // // // console.log(triplo(6))
// // // // console.log(triplo(undefined))

// // // //função regular anônima
// // // // const dobro = function(n){
// // // //   return 2 * n
// // // // }
// // // // console.log(dobro(3))
// // // // function somar(a, b){
// // // //   return a + b
// // // // }
// // // // console.log(somar(1, 2))

// // // // function hello(){
// // // //   console.log('oi')
// // // // }
// // // // hello()
// // // // function hello(nome){
// // // //   console.log('Oi, ' + nome)
// // // // }
// // // // hello('Ana')


// // // // const numeros = [1, 2, 3, 4]
// // // // const soma = numeros.reduce((ac, v) => ac + v)
// // // // console.log(soma)
// // // // const nomes = ['Ana', 'Antonio', 'Alex']
// // // // //verifica se pelo menos um começa com a
// // // // const resultado = nomes.some(n => n[0] === 'A' || n[0] === 'a')
// // // // console.log(resultado)


// // // //every
// // // // const resultado = nomes.every(n => n[0] === 'A' || n[0] === 'a')
// // // // console.log(resultado)


// // // // let m = 1
// // // // const numeros = [1, 2, 3]
// // // // console.log(numeros.map((valor, indice, numeros) => valor * (indice + 2)))


// // // //Dado esse vetor, produzir outro. Ele deve conter a letra inicial de cada nome, na sua posição original

// // // // const listaResultante = nomes.map(x => x[0])

// // // // //[A, J, R, A]
// // // // const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// // // // const resultado = []
// // // // console.log(resultado)

// // // // //Dado esse vetor, construa outro. Ele deve conter apenas os nomes que começam com a letra A.
// // // // // const nomes = ['Ana', 'João', 'Rodrigo', 'Angelica']
// // // // // const resultado = nomes.filter(n => {return n[0] === 'A'})
// // // // // console.log(resultado)
// // // // // SELECT * FROM tb_pessoa WHERE idade >= 18
// // // // // const resultado = []
// // // // // for(let i = 0; i < nomes.length; i++){
// // // // //   if (nomes[i[0]] === 'A')
// // // // //     resultado.push(nomes[i]) 
// // // // // }
// // // // console.log(resultado)

// // // // //vetores
// // // // // v1 = []
// // // // // console.log(v1.length)
// // // // // v1[0] = 'abc'
// // // // // console.log(v1.length)
// // // // // v1[10] = 2
// // // // // console.log(v1.length)
// // // // // console.log(v1)
// // // // // for(let i = 0; i < v1.length; i++)
// // // // //   console.log(v1[i])
// // // // //comparação por igualdade: == e ===
// // // // // console.log(1 == 1)
// // // // // console.log(1 === 1)
// // // // // console.log(1 == '1')
// // // // // console.log (1 === '1')
// // // // // console.log (true === 1)
// // // // // console.log (true == 1)
// // // // // console.log (1 == [1])
// // // // // console.log(1 == [])
// // // // // console.log(1 == [0])
// // // // // console.log(1 == [0, 1])
// // // // // console.log(1 == [1, 0])
// // // // // console.log(3 == [3])
// // // // // console.log(null == null)
// // // // // console.log(null === undefined)
// // // // // console.log(null == undefined)
// // // // // console.log([] == false)
// // // // // console.log([] == [])
// // // // // console.log(null == 0)
// // // // // console.log(false == 0)

// // // // //coerção implícita e explícita
// // // // // const n1 = 2
// // // // // const n2 = '3'
// // // // // const n3 = n1 + n2
// // // // // console.log(n3)
// // // // // const n4 = n1 + Number(n2)
// // // // // console.log(n4)

// // // // //declaração de variáveis e constantes
// // // // // let a = null
// // // // // let b = undefined
// // // // // var idade = 18
// // // // // let nome = 'Ana'
// // // // // console.log ('Você tem ' + idade + ' anos')
// // // // // console.log('Oi, ' + nome)
// // // // // //hoist: içamento
// // // // // if(idade >= 18){
// // // // //   console.log(nome + ', você pode dirigir')
// // // // // }
// // // // // console.log('Tchau, ' + nome)
// // // // // var linguagem = 'javascript'
// // // // // var linguagem = 'java'
// // // // // const pi = 3.14
// // // // // pi = 3.141
// // // // //let, const e var
// // // // // let nome = 'João'
// // // // // nome = 'João Silva'
// // // // // console.log(nome)
// // // // // const n = 1
// // // // // n++ // n = n + 1
// // // // // const nome = 'João'
// // // // // //nome = 'João Silva'
// // // // // const idade = 19

// // // // //js usa sistema de tipos dinâmico
// // // // //java usa sistema de tipos estático
// // // // //sistema de tipos estático:
// // // // //java, c, c++
// // // // //sistema de tipos dinâmico:
// // // // //javascript, python, php, perl, ruby
// // // // //sistema de tipos gradual
// // // // //C#, Dart, Typescript, Kotlin
// // // // // a = "abc"
// // // // // a.toUppercase()
// // // // // int a;
// // // // // a = 2;
// // // // // a = "abc";
// // // // // a.falar();
// // // // // String s = "abc";
// // // // // s.toUppercase();
// // // // // s.falar();

// // // // // let a: number = 2
// // // // // a.falar()