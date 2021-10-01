// map() + CREATE, READ
import React, { useState } from 'react';

const Electron = () => {

  const [text, updateText] = useState('');
  const [todos, updateTodos] = useState([
    {content: 'SLEEP'}, 
    {content: 'READ BOOKS'}, 
    {content: 'DO THE DISHES'} 
  ]);

  // input에 써져있는 내용(text)을 할일 목록에 추가하기. 
  const handleClick = () => {
    const NEWTODO = { content: text };

    // 기존 배열에 들어있던 요소에 새로운 할일 하나만 더 추가함
    updateTodos( [...todos, NEWTODO] );
  };

  return <>
  <input type="text" placeholder="TO DO ..." value={text} 
  onChange={(e) => updateText(e.target.value)} />
  <button onClick={handleClick}>ADD</button>
  <ul>
    {
      todos.map((todo, index) => <li key={index}>{todo.content}</li>)
    }
  </ul>
  </>;
};

export default Electron;