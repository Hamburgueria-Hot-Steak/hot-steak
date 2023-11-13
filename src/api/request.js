// Acessar a lista de usuários cadastrados: localhost:3001/users

export const request = {
  getUsers: async () => {
    try {
      const res = await fetch('http://localhost:3001/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!res.ok) {
        if (res.status === 404) {
          // Usuário não encontrado
          throw new Error('Usuários não encontrados!');
        } else {
          // Outro erro de resposta
          throw new Error('Erro ao obter a lista de usuários.');
        }
      }

      return await res.json();
    } catch (error) {
      throw new Error('Erro ao obter a lista de usuários.');
    }
  },
}
