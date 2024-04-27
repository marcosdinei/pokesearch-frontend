import './App.sass';
import PokemonData from './components/PokemonData';
import Search from './components/Search';
import { useState } from 'react';

function App() {

  const [pokemon, setPokemon] = useState({});


  return (
    <div className="App">
      <h1>PokéSearch</h1>
      <Search setPokemon={setPokemon}/>
      <PokemonData pokemon={pokemon}/>
    </div>
  );
}

export default App;
