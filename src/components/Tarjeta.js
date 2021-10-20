import React from 'react'
import {Link} from 'react-router-dom';

export default function Tarjeta ({producto}) {
  //console.log("tarjeta",producto)
  return (
    <div className='col-12 col-lg-6 col-xl-3'>
      <div className='card'>
        <img src={producto.productoImagen} alt="" className="card-img-top"/>
        <div className='card-bpdy'>
          <h3 className='card-title'>{producto.productoNombre}</h3>
          <p className='card-text'>Precio: {producto.productoPrecio}</p>
          <Link className ="btn btn-primary btm-sm" to={`/detalle/${producto.productoId}`}>Detalle</Link>
        </div>
      </div>
    </div>
  )
}
