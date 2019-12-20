import React from 'react'
import {
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";
export default function NoMatch() {
  let location = useLocation();
  console.log(location)
    return (
      <div className="jumbotron align-items-center">
        <h3>
          Pagina no encontrada <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
