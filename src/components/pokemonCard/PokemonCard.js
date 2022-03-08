import React from 'react';
import { useHistory } from 'react-router-dom';
import PokemonCardComponent from './PokemonCard.styled';

const PokemonCard = (props) => {
  const history = useHistory();

  const goToPokemonDetail = (name) => {
    const path = 'pokemon-detail';
    history.push(`${path}/${name}`);
  };
  return (
    <PokemonCardComponent data-testid='pokemonCardTest' onClick={() => goToPokemonDetail(props.data?.name)}>
      <div className="pokemon-card__image">
        <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.data?.name}.gif`} alt={props.data?.name} />
      </div>
      <div className="pokemon-card__link">
        <span className="pokemon-link__title">{props.data?.name}</span>
      </div>
    </PokemonCardComponent>
  );
};

export default PokemonCard;
