import {
  GET_POKEMON_LIST, GET_POKEMON_DETAIL_BY_NAME, ERROR, LOADING,
} from '../types';
import PokemonService from '../services/pokemonService';

export const getPokemonList = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await PokemonService.getPokemonList();

    dispatch({
      type: GET_POKEMON_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: { e, error: true, message: 'Bir hata oluştu..' },
    });
  }
};

export const getPokemonDetailByName = (name) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await PokemonService.getPokemonDetailByName(name);

    dispatch({
      type: GET_POKEMON_DETAIL_BY_NAME,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ERROR,
      payload: { e, error: true, message: 'Bir hata oluştu..' },
    });
  }
};
