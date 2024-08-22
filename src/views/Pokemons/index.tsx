import React, {useEffect, useState} from "react";
import {fetchAllPokemons} from '../../services/pokemonService.ts'
import PokemonListComponent from "../../components/PokemonList"

interface PokemonList {
    name: string,
    url: string
}
const Pokemons = () => {
    const [pokemonList, setPokemonList] = useState<PokemonList>()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await fetchAllPokemons()
                setPokemonList(data.results);
            } catch (error) {
                console.error(error)
                setError('Failed to fetch Pokémon details');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!pokemonList) return null;

    return <PokemonListComponent pokemonList={pokemonList}/>

}

export default Pokemons