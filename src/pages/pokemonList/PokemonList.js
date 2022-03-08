import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PokemonListComponent from './PokemonList.styled';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import Loader from '../../components/loader/Loader';
import { getPokemonList } from '../../store/actions/pokemonAction';
import pokeImg from '../../assets/poke.png';

const PokemonList = (props) => {
  const [pokeList, setPokeList] = useState([]);
  let timeoutId = null;

  useEffect(() => {
    props.getPokemonList();
  }, []);

  useEffect(() => {
    if (_.isNil(props.error) || !props.error.error) return;
  }, [props.error]);

  const renderPokemonList = useMemo(() => {
    if (_.isNil(pokeList) || _.isEmpty(pokeList)) return;
    const pokemonList = [];
    pokeList.map((item, index) => pokemonList.push(
      <div key={index} className="pokemon-list__cards">
        <PokemonCard data={item} />
      </div>
    ));
    return pokemonList;
  }, [pokeList]);

  useEffect(() => {
    if (_.isNil(props.pokemonList.results) || _.isEmpty(props.pokemonList.results)) return;
    setPokeList(props.pokemonList.results);
  }, [props.pokemonList])

  const searchPokemon = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = pokeList.filter((poke) => {
        return poke.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setPokeList(results);
    } else {
      setPokeList(props.pokemonList.results);
    }
  }

  return (
    <PokemonListComponent>
      {
        (!_.isNil(props.error.error) || props.error.error) ? <div className="error-message">{props.error.message}</div>
          : (
            <>
              <div className="header">
                <img src={pokeImg} alt="pokemon" />
                <span>Generation 1</span>
                <span>151 Pokemon</span>
              </div>
              <div className="search-bar">
                <input className='search-bar__input' placeholder='Search Poke...'  onChange={searchPokemon}
                />
              </div>
              <div className="pokemon-list">
                {props.loader ? <Loader />
                  : renderPokemonList}
              </div>
            </>
          )
      }

    </PokemonListComponent>
  );
};

const mapStateToProps = (state) => ({ pokemonList: state.pokemon.pokemonList, loader: state.pokemon.loader, error: state.pokemon.error });

export default connect(mapStateToProps, { getPokemonList })(PokemonList);
