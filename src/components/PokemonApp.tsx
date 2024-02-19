import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/TypedHooks';
import { getPokemonsV2 } from '../store/slices/pokemon/thunksV2';
import styles from '../css/pokemon.module.css';

export const PokemonApp = () => {

    const dispatch = useAppDispatch();
    const { isLoading, page, pokemons = [] } = useAppSelector((state) => state.pokemonsV2);

    useEffect(() => {
        console.log('si me ejecuto');
        // dispatch(getPokemons());
        dispatch(getPokemonsV2(0));
    }, []);

    console.log(pokemons);

    return (

        <div className={styles.pokeApp}>
            <h1>PokemonApp</h1>
            <span>Loading: {isLoading ? 'True' : 'False'}</span>
            <ul>

                {pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)}

            </ul>
            <button
                className={styles.button}
                disabled={isLoading}
                onClick={() => dispatch(getPokemonsV2(page))}
            >
                Next
            </button>
        </div>
    )
}
