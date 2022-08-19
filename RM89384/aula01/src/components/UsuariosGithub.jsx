import React, {useState} from 'react';

export default function UsuariosGithub() {

    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())

    setTimeout(() => {
        setRelogio(new Date().toLocaleDateString() +" - "+ new Date().toLocaleTimeString()) //<- O que vai ser executado
    }, 1000); //<- Tempo em ms = milissegundos

    return (
      <div>
          <h2>Usuários do Github</h2>
          <h3>Horário: {relogio}</h3>
      </div>
    )
  }