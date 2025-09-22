import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // 🔐 TODO: conectar con Firebase Auth
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
