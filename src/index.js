import { BackTop } from "antd";
import React from "react";
import { ApolloProvider as ApolloProvider1 } from "react-apollo";
import { Query } from "react-apollo";
import ReactDOM from "react-dom";
import "./../node_modules/mdbreact/dist/css/style.css";
import client from "./apolloClient";

import AuthContextProvider from "./Context/AuthContext";
import { GET_NOTES } from "./queries";
import Route from "./Routes";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
// Se importan los estilos globales
import "./Styles/ImportCss.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Fab } from '@material-ui/core';
import { ToastContainer } from 'react-toastify'
import DataContextForProveedoresProvider from "./Pages/Auth/Proveedores/Form/formContext";

function App() {
  return (
    <ApolloProvider1 client={client}>
      <ApolloProvider client={client}>
        <CssBaseline />
        <ToastContainer/>
        <AuthContextProvider>
          <DataContextForProveedoresProvider>
          <Route/>
          <div>
            <BackTop>
              <div className="ant-back-top-inner">
              <Fab color="primary" aria-label="add">
                <VerticalAlignTopIcon/>
                </Fab>
              </div>
            </BackTop>
          </div>
          <Query query={GET_NOTES}>{() => null}</Query>
          </DataContextForProveedoresProvider>
        </AuthContextProvider>
      </ApolloProvider>
    </ApolloProvider1>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
