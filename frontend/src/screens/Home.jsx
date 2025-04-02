import { routes } from "../routes/Routes";
import { PageTitle } from "../components/PageTitle.components";
import { Link } from "react-router-dom";

export const Home = () => {
  // Buscar la ruta que tiene el título "Page 1"
  const page1Route = routes.find(route => route.title === "Page 1");

  return (
    <div>
      <PageTitle />
      <Link to={page1Route?.path || "/page1"}>
        and This is a link to Page1
      </Link>
    </div>
  );
};
