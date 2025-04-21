import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};
