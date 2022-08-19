import React, {useState} from 'react'

export default function UsuariosGithub() {

    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000);

    return(
        <div>
            <h2>Usuarios do Github</h2>
            <h3>Horário: {relogio}</h3>
        </div>
    )
}