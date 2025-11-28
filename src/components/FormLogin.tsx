import { useState } from "react";
import { usePostAuthMutation } from "../api/auth";
import { validationLogin } from "../utils/validation";

const FormLogin = () => {
  const [login] = usePostAuthMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async () => {
    const result = validationLogin.safeParse({username, password});
    
    if (!result.success) {
    result.error.format();
    return; 
  }
    await login({ username, password });

  };

  return (
    <>
      <h1 className="text-white text-4xl font-bold mb-12">Iniciar sesión</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="flex flex-col gap-9"
      >
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Correo electrónico o número de móvil"
            className="h-15 text-white p-3 rounded-md focus:outline-none border focus:border-red-600"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Contraseña"
            className="h-15 text-white p-3 rounded-md focus:outline-none border  focus:border-red-600"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </>
  );
};

export default FormLogin;
