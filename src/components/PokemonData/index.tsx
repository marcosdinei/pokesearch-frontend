import { Ability, Pokemon } from "../../intefaces/pokemon";
import "./PokemonData.sass";

const PokemonData = (props: {pokemon: Pokemon}) => {
  const pokemon = props.pokemon;
  const imgUrl = pokemon.sprites?.other.home.front_default;

  return(
    <>
      {pokemon.id && <section className="pokemon">
        <img src={imgUrl} alt={pokemon.name}/>

        <div>
          <h2>Name:</h2>
          <h3 className="name">{pokemon.name}</h3>
          <h2>Abilities:</h2>
          {pokemon.abilities?.map((ability: Ability) => <h4 className="ability" key={ability.ability.name}>{ability.ability.name}</h4>)}
        </div>
      </section>}
    </>
  )
};

export default PokemonData;