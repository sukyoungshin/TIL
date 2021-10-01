import React from 'react';
import './App.css';

function Inner(){
  return <p className="text">내부함수 Inner</p>
};

function App(props){

  const TITLE = "제목 ";
  
  // JSX에서 스타일시트는 자바스크립트 표기법으로!
  return <div style={{
    color: 'white', 
    backgroundColor: 'green', 
    fontSize: 32}}>
  {TITLE} 
  {props.subtitle}
  <Inner />
  </div>
};

export default App;

