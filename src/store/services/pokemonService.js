import http from '../../http-common';

const getPokemonDetailByName = (name) => http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

const getPokemonList = () => http.get('https://pokeapi.co/api/v2/pokemon?limit=100');

const ArtistService = {
  getPokemonDetailByName,
  getPokemonList,
};

export default ArtistService;
