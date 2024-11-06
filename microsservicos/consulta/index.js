const express = require('express')
const app = express()
app.use(express.json())

//mapa de funções
//um mapa é um objeto Javascript
//tipo do evento : função a ser executada
const funcoes = {
  LembreteCriado: (lembrete) => {
    baseConsolidada[lembrete.id] = lembrete
  },
  ObservacaoCriada: (observacao) => {
    const observacoes = baseConsolidada[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsolidada[observacao.lembreteId]['observacoes'] = observacoes
  }
}

const baseConsolidada = {}

app.get('/lembretes', (req, res) => {
  res.status(200).json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
  const evento = req.body
  funcoes[evento.type](evento.payload)
  res.status(200).end()  
})
const port = 6000
app.listen(port, () => console.log(`Consulta. Porta ${port}.`))
