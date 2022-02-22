import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      posicao: '',
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      arquivo: ''
    };
  };
  
  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : (type === 'file' ? this.fileInput.current.files[0].name : target.value);
    console.log(value);
    this.setState({
      [name]: value
    });
  }  

  render() {
    return (
      <>
        <h1>Form</h1>
        <form>
          <fieldset>
            <select name="posicao" defaultValue="first" onChange={this.handleChange}>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
            </select>
          </fieldset>
          <fieldset>
            <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <label>
              Estado favorito:
                <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
            </label>
            <input onChange={this.handleChange} type="file" ref={this.fileInput} name="arquivo" />
          </fieldset>
        </form>
      </>
    )
  }
}

export default Form;