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

/*
import { useEffect } from 'react';

export default function App(){

  // useEffect : 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 dependencyList라고 한다.)
  // 주로 비동기적으로 웹서버에 뭔가를 요청할때 사용함
  useEffect(() => {
    console.log('반가워');
  }, [state1, state2]);
  // state1이 바뀔때 호출, state2가 바뀔때 호출. 배열 state1, state2한테 의존해서 콜백함수가 호출된다.
  // 만일 [] 배열 내부에 아무것도 없으면 최초 1번만 실행한다.
  // 만일 배열자체가 아예 없으면 뭐가됐든 바뀔때마다 호출된다.

  return <div></div>;

};
*/
