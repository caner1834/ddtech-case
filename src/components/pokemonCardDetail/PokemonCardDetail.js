import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import PokemonCardDetailComponent from './PokemonCardDetail.styled';

const PokemonCardDetail = (props) => {
  const history = useHistory();

  const closeDetail = () => {
    history.push('/');
  };

  return (
    <PokemonCardDetailComponent>
      <div className="pokemon-card-header">
        <img className="pokemon-card-header__img" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${props.pokemonDetail?.name}.gif`} alt="" />
        <span className="pokemon-card-header__name">{props.pokemonDetail?.name}</span>
      </div>
      <div className="pokemon-card-info">
        <div className="pokemon-card-info__item">
          <span>Abilities:</span>
          <div className="pokemon-card-info__item__sub">
            {props.pokemonDetail.types.map((types, i) => (
              <span key={i} className="pokemon-card-info__item">
                {' '}
                -
                {types.type.name}
              </span>
            ))}
          </div>
        </div>
        <span className="pokemon-card-info__item">
          ID:
          {props.pokemonDetail?.id}
        </span>
        <span className="pokemon-card-info__item">
          Height:
          {props.pokemonDetail?.height}
        </span>
        <div className="pokemon-card-info__item">
          <span>Abilities:</span>
          <div className="pokemon-card-info__item__sub">
            {props.pokemonDetail.abilities.map((abilities, i) => (
              <span key={i} className="pokemon-card-info__item__sub__item">
                {' '}
                -
                {abilities.ability.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="close-icon" onClick={closeDetail}>
        <AiOutlineClose />
      </div>
    </PokemonCardDetailComponent>
  );
};

export default PokemonCardDetail;
