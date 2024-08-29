import {api} from "../api"

export const fetchAllPokemons = async (limit?: number) => {
    try {
        const response = await api.get(`/pokemon/?limit=${limit | "151"}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Pokemons:', error);
        throw error;
    }
};

export const fetchPokemonDetails = async (pokemonID: string) => {
    try {
        const response =  await api.get(`/pokemon/${pokemonID}`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch Pokemon details:', error);
        throw error;
    }
};

