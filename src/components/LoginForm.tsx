import { useState } from "react";
import { usePostAuthMutation } from "../api/auth";
import { COLORS } from "../utils/Colors";

const LoginForm = () => {
    const [postAuth,{data, error}] = usePostAuthMutation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    
        e.preventDefault();
        await postAuth({username, password});
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
    {error && <p className="mt-4" style={{color: COLORS.ERROR}}>Error al iniciar sesión</p>}
    {data && <p className="mt-4" style={{color: COLORS.SUCCESS}}>¡Inicio de sesión exitoso! {data.firstName}</p>}



    </>
   
  )
}

export default LoginForm;
