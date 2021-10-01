import React, { useState } from 'react';
import { Button, ListItem, ToDoContent, ToDoXButton } from './ToDoStyled';

const ToDoList = () => {

  const [ texts, setText ] = useState(''); // texts : input의 value를 담는 변수 (string)
  const [ todos, setTodos ] = useState([]); // todos : TO DO LISTS의 []을 담는 변수 (array)
  const [ todoID, setTodoID ] = useState(0); // todoID : TO DO LIST ID#를 담는 변수 (number)

  // 할 일 배열에 새로운 할 일 추가하기
  const handleClickAdd = () => {
    // INPUT에 쓴 TEXT 내용을 넣는다.
    const newOne = { 
      id: todoID, 
      content : texts, 
      isDone: false 
    }; 
    setTodos([...todos, newOne]); // 할일목록 추가
    setTodoID(todoID + 1); // ID값 증가
    setText(''); // INPUT TEXT비우기
  };

  // 주어진 ID에 해당하는 TO DO의 상태를 변경
  const handleClickUpdate = toggleId => {
    const result = todos.map( todo => todo.id !== toggleId ? todo : {...todo, isDone: !todo.isDone})
    setTodos(result);
  };

  // 주어진 ID에 해당하는 TO DO를 제외시킴
  const handleClickDelete = deleteId => {
    const result = todos.filter((todo) => {
      return todo.id !== deleteId;
    });
    setTodos(result);
  };

  return <>
  <input 
    type="text" 
    placeholder="TO DO LISTS..." 
    value={texts}
    onChange={(e) => setText(e.target.value)}
  />
  <Button onClick={handleClickAdd}>ADD</Button>
  <ul>
    {
      todos.map((todo, idx) => {
        return <ListItem key={idx}>
        
        <ToDoContent 
          onClick={() => handleClickUpdate(todo.id)}
          isDone={todo.isDone}
          >{todo.content}</ToDoContent> 
        <ToDoXButton 
          onClick={() => handleClickDelete(todo.id)}
          isFinished={todo.isDone}
        > [ X ] </ToDoXButton>
      </ListItem>
    })
    }
  </ul>
  </>;
};

export default ToDoList;
