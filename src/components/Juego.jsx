import React, { Component } from 'react';
import data from "./data.json";
import Opciones from "./Opciones";
import Historial from "./Historial";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      opcionAnterior: "",
      historial: []
    };

    this.clickOpcion = this.clickOpcion.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.contador !== this.state.contador) {
      this.state.historial.push(this.state.opcionAnterior);
    }
  };

  clickOpcion=(evento) => {
    const opcion = evento.target.id;

    if(this.state.contador >= 7) {
      alert("¡Fin del juego! Gracias por jugar :)");
    } else if(opcion === "A" && this.state.opcionPrevia !== "A") {
      this.setState({
        opcionPrevia: opcion,
        contador: this.state.contador + 1,
      })
    } else if(opcion === "A" && this.state.opcionPrevia === "A") {
      this.setState({
        opcionPrevia: opcion,
        contador: this.state.contador + 2,
      })
    } else if(opcion === "B" && this.state.opcionPrevia === "A") {
      this.setState({
        opcionPrevia: opcion,
        contador: this.state.contador + 3,
      })
    } else if(opcion === "B") {
      this.setState({
        opcionPrevia: opcion,
        contador: this.state.contador + 2,
      })
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia"> {data[this.state.contador].historia} </h1>
        <Opciones clickOpcion={this.clickOpcion}
        opcionA={data[this.state.contador].opciones.a}
        opcionB={data[this.state.contador].opciones.b}/>
        <Historial opcionAnterior={this.state.opcionAnterior}
        historial={this.state.historial.map((opcion, index) => <li key={index}>{opcion}</li>,
        data[this.state.contador].opcion)} />
      </div>
    );
  }
}