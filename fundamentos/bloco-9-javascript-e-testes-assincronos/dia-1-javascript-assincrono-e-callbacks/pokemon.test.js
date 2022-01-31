// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./pokemon");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, message) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedMessage = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(error, message) {
      expect(message).toBe(expectedMessage);
      done();
    }

    getPokemonDetails((currentPokemon) => currentPokemon.name === 'Charmander', callback);
  });
});