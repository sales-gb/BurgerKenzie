import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../providers/UserContext';

const ProtectedRoute = () => {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : null;
};

export default ProtectedRoute;
