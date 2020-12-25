import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const NewTodoForm = () => {
    
    //use dispatch method form reducer and add data from.
    const { dispatch } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', todo: {
            title, author
        }});
        setTitle('');
        setAuthor('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
                required
                placeholder="enter new task" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" 
                required
                placeholder="to assign" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input type="submit" value="Add New Task"/>
        </form>
     );
}
 
export default NewTodoForm;