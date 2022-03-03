import React, { Component } from "react";

class AgeFieldset extends Component {
  render() {
    const { idade, vaiComparecer, handleChange } = this.props;
    return(
      <fieldset>
        <legend>Idade e vai?</legend>
        <input
          type="number"
          name="idade"
          value={idade}
          onChange={handleChange}
        />
        { !idade.length ? ' -idade inválida- ' : ' -ok- '}
        <input
          type="checkbox"
          name="vaiComparecer"
          checked={vaiComparecer}
          onChange={handleChange}
        />
      </fieldset>
    )
  }
}

export default AgeFieldset;