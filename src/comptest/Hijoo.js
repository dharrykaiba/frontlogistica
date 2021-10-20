import React, {useState, useEffect} from 'react'

export default function Hijo() {
    const [nombre, setNombre]= useState('Paloma')
    const [numero,setNumero]= useState(0)

useEffect(() => {
    console.log("Cambio!!!")
},[])

useEffect(() => {
    console.log(numero)
},[numero])

    return (
        <div>
            HOla soy un hijo funcional
            <input type="text" value={nombre} onChange={(ev)=>{setNombre(ev.target.value)}}></input>
            <input type="number" value={numero} onChange={(ev)=>{setNumero(ev.target.value)}}></input>
        </div>
    )
}
