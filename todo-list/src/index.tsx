import React, { useState } from 'react';
import ReactDOM from 'react-dom';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo{
    text: string;
    complete: boolean;
}

interface ITodo2 extends ITodo{
    tags: string[];
}

export default function App(): JSX.Element {
    let [value, setValue] = useState<string>('');
    let [todos, setTodos] = useState<ITodo[]>([]);

    let handleSubmit = (e: FormElement):void => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    let addTodo = (text: string):void => {
        let newTodos: ITodo[] = [...todos, { text, complete: false }];
        setTodos(newTodos);
    }

    let completeTodo = (index: number):void => {
        let newTodos: ITodo[] = [...todos];
        newTodos[index].complete = !newTodos[index].complete;
        setTodos(newTodos);
    } 

    let removeTodo = (index: number): void => {
        let newTodos: ITodo[] = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    return (
        <React.Fragment>
           <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
               <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
               <button type="submit">Add Todo</button>
           </form>

           <section>
            {todos.map((todo: ITodo, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <div style={{ textDecoration: todo.complete? 'line-through': '' }}>{todo.text}</div>
                        <button type="button" onClick={() => completeTodo(index)}>{todo.complete? 'Incomplete': 'Complete'}{' '}</button>
                        <button type="button" onClick={() => removeTodo(index)}>&times;</button>
                    </React.Fragment>
                );
            })}
           </section>
        </React.Fragment>
    )
}

let root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
