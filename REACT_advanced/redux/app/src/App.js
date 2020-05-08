import React from 'react';
import ToDoList from './conteiners/ToDoList';
import AddToDo from './conteiners/AddToDo';
import Footer from './conteiners/Footer';

function App() {
  return (
    <>
      <AddToDo/>
      <ToDoList/>
      <Footer/>
    </>
  );
}

export default App;
