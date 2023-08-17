import React from 'react'
import '../styles/Card.css'

function Card({usuario}) {
  
  return (
    
    <div className='card'>
      <p>Nombre: {usuario.nombre}</p>
      <p>Apellido: {usuario.apellido}</p>
      <p>Documento: {usuario.documento}</p>
      <p>Ciudad: {usuario.ciudad}</p>
      <p>Pais: {usuario.pais}</p>
      
      
    </div>
  )

  }
export default Card