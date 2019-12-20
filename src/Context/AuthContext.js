import React, { useState,createContext } from 'react';


export const AuthContext = createContext();


function AuthContextProvider(props,context){
  const {children}=props
  const [state,setState] =useState({
    isAuthenticated: true,
    isAdministrator: true,
    token:'21345678',
    password:'12345678',
    typeUser:'Constructora',
    user:'luis'
  })

  function handleChange(name,valor) {
    event.preventDefault();
    console.log(name,valor)
    if(name==='username')
    setState({...state, user:valor})
    if(name==='password')
    setState({...state, password:valor})
  }
  function handleSubmit(){
    if(state.user==='juan'&&state.password==="12345678"){
      
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Constructora',
        isAdministrator:false,
        isAuthenticated:!state.isAuthenticated
      });
    }
    if(state.user==='jose'&&state.password==="12345678"){
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Proveedor',
        isAdministrator:false,
        isAuthenticated:!state.isAuthenticated
      });
    }
    if(state.user==='luis'&&state.password==="12345678"){
      setState({
        ...state,
        token:Math.random(),
        typeUser:'Proveedor',
        isAdministrator:true,
        isAuthenticated:!state.isAuthenticated
      });
    }
  }
  
    return (
      <AuthContext.Provider value={{...state,handleChange:handleChange,handleSubmit}}>
        {children}
      </AuthContext.Provider>
    );
  
}
 
export default AuthContextProvider;