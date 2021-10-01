/* 
useState()

useState(초기값)
useState함수의 반환값 : 상태값변수, 상태변경함수 
*/

import React, { useState } from 'react';

function Counter(){
  // number: 0으로 초기화되어 있는 상태변수, 이 변수의 값이 바뀌면 다시 렌더링된다.
  // setNumber(x) : 상태변수의 값을 x로 변경하는 함수
  const [number, setNumber] = useState(0);

  return <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number === -5 ? number : number - 1)}>뺄셈</button>
    <button onClick={() => setNumber(number === 5 ? number : number + 1)}>덧셈</button>
  </div>;
};

export default Counter;

/* 
{} 안에는 값이 반환되어야 한다. 따라서 number--만 넣을순 없음
함수도 하나의 값으로 됨
*/