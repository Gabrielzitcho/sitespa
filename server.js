const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota para lidar com o envio do formulário
app.post('/api/submit-form', (req, res) => {
  const { nome, contato, email, orientador, cpf, estagio } = req.body;

  // Aqui você pode processar os dados, salvar no banco de dados, etc.
  console.log('Dados recebidos:', { nome, contato, email, orientador, cpf, estagio });

  // Enviar uma resposta de sucesso
  res.status(200).json({ message: 'Formulário recebido com sucesso!' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});