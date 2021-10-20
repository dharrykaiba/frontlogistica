import React from 'react';
import Child from './comptest/Child';
import Hijo from './components/Hijo'

export default function App() {
  let miFuncion = () => alert("funcionnn!!");
  let edad = 20;

  return (
    <div>
      HOl!!!!
      <hr/>
      <Child miNombre="Daniel" miEdad={edad} LaFuncion={miFuncion}></Child>
      <Hijo></Hijo>
    </div>
  )
}
