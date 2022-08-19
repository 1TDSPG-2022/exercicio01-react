import React from 'react'
import {useState, useEffect} from 'react'

export default function UsuariosGithub(props) {

  const [relogio, setRelogio] = useState(new Date().toLocaleTimeString())
  
  setTimeout(() => {
    setRelogio(new Date().toLocaleTimeString())
  }, 1000);
  

  return (
    <div>
      <h2>Usuarios do Github</h2>
      <p>{relogio}</p>
    </div>
  )
}
