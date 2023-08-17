import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [usuario, setUsuario] = useState({
    nombre:'',
    apellido:'',
    documento:'',
    ciudad:'',
    pais: ''
  })
  
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const validarNombre = () => {
    
    if(usuario.nombre.trim().length > 3){
      
      return true
    }else{
      setMensaje("Ingrese el nombre correcto")
      return false
      
    }
  }

  const validarApellido = () => {
    if(usuario.apellido.trim().length >= 6){
      return true
    }else{
      setMensaje("Ingrese el apellido correcto")
      return false
      
    }
  }

 
  const formHandler = (e) => {
    e.preventDefault()

    if(validarNombre() && validarApellido()){
      setShow(true)
      setError(false)
    }else{
      setShow(false)
      setError(true)
    }

 
  }

  return (
    
    <div className='App'>
      <h1>Ingrese los datos</h1>
      <form onSubmit={formHandler} className='form'>
        <input 
        type="text" 
        placeholder='Nombre'
        value={usuario.nombre}
        onChange={(e)=> setUsuario({...usuario, nombre:e.target.value})}
        />
        <input 
        type="text" 
        placeholder='Apellido'
        value={usuario.apellido}
        onChange={(e)=> setUsuario({...usuario, apellido:e.target.value})}
        />
        <input 
        type="text" 
        placeholder='Documento'
        value={usuario.documento}
        onChange={(e)=> setUsuario({...usuario, documento:e.target.value})}
        />
        

        
        <input 
        type="text" 
        placeholder='Ciudad'
        value={usuario.ciudad}
        onChange={(e)=> setUsuario({...usuario, ciudad:e.target.value})}
        />
        <input 
        type="text" 
        placeholder='Pais'
        value={usuario.pais}
        onChange={(e)=> setUsuario({...usuario, pais:e.target.value})}
        />

        <button type='submit' className='button'>Enviar Datos</button>

      </form>

      
      
      


      {show && <Card usuario={usuario}/>}
      {error && <h4 style={{color: 'red'}}>{mensaje}</h4>}
      
    </div>  
    
  )
}

export default App
