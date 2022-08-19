import React, {useState} from "react";

function UsuariosGithub() {
    const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())
    
setTimeout(() => {
    setRelogio(new Date().toLocaleTimeString())
}, 1000);

    return (
      <div>
        <h1>Eu sou o usuario</h1>
        <h3>Horário : {relogio}</h3>
      </div>
    );
  }
  
  export default UsuariosGithub;
  