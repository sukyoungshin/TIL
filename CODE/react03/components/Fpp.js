// map()
import React, { useState } from 'react'

const Flower = () => {

  const [todos, updateTodos] = useState([{
    content: "햄버거 먹기", id: 888
  },{
    content: "순대국 먹기", id: 684
  },{
    content: "마라탕 먹기", id: 124
  },{
    content: "찹쌀떡 먹기", id: 793
  }]);

  // 누른 항목(removeId를 id로 가진 항목)을 제외시키자
  const handleClick = (removeId) => {
    console.log(removeId)

    // filter는 콜백이 true를 반환한 경우에만 요소를 남겨준다!
    // 그 결과, 남겨진 요소들로만 구성된 배열을 반환한다!
    const result = todos.filter((todo) => { return todo.id !== removeId })
    updateTodos(result) // 제외된 것 외 나머지로만 구성된 배열로 업데이트!
  };

  return <>
    <ul>
      {todos.map((todo, index) => {
        return <li key={index} onClick={() => handleClick(todo.id)}>{todo.content}</li>
      })}
    </ul>
  </>;
};

export default Flower;


/* 
[1,2,3].filter( (elements) => {
  return true;
}) 
*/
