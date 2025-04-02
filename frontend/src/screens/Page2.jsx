 import { routes } from "../routes/Routes";
 import { Link } from "react-router-dom";
 import React from "react";
import { PageTitle } from "../components/PageTitle.components";

 export const Page2=()=>{
    const routePage3=routes.find(route=>route.title ==="Page 3");
    return(
<div>
<Link to="/page1"><p>Here you can go back</p></Link> {/* "/" es Home */}
    <PageTitle/>
   <Link to={routePage3.path ||"Page 3"}>This is a link to Page 3</Link>
</div>
    )
}