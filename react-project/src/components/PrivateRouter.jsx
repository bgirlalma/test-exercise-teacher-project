import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/userHook';

export const PrivateRouter = ({
  component: Component,
  redirectTo = '/login',
}) => {
  const { isLoggIn } = useAuth();
  const redirectShould = !isLoggIn;
  return redirectShould ? <Navigate to={redirectTo} /> : <Component />;
};
