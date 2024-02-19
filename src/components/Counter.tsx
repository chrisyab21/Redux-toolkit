import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { increment, decrement, IncrementByAmount } from '../store/slices/counter/CounterSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks/TypedHooks'
import '../css/counter.css'

export const Counter = () => {

    const { counter } = useAppSelector((state) => state.counter);

    const dispatch = useAppDispatch();

    return (
        <div className='counterApp'>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1> count is {counter}</h1>
            <div className="buttonsContainer">
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button onClick={() => dispatch(IncrementByAmount(2))}>
                    IncrementBy 2
                </button>
            </div>
        </div>
    )
}
