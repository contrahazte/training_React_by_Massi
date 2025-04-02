import { PageTitle } from "../components/PageTitle.components";
import { Link } from "react-router-dom";
import { routes } from "../routes/Routes"; // ¡Importación necesaria!

export const Page1 = () => {
  const page2Route = routes.find(route => route.title === "Page 2");

  return (
    <div>
      <nav>
        <Link to="/"><p>Here you can go back</p></Link> {/* "/" es Home */}
      </nav>
      <PageTitle />
      <Link to={page2Route?.path || "/page2"}>
        and This is a link to Page2
      </Link>
    </div>
  );
};
