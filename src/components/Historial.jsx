import React, { Component } from "react";

export default class Historial extends Component {
  render() {
    return (
      <div className="historial">
        <h3>Selección anterior:{this.props.opcionAnterior}</h3>
        <h3>Historial de opciones elegidas:</h3>
        <ul>
          {this.props.historial}
        </ul>
      </div>
    );
  }
}
