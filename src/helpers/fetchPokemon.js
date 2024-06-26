import axios from 'axios';
import { URL_BASE_POKEMON } from '@/constants/urlConstants';

export const getPokemonPerPage = async (start = 0, end = 150) => {
    try {
        const limit = end - start;
        const offset = start;

        const { data } = await axios.get(URL_BASE_POKEMON, {
            params: {
                limit,
                offset,
            },
        });

        const pokemonDetailsPromises = data.results.map(async (pokemon) => {
            const details = await axios.get(pokemon.url);
            return {
                name: pokemon.name,
                image: details.data.sprites.other.dream_world.front_default,
                // imagen en hd svg
            };
        });

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);
        return pokemonDetails;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        return [];
    }
};
