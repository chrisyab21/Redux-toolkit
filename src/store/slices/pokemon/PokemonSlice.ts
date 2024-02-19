import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type  PokemonState =  {
  page: number;
  pokemons: any[]; 
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const PokemonSlice = createSlice({
  name: 'Pokemon',
  initialState: initialState,
  reducers: {
    startLoadingPokemon: (state) => {

        state.isLoading = true;
      
    },
    setPokemons: (state, action: PayloadAction<number>) => {

      console.log(action);

    },
  },
})

// Action creators are generated for each case reducer function
export const {setPokemons, startLoadingPokemon } = PokemonSlice.actions
export default PokemonSlice.reducer;