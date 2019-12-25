import React, { useState,createContext } from 'react';
import { toast } from 'react-toastify';


export const AuthContext = createContext();


function AuthContextProvider(props,context){
  const {children}=props
  const [state,setState] =useState({
    isAuthenticated: false,
    isAdministrator: false,
    isMaster: false,
    token:'',
    password:'127as127',
    typeUser:'',
    user:'naite@mail.com'
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

    function handleSubmit(event, signupUser) {
    event.preventDefault();    
    
    signupUser().then(async ({ data }) => {
        const {login}=data
        console.log(login)
        console.log(data)
        console.log(data)
        setState({
          ...state,
          token:login.token,
          isAuthenticated:login
        });
        
        
        //localStorage.setItem('token', data.signupUser.token);
        //await this.props.refetch();
        // clearState();
        // this.props.history.push('/Bldgs');
        //  history.push('/')
    }).catch(error=>{
      try {
        toast.error(error.graphQLErrors[0].message)  
      } catch (error) {
        console.log(error)
      }
      

    }
    )
    
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
      <AuthContext.Provider value={{...state,handleChange:handleChange,handleSubmit,logout}}>
        {children}
      </AuthContext.Provider>
    );
  
}
 
export default AuthContextProvider;