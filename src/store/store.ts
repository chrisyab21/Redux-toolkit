import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/CounterSlice'
import { PokemonSliceV2 } from './slices/pokemon/V2PokemonSlice'
import { todosApi } from './apis/todosApi'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemonsV2: PokemonSliceV2.reducer,

    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch