import React, { useState } from 'react'

export default function Usuario_Github(){
    
const [relogio, setRelogio] = useState (new Date().toLocaleDateString())

setTimeout(() => {
    setRelogio(new Date().toLocaleTimeString())
}, 1000);


    return(
        <div>
            <h2>Usuario do Github</h2>
            <h3>Agora são: {relogio}</h3>
        </div>
    )
}