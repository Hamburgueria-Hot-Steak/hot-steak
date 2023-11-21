const users = [];

class User {
  constructor(id, name, cpf, endereco, telefone, email, password, secret) {
    this.id = id;
    this.name = name;
    this,cpf = cpf;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.password = password;
    this.secret = secret;
  }
}
module.exports = { users, User };