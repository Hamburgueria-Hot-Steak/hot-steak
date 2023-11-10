const express = require('express');
const { users, User } = require('../server/User');

const app = express();
app.use(express.json());

// Rota para obter todos os usuários
app.get('/users', (req, res) => {
  res.json(users);
});

// Rota para obter um usuário pelo ID
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json(user);
});

// Rota para criar um novo usuário
app.post('/users', (req, res) => {
  const { id, name, cpf, endereco, telefone, email, password, secret } = req.body;
  const newUser = new User(id, name, cpf, endereco, telefone, email, password, secret);

  users.push(newUser);
  res.json(newUser);
});

// Rota para atualizar as informações de um usuário
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  users[index] = { ...users[index], ...updatedUser };
  res.json(users[index]);
});

// Rota para excluir um usuário
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;

  const index = users.findIndex((u) => u.id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  const deletedUser = users.splice(index, 1)[0];
  res.json(deletedUser);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
