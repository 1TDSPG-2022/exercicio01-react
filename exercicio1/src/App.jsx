import React, {useState, useEffect}from "react";
import UsuariosGitHub from "./componente/UsuariosGitHub/UsuarioGitGub";

export default function App(){

    const [relogio, setRelogio] = useState(new Date().toLocaleDateString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000);

    // useEffect(() => {
    //   first
    
    //   return () => {
    //   second
    //   }
    // }, [third])
    

return(
    <div>  
        <h1>Exercicio de State e Use-Effects</h1>
        <UsuariosGitHub/>
        <p>Horario : {relogio}</p>
    </div>
)}