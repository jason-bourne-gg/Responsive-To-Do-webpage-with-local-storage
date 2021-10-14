import React, { useState, useEffect } from "react";
import './App.css';

//importing components
import Form from "./components/Form";
import Todolist from './components/todolist';

const App = () => { 

  //state stuff
  const [inputText, setInputText] = useState ( " " );
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ("all");
  const [filteredTodos, setFilteredTodos] = useState ([]);
  //runonce
  useEffect( () => {
      getLocalTodos ();
  }, []);  
  //useEfefct

  useEffect(() => {
   //console.log('hey');
      filterHandler ();
      saveLocalTodos();
  }, [todos, status]);
  
   //functions  &events
  const filterHandler = () => {
    switch (status) {
      case "completed" :
        setFilteredTodos (todos.filter (todo => todo.completed === true))
      break;
      case "uncompleted": 
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default: 
      setFilteredTodos (todos);
      break;
    }

  };

  const saveLocalTodos = () => {
    // if(localStorage.getItem ('todos')===null) {
    //  localStorage.setItem('todos', JSON.stringify ([]))
    // }
    // else {
      localStorage.setItem ("todos", JSON.stringify(todos));
    
};

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let todosLocal= JSON.parse(localStorage.getItem("todos"));
      setTodos (todosLocal);
    }
  };

  return (
    <div className = "App">
      <header>
        <h1> Aniket's Todo List Webpage </h1>
      </header>
      <Form  
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText ={setInputText} 
      setStatus ={setStatus}
      />

      <Todolist 
      setTodos={setTodos} 
      todos={todos}
      filteredTodos={filteredTodos}
       /> 
    </div>
  );
};

export default App;
