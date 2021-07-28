import React from 'react';

// {children}이라는 props를 전달해줘야, 브라우저상에 <Hello /> 컴포넌트가 나타남 (App.js 참고)
function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };

  return <div style={style}>{ children }</div>
}

export default Wrapper;