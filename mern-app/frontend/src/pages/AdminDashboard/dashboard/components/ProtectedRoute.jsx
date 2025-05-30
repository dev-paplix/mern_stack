import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, adminOnly = false, role}) {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const isRole = localStorage.getItem('role');

  if (!token) {
    // Not logged in
    return <Navigate to="/" replace />;
  }

  if (adminOnly && !isAdmin) {
    // Not an admin
    return <Navigate to="/" replace />;
  }

  if(isRole == 'Accounting' && token && isAdmin == 'false'){
     return <Navigate to="/accounting/dashboard" replace />;
  }

  // Authorized
  return children;
}