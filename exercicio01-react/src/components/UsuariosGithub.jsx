import React, {useState} from 'react';

// import { Container } from './styles';

export default function UsuariosGithub() {
    const [relogio, setRelogio] = useState(new Date().toLocaleDateString()) //dentro do parenteses encontra-se o valor

    setTimeout(() => {//o que vai se executar
        setRelogio(new Date().toLocaleTimeString())
    }, 1000);
    //tempo em ms

  return (
    <div>
        <h1>Usuarios do Github</h1>
        <h3>HORARIO : {relogio} </h3>
    </div>
  )
}

