// Exemplo de rota protegida
import { useAuth } from '../hooks/auth';

const PrivateRoute = ({ element, ...props }) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    // Redirecione para a página de login se não estiver autenticado
    return <Navigate to="/login" />;
  }

  return <Route {...props} element={element} />;
};