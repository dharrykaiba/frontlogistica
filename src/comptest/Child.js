import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props){
        super(props);
        console.log("1. yo soy el constructor")
        console.log(props)
        this.state={
            nombre:props.miNombre
        }
    }

    mostrarNombre(){
        alert(`El nombre es: ${this.state.nombre}`)
    }

    componentDidMount(){
        console.log("2. yo soy el mount")
        console.log(`2.1 estado inicial ${this.state.nombre}`)
    }
    componentDidUpdate(){
        console.log("3. yo actualizando")
        console.log(`3.1 estado actualizado ${this.state.nombre}`)
    }

    render() {
        return (
            <div>
                <h2>Yo soy un componente Hijo</h2>
                <input type="text" value={this.state.nombre} onChange={(ev)=>{this.setState({nombre:ev.target.value})}}/>
                <button onClick={()=>{this.mostrarNombre()}}>Mostrar Nombre</button>
                <button onClick={()=>{this.props.LaFuncion()}}>Alert</button>
            </div>
        )
    }
}
