import React, { useState,createContext } from 'react';
import { toast } from 'react-toastify';


export const AuthContext = createContext();


function AuthContextProvider(props,context){
  const {children}=props
  const [state,setState] =useState({
    isAuthenticated: true,
    isAdministrator: true,
    isMaster: true,
    token:'21345678',
    password:'12345678',
    typeUser:'Proveedor',
    user:'luis'
  })

  function handleChange(name,valor) {
    event.preventDefault();
    if(name==='username')
    setState({...state, user:valor})
    if(name==='password')
    setState({...state, password:valor})
  }
  function logout(name,valor) {
    setState({
      ...state,
      token:"",
      typeUser:'',
      isAdministrator:false,
      isAuthenticated:false
    });
  }
  function handleSubmit(){
    if(state.user==='juan'&&state.password==="12345678"){
      toast.success("Bienvenido " + state.user + ".");
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Constructora',
        isAdministrator:false,
        isAuthenticated:!state.isAuthenticated
      });
    }else
    if(state.user==='jose'&&state.password==="12345678"){
      toast.success("Bienvenido " + state.user + ".");
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Proveedor',
        isAdministrator:false,
        isAuthenticated:!state.isAuthenticated
      });
    }else
    if(state.user==='luis'&&state.password==="12345678"){
      toast.success("Bienvenido " + state.user + ".");
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Proveedor',
        isAdministrator:true,
        isAuthenticated:!state.isAuthenticated
      });
    }else{
      toast.error("Algo salio mal.");

    }
  }
  
    return (
      <AuthContext.Provider value={{...state,handleChange:handleChange,handleSubmit,logout}}>
        {children}
      </AuthContext.Provider>
    );
  
}
 
export default AuthContextProvider;