import axios from "axios";
import { useState } from "react";
import { ApiResponse } from "../../intefaces/api-response";
import { Ability, Pokemon } from "../../intefaces/pokemon";
import "./Search.sass";

const Search = (props: {setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>}) => {

  const url = "http://localhost:8080/api";

  const search = (name: string) => {
    const params = {name};
    axios.get<ApiResponse<Pokemon>>(url, {params})
      .then((res) => {
        setError('');
        let pokemon: Pokemon = res.data.data;
        pokemon.abilities = orderAbilitiesByName(pokemon.abilities!);
        props.setPokemon(pokemon);
        setName('');
      })
      .catch(err => {
        setError(err.response.data.message);
      })
  };

  const orderAbilitiesByName = (abilities: Ability[]) => {
    return abilities.sort((a: Ability, b: Ability) => a.ability.name > b.ability.name ? 1 : -1);
  }

  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const submit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    search(name);
  }

  return(
    <>
      <form className="search" onSubmit={ev => submit(ev)}>
        <input
          value={name}
          onChange={value => setName(value.target.value)}
          placeholder="Name"
        />
        <button disabled={name == ''}>Search</button>
      </form>
      {<span className="notFound">{error}</span>}
    </>
  );
}

export default Search;