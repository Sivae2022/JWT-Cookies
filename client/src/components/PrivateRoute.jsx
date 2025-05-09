import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
  const { token } = useAuth();

  // If token exists, allow access to child routes; otherwise, redirect to login page
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
