import { useState, useContext, createContext } from "react";

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

const inicialLoginValues = {
  email: "",
  password: "",
};

export const FormProvider = ({ children }) => {
  const [login, setLogin] = useState(inicialLoginValues);
  const [token, setToken] = useState("");

  const handleLogin2 = (userData, userToken) => {
    setLogin(userData);
    setToken(userToken);

    localStorage.setItem("email", userData.email);
    localStorage.setItem("password", userData.password);
    localStorage.setItem("token", userToken);
  };

  return (
    <FormContext.Provider value={{ login, token, handleLogin2 }}>
      {children}
    </FormContext.Provider>
  );
};
