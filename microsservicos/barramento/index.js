const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

app.post('/eventos', async (req, res) => {
  const evento = req.body
  console.log(evento)
  try{
    await axios.post('http://localhost:4000/eventos', evento)
  }
  catch(e){}
  try{
    await axios.post('http://localhost:5000/eventos', evento)
  }
  catch(e){}
  try {
    await axios.post('http://localhost:6000/eventos', evento)
  } catch (e) {}
  try {
    await axios.post('http://localhost:7000/eventos', evento)
  } catch (e) {}
  res.status(200).json({msg: 'ok'})
})

const port = 10000
app.listen(port, () => {
  console.log(`Barramento. Porta ${port}.`)
})

