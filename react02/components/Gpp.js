import React, { useState, useEffect } from 'react';

function Golf(){
  const [currentValue, setValue] = useState('');
  const [currentNumber, setVNumber] = useState(0);

  // 1. 기본형 : 모든 렌더링 직후에 콜백을 호출한다.
  // useEffect(() => console.log('렌더링COMPLETE!'));

  // 2. dependency 추가 : 빈 배열은 최초 1회에만 콜백호출!
  // dependency 뜻: 콜백 호출이 ~에 달렸다.
  // useEffect(() => console.log('렌더링COMPLETE!'), []);

  // 3. dependency (의존성)이 정해져 있는 경우, 조건이 바뀔때만 콘솔 출력
  useEffect(() => console.log('렌더링COMPLETE!'), [currentNumber, currentValue]);

  return <div>
    <h1>{currentNumber}</h1>
    <button onClick={() => {setVNumber(currentNumber - 1)}}>-</button>
    <button onClick={() => {setVNumber(currentNumber + 1)}}>+</button>
    <br />
    <input type="text" onChange={(e) => {setValue(e.target.value)}} />
    <p>{currentValue}</p>
  </div>;
};

export default Golf;