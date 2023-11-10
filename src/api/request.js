// Acessar a lista de usuários que fizeram login: http://localhost:3001/users

export const request = async () => {
    try {
      const res = await fetch('http://localhost:3000/required-certificate/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Corrigido: 'application/json' deve ser uma string
        },
      });
      if (!res.ok) {
        throw new Error('Usuário não encontrado!'); 
      }
      return await res.json();
    } catch (error) {
      throw new Error('Usuário encontrado!');
    }
  };
  