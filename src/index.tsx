import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

// create an alias for the event type
type FormElem = React.FormEvent<HTMLFormElement>

// create the ITodo interface
interface ITodo {
    text: string
    complete: boolean
}

export default function App(): JSX.Element {
    // set the useState hook for the todo input content
    const [todo, setTodoValue] = useState<string>('')
    // set the useState hook for the todos list
    const [todos, setTodosList] = useState<iTodo[]>([])

    const handleSubmit = (e: FormElem):void => {
        e.preventDefault();
        // addTodo
        addTodo(todo);
        setTodoValue('');
    }

    // function to add a new todo into the todos
    const addTodo = (text: string): void => {
        const newTodos: iTodo[] = [
            ...todos,
            {
                text,
                complete: false
            }
        ];
        setTodosList(newTodos);
    }

    // function that set the complete value of a todo to true
    const completeTodo = (index: number): void => {
        const newTodos: iTodo[] = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodosList(newTodos);
    }

    // function that remove the todo from the todos list
    const removeTodo = (index: number): void => {
        const newTodos: iTodo[] = [...todos];
        newTodos.splice(index, 1);
        setTodosList(newTodos);
    }

    return (
        <Fragment>
            <h1>
                Todo List
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={ e => setTodoValue(e.target.value) } required />
                <button type="submit">Add Todo</button>
            </form>
            <section>
                {
                    todos.map((todo:iTodo, index:number): JSX.Element => (
                        <Fragment key={index}>
                            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>
                                {todo.text}
                            </div>
                            <button type='button' onClick={(): void => completeTodo(index) }>{ todo.complete ? 'Incomplete' : 'Complete' }</button>
                            <button type='button' onClick={(): void => removeTodo(index) }>&times;</button>
                        </Fragment>
                    ))
                }
            </section>
        </Fragment>
    )
}

const root = document.getElementById('app-root')


ReactDOM.render(<App />, root)