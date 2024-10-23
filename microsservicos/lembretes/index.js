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
const baseLembretes = {
  1: {
    id: 1,
    texto: 'Fazer café'
  }
}
//GET /lembretes
app.get('/lembretes', (req, res) => {
  res.status(200).json(baseLembretes)  
})
//POST /lembretes
app.post('/lembretes', function(req, res){
  const texto = req.body.texto
  baseLembretes[id] = {id: id, texto: texto}
  id++
  res.status(201).json(baseLembretes)
})

const port = 4000
app.listen(port, () => {
  console.log(`Lembretes. Porta ${port}.`)
})


