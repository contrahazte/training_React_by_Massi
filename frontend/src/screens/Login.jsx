import React, { useState } from "react";
import { useFormContext } from "../context/LoginProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin2 } = useFormContext();
const navigate=useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/auth/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Error al iniciar sesión");

      handleLogin2(data.user, data.token); // Guarda en contexto + localStorage
      navigate("/home")
      alert("Inicio de sesión exitoso");
    } catch (e) {
      console.error(e);
      alert("Error en el login");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="label-inputs-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="label-inputs-form">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
