import {
  GET_POKEMON_LIST, GET_POKEMON_DETAIL_BY_NAME, LOADING, ERROR,
} from '../types';

const initialState = {
  pokemonList: [],
  pokemonDetail: [],
  error: {},
  loader: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loader: true,
        error: {},
      };
    }
    case GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        loader: false,
        error: {},
      };
    case GET_POKEMON_DETAIL_BY_NAME:
      return {
        ...state,
        pokemonDetail: action.payload,
        loader: false,
        error: {},
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loader: false,
      };
    default: return state;
  }
}
