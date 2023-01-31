import React from 'react';
import './App.css';
import { useSelector, } from "react-redux";
import TodoForm from './components/ToDoForm';
import TodoList from './components/TodoList';

function App() {
  const todos = useSelector((state : any) => state.todos)
  return (
    
    <div className="container max-w-2xl ml-auto mr-auto  ">
      <TodoForm/>
      <TodoList todos={todos} />
     
    </div>
    
  );
}

export default App;
