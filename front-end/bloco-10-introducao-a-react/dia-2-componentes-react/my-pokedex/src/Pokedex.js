import React, { Component } from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";

class Pokedex extends Component {
  render() {
    return(
      <>
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
      </>
    );
  }
}

export default Pokedex;