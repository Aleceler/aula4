import {createBrowserRouter} from 'react-router-dom';
import Pokemons from "./views/Pokemons";
import Pokemon from "./views/Pokemon";

const RoutesConfig =  createBrowserRouter([
    {
        path: "/",
        element: <Pokemons />,
    },
    {
        path: "/pokemon/:id",
        element: <Pokemon />
    }
]);


export default RoutesConfig