import React from "react"
import {Link} from "react-router-dom";

interface PokemonList {
    name: string,
    url: string
}
const PokemonListComponent: React.FC<PokemonList> = ({pokemonList}) => {
    return pokemonList.map((item, index) => {
        const pokeID = item.url.split("/")
        return <div key={index}>
            <h1>Nome: {item.name}</h1>
            <Link to={`/pokemon/${pokeID[pokeID.length -2]}`}>{item.url}</Link>
        </div>
    })
}

export default PokemonListComponent