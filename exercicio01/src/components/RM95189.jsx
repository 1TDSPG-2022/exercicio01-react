import React from 'react';
import { useState } from 'react';


export default function RM95189(){
    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())

    setTimeout(() =>{
        setRelogio(new Date().toLocaleTimeString())
    }, 1000) //Aqui é onde vc coloca o tempo em ms = milissegundos

    return(
        <div>
            <h2>Usuário do GitHub</h2>
            <h3>HORÁRIO: {relogio}</h3>
        </div>
    )
}


