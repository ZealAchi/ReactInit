import jwt from "jsonwebtoken";
import React, { useState, createContext } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

function AuthContextProvider(props, context) {
  const { children } = props;
  const [state, setState] = useState({
    isAuthenticated: false,
    isAdmin: false,
    isMaster: false,
    name: "",
    lastName: "",
    token: "",
    password: "",
    typeUser: "",
    user: "",
  });

  function handleChange(name, valor) {
    event.preventDefault();
    if (name === "username") setState({ ...state, user: valor });
    if (name === "password") setState({ ...state, password: valor });
  }
  function logout() {
    clearState();
  }
  function clearState() {
    setState({ ...state, user: '' });
    setState({ ...state, password: '' });
  }

  function handleSubmit(event, signupUser,history) {
    event.preventDefault();

    signupUser()
      .then(async ({ data }) => {
        const { login } = data;
        const decoded = jwt.verify(login.token, "10Naaaite10");
        localStorage.setItem("token", login.token);
        console.log(decoded);
        setState({
          ...state,
          token: login.token,
          isAuthenticated: true,
          isAdmin: decoded.isAdmin,
          typeUser: decoded.role,
          name: decoded.role,
          lastName: decoded.role,
          user:'',
          password:''
        });

        // await this.props.refetch();
        
        // this.props.history.push('/');

        //localStorage.setItem('token', data.signupUser.token);
        //await this.props.refetch();
        // clearState();
        // this.props.history.push('/Bldgs');
         history.push('/')
      })
      .catch(error => {
        try {
          
          if(error.graphQLErrors[0].message){
            toast.error(error.graphQLErrors[0].message);
          }else{
            console.log(error)
          }
        } catch (error) {
          console.log(error);
        }
      });
  }

  // function handleSubmit(){
  //   if(state.user==='juan'&&state.password==="12345678"){
  //     toast.success("Bienvenido " + state.user + ".");
  //     setState({
  //       ...state,
  //       token:Math.random(),
  //       typeUser:'Constructora',
  //       isAdministrator:false,
  //       isAuthenticated:!state.isAuthenticated
  //     });
  //   }else
  //   if(state.user==='jose'&&state.password==="12345678"){
  //     toast.success("Bienvenido " + state.user + ".");
  //     setState({
  //       ...state,
  //       token:Math.random(),
  //       typeUser:'Proveedor',
  //       isAdministrator:false,
  //       isAuthenticated:!state.isAuthenticated
  //     });
  //   }else
  //   if(state.user==='luis'&&state.password==="12345678"){
  //     toast.success("Bienvenido " + state.user + ".");
  //     setState({
  //       ...state,
  //       token:Math.random(),
  //       typeUser:'Proveedor',
  //       isAdministrator:true,
  //       isAuthenticated:!state.isAuthenticated
  //     });
  //   }else{
  //     toast.error("Algo salio mal.");
  //   }
  // }

  return (
    <AuthContext.Provider
      value={{ ...state, handleChange: handleChange, handleSubmit, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
