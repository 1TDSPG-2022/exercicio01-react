import React from "react";
import { useState } from "react";
import UsuariosGitHub from "./UsuariosGithub";

export default function App(){
    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000);
    return(
        <div>
            <h1>ola</h1>
            <UsuariosGitHub/>
            <h3>Horario: {relogio}</h3>
        </div>
    )
}