/*
react02 내용 복습
리액트 훅: 함수형 컴포넌트에 부가기능을 제공하는 함수들
ex) useState 상태관리 , useEffect 생명주기
*/

import React, { useState, useEffect } from 'react';

const App = () => {

  const [ textValue, setTextValue ] = useState('초기값');
  const handleTextChange = (e) => setTextValue(e.target.value);

  // useEffect : 리렌더링 시에 호출할 콜백을 지정하는 함수
  useEffect(() => {
    console.log('인풋에 입력중');
  }, [textValue]);   // [textValue]가 들어갈때마다 호출된다.

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
    </div>
    );
};

export default App;