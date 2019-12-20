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
// import AdminUsersCrete from "../Pages/Auth/Admin/Usuarios/crear";
export default memo(function Routes() {
  const Context = useContext(AuthContext)

  const { isAuthenticated, typeUser, isAdministrator } = Context
  console.log(isAuthenticated, typeUser)
  return (
    <div style={{ background: 'rgb(233, 235, 236)' }}>
      
        <Router>
        <Layout>
          <Switch>

          <Route path="/" exact render={() => <UnRegistered />} />
          <Route path="/Register/:id" render={() => <Registro />} />
            {/* <Route path="/login"  render={()=><SignIn/>} />  */}
            <Route path="/Blog" exact render={() => <Blog />} />
            <Route path="/Blog/Crear" render={() => {
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
            {/* <Route path="/admin/users/crear" render={() => {
              if (isAuthenticated) {
                if (isAdministrator) {
                  return <AdminUsersCrete/>
                } else {
                  return <Redirect to='/blog' />
                }
              } else {
                return <Redirect to='/blog' />
              }
            }
            } /> */}
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
          </Layout>
        </Router>
    </div>
  );
})
