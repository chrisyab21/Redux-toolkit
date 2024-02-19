import { useState } from "react";
import { useGetTodoByIdQuery, useGetTodosQuery } from "../store/apis/todosApi"
import styles from '../css/todo.module.css'



export const TodoApp = () => {

    const [state, setstate] = useState<number>(1);
    // const {data: todos = [], isLoading}= useGetTodosQuery(0);
    const { data: todo, isLoading } = useGetTodoByIdQuery(state);

    console.log(todo);

    return (
        <div className={styles.todoApp}>
            <h1>Todos - RTK Query</h1>
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
            <pre>{JSON.stringify(todo)}</pre>

            <div className={styles.buttonsContainer}>
                <button
                    onClick={() => setstate((state) => {
                        if (state === 1) return state;
                        return state - 1;
                    })}

                >
                    Prev Todo
                </button>

                <button
                    onClick={() => setstate((state) => state + 1)}
                >
                    Next Todo
                </button>

            </div>
        </div>
    )
}
