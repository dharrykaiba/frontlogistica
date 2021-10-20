import React from 'react'

export default function Hijo1 (props) {
  console.log(props)

  let alumnos = [
    { edad: 20, nombre: 'Diana' },
    { edad: 29, nombre: 'Dharry' },
    { edad: 35, nombre: 'Kruyer' }
  ]
  return (
    <div>
      <h4>Yo soy hijo 1</h4>
      <p>{props.miNumero}</p>

      {props.miNumero >= 1000 ? (
        <div> el numero es muy grande</div>
      ) : (
        <div>El numero es pequeño </div>
      )}

      {alumnos.map((elemento,i) => {
        return (
          <div key={i}>
            <h4>{elemento.nombre}</h4>
            <p>Edad: {elemento.edad}</p>
          </div>
        )
      })}
    </div>
  )
}
