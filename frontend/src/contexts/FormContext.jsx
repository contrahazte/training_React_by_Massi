// src/context/FormContext.js
import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

const initialFormState = {
  nombreJefe: "",
  cargoJefe: "",
  telefonoJefe: "",
  emailJefe: "",
  urlJefe: "",
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormState);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  return (
    <FormContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
