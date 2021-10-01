import React from 'react'; // 해당 파일에서 JSX 문법을 사용하기 위해 React를 import 한다.

// 리액트에서는 CSS를 사용할때 객체형태로 사용한다.
const myStyle = {
  color: 'skyblue',
  backgroundColor: 'blue',
  width: '100px',
  textAlign: 'center',
};

// export 하지않는 함수형 컴포넌트 (내부 함수)
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
