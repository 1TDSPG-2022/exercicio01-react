import React, {useState}  from 'react'

export default function Usuarios() {

    const [relogio, setRelogio] = useState(new Date().toLocaleDateString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000);

    return (
        <div>
            <h1>Usuários Github</h1>
            <h3>Horário: {relogio} AM</h3>
        </div>
    )
}