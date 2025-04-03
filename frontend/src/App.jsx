import { routes } from "./routes/Routes";
import React from "react";
import {Route,Routes} from "react-router-dom";
import "../src/App.css"
const App=()=>{

  return(
    <Routes>
      {routes.map(({path,element})=>(
<Route key={path} path={path} element={element}/>
      ))}
    </Routes>
  )
}

export default App