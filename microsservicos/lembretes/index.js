const express = require('express')
const app = express()
app.use(express.json())

/*
  {
    1: {
      id: 1,
      texto: fazer cafe
    },
    2: {
      id: 2,
      texto: nadar
    }
  }
*/
let id = 2
const lembretes = {
  1: {
    id: 1,
    texto: 'Fazer café'
  }
}
//GET /lembretes
app.get('/lembretes', (req, res) => {
  console.log('passou por aqui')
  res.json(lembretes)  
})
//POST /lembretes
app.post('/lembretes', function(req, res){
  const texto = req.body.texto
  lembretes[id] = {id: id, texto: texto}
  id++
  res.status(201).json(lembretes)
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})


