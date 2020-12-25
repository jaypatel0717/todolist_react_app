import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoDetail = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    return ( 
        <li onClick={() => dispatch({ type: 'REMOVE_TODO', id:todo.id })}>
            <div className="title">{ todo.title }</div>
            <div className="author">{ todo.author }</div>
        </li>
     );
}
 
export default TodoDetail;