import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  if (!token) {
    // Not logged in
    return <Navigate to="/" replace />;
  }

  if (adminOnly && !isAdmin) {
    // Not an admin
    return <Navigate to="/" replace />;
  }

  // Authorized
  return children;
}