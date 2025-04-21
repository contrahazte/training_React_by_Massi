import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
const initialLoginData = {
    email: "",
    password: ""
}
export const UserProvider = ({ children }) => {
    const [loginData, setLoginData] = useState(initialLoginData);
    const [token, setToken] = useState("");
    const handleSavingLoginData = (formData) => {
        setLoginData({ email: formData.user.email });
        setToken(formData.token)
        localStorage.setItem("email", formData.user.email)
        localStorage.setItem("token", formData.token)

    }
    return (
        <UserContext.Provider value={{ handleSavingLoginData, token, loginData }}>
            {children}
        </UserContext.Provider>
    )

}