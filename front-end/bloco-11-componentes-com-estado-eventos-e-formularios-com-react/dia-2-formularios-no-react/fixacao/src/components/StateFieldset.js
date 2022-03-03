import React, { Component } from "react";
import PropTypes from 'prop-types';

class StateFieldset extends Component {  
  render() {
    const { estadoFavorito, handleChange } = this.props;
    return(
      <fieldset>
        <legend>Estado e arquivo</legend>
        <label>
          Estado favorito:
            <textarea name="estadoFavorito" value={estadoFavorito} onChange={handleChange} />
            { !estadoFavorito.length ? ' -campo vazio- ' : ' -ok- '}
        </label>
        <input type="file" name="arquivo" />
      </fieldset>
    )
  }
}

StateFieldset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  estadoFavorito: PropTypes.string.isRequired,
};


export default StateFieldset;