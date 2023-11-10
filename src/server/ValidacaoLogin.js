const { users } = require('./User');
const speakeasy = require('speakeasy');

app.post('/Login', (req, res) => {
  const { email, password, token } = req.body;
  // Find the user with the given email address
  const user = users.find(u => u.email === email);
  // Validate the user's credentials
  if (!user || user.password !== password) {
    return res.status(401).send('E-mail e/ou senha inválida!!!');
  }
  // Verify the user's token
  const verified = speakeasy.totp.verify({
    secret: user.secret,
    encoding: 'base32',
    token,
    window: 1
  });
  if (!verified) {
    return res.status(401).send('Token Inválido!!!');
  }
  // User is authenticated
  res.send('Login realizado com sucesso!!!');
});