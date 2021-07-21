import React from 'react';

const myStyle = {
  color: 'skyblue',
  backgroundColor: 'blue',
  width: '100px',
  textAlign: 'center',
};

// export 하지않는 함수형 컴포넌트 만들기 (내부 함수)
function Book(){
  return <h1>BOOK</h1>
};

// JSX 컴포넌트를 반환하는 함수 : 함수형 컴포넌트
function App(){
  return <div className="box" style={myStyle}>
    <Book />
    <Book />
    <Book />
    </div>;
  
};

export default App;