import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import _ from 'lodash';
import PokemonDetailComponent from './PokemonDetail.styled';
import PokemonCardDetail from '../../components/pokemonCardDetail/PokemonCardDetail';
import { getPokemonDetailByName } from '../../store/actions/pokemonAction';
import Loader from '../../components/loader/Loader';

const Detail = (props) => {
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (!_.isNil(params) || !_.isEmpty(params)) {
      props.getPokemonDetailByName(params.name);
    }
  }, []);

  useEffect(() => {
    if (_.isNil(props.error) || !props.error.error) return;
    history.push('/');
  }, [props.error]);

  const renderPokemonDetail = useMemo(() => {
    if (_.isEmpty(props.pokemonDetail)) return;

    return <PokemonCardDetail pokemonDetail={props.pokemonDetail} />;
  }, [props.pokemonDetail]);

  return (
    <PokemonDetailComponent>
      {props.loader ? <Loader />
        : renderPokemonDetail}
    </PokemonDetailComponent>
  );
};

const mapStateToProps = (state) => ({ pokemonDetail: state.pokemon.pokemonDetail, loader: state.pokemon.loader, error: state.pokemon.error });

export default connect(mapStateToProps, { getPokemonDetailByName })(Detail);
