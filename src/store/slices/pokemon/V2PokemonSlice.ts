import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getPokemonsV2 } from './thunksV2';


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

export const PokemonSliceV2 = createSlice({
  name: 'PokemonV2',
  initialState: initialState,
  reducers: {
    startLoadingPokemonV2: (state) => {

        state.isLoading = true;
      
    },
    endLoadingPokemonV2: (state) => {

      state.isLoading = false;
    
  },
    setPokemons: (state, action: PayloadAction<PokemonState>) => {

      console.log(action);
     

    },
  },
  extraReducers: (builder)=>{
    builder.addCase( getPokemonsV2.fulfilled, ( state, action ) => {
      state.isLoading = false;
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons;    
       
    });
    builder.addCase( getPokemonsV2.rejected, ( state, action ) => {
      console.log('Recibido')
      state.pokemons = [{name: 'Bullbasor'}, {name: 'MewTou'}];
     
    });
  }
})

// Action creators are generated for each case reducer function
export const {setPokemons, startLoadingPokemonV2, endLoadingPokemonV2 } = PokemonSliceV2.actions
export default PokemonSliceV2.reducer;