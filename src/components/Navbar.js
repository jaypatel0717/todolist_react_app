import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const Navbar = () => {
    const { todos } = useContext(TodoContext);
    return ( 
        <div className="navbar">
            <h2>To Do List</h2>
            <p>Currently you have {todos.length} task.</p>
        </div>
     );
}
 
export default Navbar;