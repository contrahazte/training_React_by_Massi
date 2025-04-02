import { Link } from "react-router-dom";
import React from "react";
import { routes } from "../routes/Routes";
import { PageTitle } from "../components/PageTitle.components";

export const Page3=()=>{
   return <div>
    <Link to="/page2"><p>Here you can go back</p></Link> {/* "/" es Home */}
    <PageTitle/>
<Link to="/">This is a link to Home</Link>
    </div>
}