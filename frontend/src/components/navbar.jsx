import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Mi App</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create/projects-managers">Create</Link>
          </li>
          <li>
            <Link to="/getAll/projects-managers">Get All</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
