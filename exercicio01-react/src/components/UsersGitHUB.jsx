import React, { useState } from 'react'

export default function UsersGitHUB(){

    const [relogio, setRelogio] = useState(new Date().toLocaleDateString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleTimeString())
    }, 1000); 
    
    return (
    <div>
        <h2>Usuario do GitHub</h2>
        <h3>HORÁRIO: {relogio}</h3>
    </div>
  )
}

