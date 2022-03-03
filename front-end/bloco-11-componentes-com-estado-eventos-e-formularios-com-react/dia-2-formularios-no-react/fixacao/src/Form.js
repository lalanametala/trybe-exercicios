import React, { Component } from 'react'
import AgeFieldset from './components/AgeFieldset';
import PositionFieldset from './components/PositionFieldset';
import StateFieldset from './components/StateFieldset';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      posicao: '',
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      formularioComErros: true,
    };
  };
  
  handleError = () => {
    const { estadoFavorito, idade } = this.state;

    const errorCases = [!idade.length, !estadoFavorito.length];

    this.setState({
      formularioComErros: errorCases.some((error) => error)
    })
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value
    }, () => { this.handleError(); });
  }  

  render() {
    const { posicao, estadoFavorito, idade, vaiComparecer, formularioComErros } = this.state;
    return (
      <>
        <h1>Form</h1>
        <form>
          <PositionFieldset 
            posicao={posicao} 
            handleChange={this.handleChange}
          /> 
          <AgeFieldset
            idade={idade} 
            vaiComparecer={vaiComparecer} 
            handleChange={this.handleChange}
          />
          <StateFieldset
            estadoFavorito={estadoFavorito} 
            handleChange={this.handleChange}
          />
        </form>
        { formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </>
    )
  }
}

export default Form;