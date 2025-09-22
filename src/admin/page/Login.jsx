import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin");
    } catch {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-y-10 p-6 rounded shadow-md"
      >
        <h2 className="text-2xl md:text-4xl text-center lg:text-5xl text-primary font-poppins font-bold tracking-wider">
          Iniciar sesión
        </h2>
        <input
          type="email"
          placeholder="Correo"
          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-primary/80 hover:bg-primary text-white w-full py-2 font-extrabold tracking-widest uppercase rounded"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
