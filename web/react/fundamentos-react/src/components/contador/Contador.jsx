import './Contador.css';
import React from 'react';
import Display from './Display';
import Passo from './Passo';
import Botoes from './Botoes'

export default class Contador extends React.Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  mudarPasso = (novoPasso) => this.setState({ passo: novoPasso });

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Passo passo={this.state.passo} onPassoChange={this.mudarPasso}></Passo>
        <Display valor={this.state.valor}></Display>
        <Botoes onInc={this.inc} onDec={this.dec}></Botoes>
      </div>
    );
  }
}
