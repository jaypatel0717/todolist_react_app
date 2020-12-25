import React from 'react';
import Navbar from './components/Navbar';
import NewTodoForm from './components/TodoFrom';
import TodoList from './components/TodoList';
import TodoContextProvider from './context/TodoContext';


function App() {
  return (
    <div className="App">
        <TodoContextProvider>
          <Navbar/>
          <TodoList/>
          <NewTodoForm/>
        </TodoContextProvider>
    </div>
  );
}

export default App;
