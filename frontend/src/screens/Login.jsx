import { useState } from "react"
import { useUserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleSavingLoginData } = useUserContext();
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {

            const fetching = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            if (!fetching.ok) {
                alert("Somenthing was wrong .Try again later");
                return;}

                const getingData = await fetching.json();
                console.log({
                    mensaje: "Login exitoso",
                    email:getingData.user.email,
                    token: getingData.token
                  });

                handleSavingLoginData(getingData);
                navigate("/home")
            }



        catch (error) { console.error(error) }
    }

    return (
        <form onSubmit={handleLogin}>
            <div>
                <h2>Ingresa a tu perfil</h2>

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <button type="submit">Iniciar sesión</button>
            </div>
        </form>
    );
};
