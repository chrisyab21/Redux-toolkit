import {createAsyncThunk } from "@reduxjs/toolkit";
import { endLoadingPokemonV2, startLoadingPokemonV2 } from "./V2PokemonSlice";
import { pokemonApi } from "../../../api/pokemonApi";


export type  PokemonState =  {
    page: number;
    pokemons: any[]; 
    isLoading: boolean;
  }



export const getPokemonsV2 = createAsyncThunk('hola', 
    async(page:number = 0, thunkAPI)=>{
        
        try {
            // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${page * 10}`);
            // const data = await response.json();  
            // console.log(data);
            thunkAPI.dispatch(startLoadingPokemonV2());

            // Simular una demora de 5 segundos
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));

            const response = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);                     
            const Pokemons: PokemonState = {
              page: page + 1,
              pokemons: response.data.results,
              isLoading: false,
            };
           return thunkAPI.fulfillWithValue(Pokemons);
         

        } catch (error) {

            thunkAPI.dispatch(endLoadingPokemonV2());    
            return thunkAPI.rejectWithValue(0);
            
        }           

});

