import React, { Component } from 'react'

class PositionFieldset extends Component {
  render() {
    const { posicao, handleChange } = this.props;

    return(
      <fieldset>
        <legend>Posição</legend>
        <select 
        name="posicao" 
        value={posicao} 
        onChange={handleChange}>
          <option value="first">First</option>
          <option value="second">Second</option>
          <option value="third">Third</option>
        </select>
      </fieldset>
    )
  }
}

export default PositionFieldset;