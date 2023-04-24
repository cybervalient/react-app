import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/producto'
const CreateProducto = () => {
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState(0)
  const [stock, setStock] = useState(0)
  const navigate = useNavigate()
  const store = async (e)=>{
    e.preventDefault()
    await axios.post(endpoint, {descripcion: descripcion, precio: precio, stock: stock})
    navigate('/')
  }

  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={store}>
       <div>
         <label className='form-label'>Descripcion</label>
          <input
           value={descripcion}
           onChange = {(e)=>setDescripcion(e.target.value)}
           type = "text"
           className='form-control' />
       </div>
       <div>
         <label className='form-label'>Precio</label>
          <input
           value={precio}
           onChange = {(e)=>setPrecio(e.target.value)}
           type = "text"
           className='form-control' />
       </div>
       <div>
         <label className='form-label'>Stock</label>
          <input
           value={stock}
           onChange = {(e)=>setStock(e.target.value)}
           type = "text"
           className='form-control' />
       </div>
       <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateProducto