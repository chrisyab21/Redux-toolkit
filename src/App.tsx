
import { useAppDispatch, useAppSelector } from './store/hooks/TypedHooks'
import { Counter } from './components/Counter'
import { PokemonApp } from './components/PokemonApp'
import { TodoApp } from './components/TodoApp'
import './App.css'

const App = () => {


  return (
    <>
      <div className='container'>
        <Counter />
        <PokemonApp />
        <TodoApp />
      </div>
    </>
  )
}

export default App
