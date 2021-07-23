import React, { useState } from 'react';

// 커스텀 기능추가 : 숫자가 아닌 값을 초기값으로 입력하면 숫자로 강제 변경한다.
const useMyState = (initialValue) => {
  const initNum = Number.isInteger(initialValue) ? initialValue : 0 ; // 매개변수 initialValue가 정수면 출력, 정수가 아니면 0 출력 
  const [myState, changeState] = useState(initNum);
  return {myState, changeState};
};

function Extra(){
  const {myState, changeState} = useMyState(0);
  return <div>
    <h1>{myState}</h1>
    <button onClick={() => changeState(myState - 1)}>뺄셈</button>
    <button onClick={() => changeState(myState + 1)}>덧셈</button>
  </div>;
};

export default Extra;


/*

useState()의 특징: 

useState는 독립적인 함수이므로,
커스텀 함수(useMyState) 내부에서도 활용할 수 있다.

*/
