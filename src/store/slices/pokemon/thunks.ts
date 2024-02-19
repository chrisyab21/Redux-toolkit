
import { AppDispatch, RootState } from "../../store";
import { startLoadingPokemon } from "./PokemonSlice";

export const getPokemons = (page= 0 ) => {

    return async (dispatch:AppDispatch) => {

        dispatch(startLoadingPokemon());

    }

}