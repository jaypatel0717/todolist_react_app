import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoDetail from './TodoDetail';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return todos.length ? ( 
        <div className="todo-list">
            <ul>
                { todos.map(todo => {
                    return(
                        <TodoDetail todo={todo} key={todo.id}/>
                    );
                })}
            </ul>
        </div>
     ) : (
         <div className="empty"> No task to do :)</div>
     )
}
 
export default TodoList;