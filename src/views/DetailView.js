import React, { useState, useEffect } from 'react'
import { obtenerProductosById } from '../services/productosServices'

export default function DetailView (props) {
  //console.log("detalle",props)
  const productoId = props.match.params.id
  //console.log("detalle", producutoId)

  const [miProducto, setMiProducto] = useState({})

  const getProduct = async () => {
    let productoObtenido = await obtenerProductosById(productoId)
    console.log('prodobtenido', productoObtenido)
    setMiProducto(productoObtenido)
  }

  useEffect(() => {
    getProduct()
  },[])

  return (
    <div className='mt-3'>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <img src={miProducto.productoImagen} alt='...' className="img-fluid" />
        </div>
        <div className='col-12 col-lg-6'>
          <h1>{miProducto.productoNombre}</h1>
          <h2>Precio: {miProducto.productoPrecio}</h2>
          <h4>Descripcion:</h4>
          <p>{miProducto.productoDescripcion}</p>
          <button className="btn btn-primary btn-block">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}
