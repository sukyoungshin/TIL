import React from 'react';
import ToDoHeading from './TodoHeading';
// import ToDoList from './ToDoList';
import ToDoListCustom from './ToDoListCustom';
import ToDoFooter from './ToDoFooter';

const App = () => {
  return <>
  <ToDoHeading />
  {/* <ToDoList /> */}
  <ToDoListCustom />
  <ToDoFooter />
  </>;
};

export default App;