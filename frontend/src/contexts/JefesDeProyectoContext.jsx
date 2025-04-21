import { createContext, useContext, useState } from "react";

const ProjectsManagersContext = createContext();
export const useProjectsManagersContext = () => useContext(ProjectsManagersContext);

const initialProjectsManager = {
  nombreJefe: "",
  cargoJefe: "",
  telefonoJefe: "",
  emailJefe: "",
  urlJefe: "",
};

export const ProjectsManagersProvider = ({ children }) => {
  const [projectsManager, setProjectsManager] = useState(initialProjectsManager);

  const handleSavingProjectsManagerData = (data) => {
    setProjectsManager({
      nombreJefe: data.nombreJefe,
      cargoJefe: data.cargoJefe,
      telefonoJefe: data.telefonoJefe,
      emailJefe: data.emailJefe,
      urlJefe: data.urlJefe,
    });
  };


  return (
    <ProjectsManagersContext.Provider value={{ handleSavingProjectsManagerData, projectsManager, }}>
      {children}
    </ProjectsManagersContext.Provider>
  );
};
