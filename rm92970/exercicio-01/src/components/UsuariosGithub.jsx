import React, {useState} from "react";

export default function UsuariosGithub() {

    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())

    }, 1000);

    return (
        <div>
            <h2>Usuário do Github</h2>
            <h2>{relogio}</h2>
        </div>
    )
}