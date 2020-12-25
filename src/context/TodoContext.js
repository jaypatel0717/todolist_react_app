import React, { createContext, useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    //add dispatch method and give as parameter dispatch to context provider 
    //and access to form

    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localData = localStorage.getItem('todos');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return(
        <TodoContext.Provider value={{ todos,  dispatch }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;