import { useState, type FormEvent } from "react";
import { usePostAuthMutation } from "../api/auth";
import { COLORS } from "../utils/Colors";
import Toast from "./Toast";

const LoginForm = () => {
  const [postAuth, { data, error }] = usePostAuthMutation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postAuth({ username, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64 rounded-2xl p-6 shadow-lg bg-white" >
        <h1 className="text-2xl font-bold">Inciar Sesión </h1>
        <label >Usuario</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="border rounded px-2 py-1" />
        <label >Contraseña</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded px-2 py-1" />
        <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">Inciar Sesión </button>
      </form>
      {error && <Toast message={"Error al iniciar sesión"} color={COLORS.ERROR} />}
      {data && <Toast message={`¡Inicio de sesión exitoso! ${data.firstName}`} color={COLORS.SUCCESS} />}



    </>

  )
}

export default LoginForm;
