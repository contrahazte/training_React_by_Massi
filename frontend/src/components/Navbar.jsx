import { Link } from "react-router-dom";
import "../components/Navbar.css"


export const Navbar =()=>{
return(
    <nav>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/create/page1">Crear Jefes de Proyectos</Link></li>
            <li> <Link to="/gallery">Galería</Link></li>
        </ul>
    </nav>
)

}