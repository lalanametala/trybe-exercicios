import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    return(
      <div className='pokemon'>
        <div className='info'>
          <p>{this.props.pokemon.name}</p>
          <p>{this.props.pokemon.type}</p>
          <p>Average weight: <span>{this.props.pokemon.averageWeight.value}</span> <span>{this.props.pokemon.averageWeight.measurementUnit}</span></p>
        </div>
        <img src={this.props.pokemon.image} alt=''></img>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired
    }).isRequired,  
    image: PropTypes.string.isRequired,
  })  
}

export default Pokemon;