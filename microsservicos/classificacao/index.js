require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const axios = require('axios');
const app = express();


const apiKey = process.env.chave_API;
if (!apiKey) {
  console.error('A chave da API não está definida no arquivo .env');
  process.exit(1);
}

app.use(express.json());

const genAI = new GoogleGenerativeAI(apiKey); 
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const palavraChave = 'urgente';


const classificarLembrete = async (lembrete) => {
  const prompt = `Situação: ${lembrete.texto}. A situação se parece urgente? 1 para urgente e 0 para normal. Responda apenas com o numero.`;
  const resposta = await model.generateContent(prompt);

  if (resposta.response.text() === '1\n') {
    return 'urgente';
  } else if (resposta.response.text() === '0\n') {
    return 'normal';
  } else {
    return resposta.response.text();
  }
};
const funcoes = {
  ObservacaoCriada: async (observacao) => {
    observacao.status = observacao.texto.includes(palavraChave) ? 'importante' : 'comum';
    await axios.post('http://localhost:10000/eventos', {
      type: 'ObservacaoClassificada',
      payload: observacao,
    });
  },
  LembreteCriado: async (lembrete) => {
    lembrete.status = await classificarLembrete(lembrete);
    await axios.post('http://localhost:10000/eventos', {
      type: 'LembreteClassificado',
      payload: lembrete,
    });
  },
};

app.post('/eventos', async (req, res) => {
  try {
    const evento = req.body;
    await funcoes[evento.type](evento.payload);
    res.status(200).end(); 
  } catch (e) {
    console.error('Erro no processamento do evento:', e);
    res.status(500).send('Erro no processamento do evento');
  }
});

const port = 7000;
app.listen(port, () => {
  console.log(`Classificação. Porta ${port}.`);
});