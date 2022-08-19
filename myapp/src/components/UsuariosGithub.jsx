import React,{ useState } from "react";

export default function UsuariosGithub() {

    const [relogio, setRelogio] = useState(new Date().toLocaleDateString())

    setTimeout(()  => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div>
            <h2>Uusários do Github</h2>
            <h3>Horário : {relogio}</h3>
        </div>
    )
}