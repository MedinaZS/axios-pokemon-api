import React, { useState } from 'react';
import axios from 'axios';

const List = () => {

	const [pokemonList, setPokemonList] = useState([]);

	const getPokemons = () => {
		axios.get("https://pokeapi.co/api/v2/pokemon/?limit=1154")
			.then(response => setPokemonList(response.data.results));
	}


	return (
		<div className='mt-5'>
			<button className='btn btn-secondary px-4' onClick={() => getPokemons()}>Fetch Pokemon</button>
			<div className='pokemon-list mt-4 mx-auto'>
				{pokemonList.length > 0 && pokemonList.map((pokemon, index) => (
					<ul key={index}>
						<li >{pokemon.name}</li>
					</ul>
				))}
			</div>

		</div>
	)
}

export default List