import React, { memo, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

import {
  Layout,
  NoMatch,
  UnRegistered,
} from './../helpers/ConstRouters';
import { AuthContext } from '../Context/AuthContext';

import Blog from "../Pages/Blog";
import BlogCrear from "../Pages/Blog/Crear"
import MisPublicaciones from "../Pages/Blog/MisPubliciones";
import AdminUsers from "../Pages/Auth/Admin/Usuarios";
import Registro from '../Pages/NoAuth/Register/Tipo'
import Proveedores from "../Pages/Auth/Proveedores/";
import CotizacionCrearProyecto from "../Pages/Auth/Proveedores/Cotizaciones/Proyecto/crear";

// import AdminUsersCrete from "../Pages/Auth/Admin/Usuarios/crear";
export default memo(function Routes() {
  const Context = useContext(AuthContext)

  const { isAuthenticated, typeUser, isAdministrator } = Context
  console.log(isAuthenticated, typeUser)
  return (
    <div style={{ background: '#fff' }}>
      
        <Router>
        <Layout>
          <Switch>

          <Route path="/" exact render={() =>{
            if(typeUser==='Proveedor'){
              return <Proveedores />
            }else{
              return <UnRegistered />
            }
          }} />
          <Route path="/Cotizacion/Proyecto/Nuevo" exact render={() =>{
            if(typeUser==='Proveedor'){
              return <CotizacionCrearProyecto />
            }else{
              return <NoMatch />
            }
          }} />
          
          <Route path="/Register/:id" render={() => <Registro />} />
            {/* <Route path="/login"  render={()=><SignIn/>} />  */}
            <Route path="/Blog" exact render={() => <Blog />} />
            <Route path="/Proveedores" exact render={() => <Proveedores />} />
            <Route path="/Blog/Crear" render={() => {
              if (isAuthenticated) {
                return <BlogCrear />
              } else {
                return <Redirect to='/blog' />
              }
            }}
            />
            <Route path="/blog/misPublicaciones/Editar" render={() => {
              if (isAuthenticated) {
                return <BlogCrear />
              } else {
                return <Redirect to='/blog' />
              }
            }}
            />
            <Route path="/Blog/MisPublicaciones" render={() => {
              if (isAuthenticated) {
                return <MisPublicaciones />
              } else {
                return  <NoMatch />
              }
            }}
            />
            <Route path="/admin/users" exact render={() => {
              if (isAuthenticated) {
                if (isAdministrator) {
                  return <AdminUsers/>
                } else {
                  return  <NoMatch />
                }
              } else {
                return  <NoMatch />
              }
            }
            } />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          </Layout>
        </Router>
    </div>
  );
})

const ConstructorasRouter=(<></>)
const ProveedoresRouter=(<></>)
const AdministrarRouter=(<></>)