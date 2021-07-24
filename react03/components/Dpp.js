// map()
import React from 'react';

const TODOS = [{
  content: '리액트 공부하기', isDone: false, priority: 1
},{
  content: '프로젝트 구상하기', isDone: false, priority: 2
},{
  content: '노드 공부하기', isDone: true, priority: 3
}];

// READ
const ToDoList = () => {
  return <>
  {
    TODOS.map((todo, index) => {
      return <p key={index} 
          style={todo.isDone ? {textDecoration: 'line-through'}:{textDecoration: 'none'}}> 
          {todo.priority}. {todo.content}
      </p>
    })
  }
  </>;
};

export default ToDoList;

/*
map()

배열의 수만큼 콜백함수를 호출한다.
한번 호출될때마다 매개변수로 배열이 순서대로 MAPPING됨.
*/
