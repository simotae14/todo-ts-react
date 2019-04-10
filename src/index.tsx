import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'

// create an alias for the event type
type FormElem = React.FormEvent<HTMLFormElement>

export default function App(): JSX.Element {
    // set the useState hook for the todo input content
    const [todo, setTodoValue] = useState<string>('')

    const handleSubmit = (e: FormElem):void => {
        e.preventDefault();
        setTodoValue('');
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
        </Fragment>
    )
}

const root = document.getElementById('app-root')


ReactDOM.render(<App />, root)