import React from 'react';
import {
  Redirect, Route, Switch, BrowserRouter,
} from 'react-router-dom';
import PokemonList from './pages/pokemonList/PokemonList';
import PokemonDetail from './pages/pokemonDetail/PokemonDetail';
import './assets/css/core.css';
import 'antd/dist/antd.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon-detail/:name" component={PokemonDetail} />
      <Route path="*" render={() => <Redirect to={PokemonList} />} />
    </Switch>
  </BrowserRouter>
);

export default App;
