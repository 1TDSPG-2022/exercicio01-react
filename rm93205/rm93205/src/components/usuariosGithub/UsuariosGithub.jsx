import React, {useState} from 'react'

export default function UsuariosGithub(){

    const [relogio, setrelogio] = useState(new Date().toLocaleTimeString())
  
    setTimeout(() => {
        setrelogio(new Date().toLocaleTimeString())
    }, 1000);

    return(
        <div>
            <h2>Usuarios Github</h2>
            <h3>HORARIO: {relogio}</h3>
        </div>
    )
}