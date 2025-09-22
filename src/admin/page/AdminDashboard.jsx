import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      <aside className=" fixed bottom-0 w-60 h-screen bg-gray-800 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl text-center font-poppins font-bold tracking-wider mb-6">
            Panel Admin
          </h2>
          <nav className="flex flex-col text-2xl gap-2">
            <Link to="/admin/services">Servicios</Link>
            <Link to="/admin/about">About</Link>
            <Link to="/admin/feedback">Feedback</Link>
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm font-bold uppercase tracking-widest"
        >
          Cerrar sesión
        </button>
      </aside>
      <main className="ml-60 flex-1 p-6 bg-black overflow">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminDashboard;
