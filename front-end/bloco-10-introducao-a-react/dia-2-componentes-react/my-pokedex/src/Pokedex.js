import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return(
      <div className='container'>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    );
  }
}

export default Pokedex;