// map()
import React, { useState } from 'react'

const notYet = {
  color: 'black', textDecoration: 'none', cursor: 'pointer'
};
const done = {
  color: 'gray', textDecoration: 'line-through', cursor: 'pointer'
};

const Golf = () => {
  const [todos, updateTodos] = useState([{
    content: "햄버거 먹기", id: 888, isDone : true
  },{
    content: "순대국 먹기", id: 684, isDone : true
  },{
    content: "마라탕 먹기", id: 124, isDone : false
  },{
    content: "찹쌀떡 먹기", id: 793, isDone : true
  }]);

  // 주어진 id에 해당하는 애만 isDone을 변경해주고 나머지는 그대로!
  // 객체는 동일한 키가 주어지면, 해당 키에 대해서만 덮어쓰기를 한다! 
  const toggleIsDone = (toggleId) => {
    const result = todos.map(todo => {
      return todo.id === toggleId ? { ...todo, isDone: !todo.isDone } : todo
    })
    updateTodos(result)
  };

  return <>
  <ul>
    {todos.map((todo, index) => {
      return <li key={index} 
      onClick={() => toggleIsDone(todo.id)}
      style={todo.isDone ? done : notYet}>{todo.content}</li>
    })}
  </ul>
  </>;
};

export default Golf;