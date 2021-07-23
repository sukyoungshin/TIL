import React, { useState } from 'react';

// useState는 독립적인 함수이므로, 커스텀 함수(useMyState)에서 활용할 수 있다.
// 숫자가 아닌 무언가를 초기값으로 넣었을 시, 숫자로 강제 변경하자
const useMyState = (initialValue) => {
  
  // CUSTOM HOOK (강화)
  const initNum = Number.isInteger(initialValue) ? initialValue : 0 ; // 변수가 정수면 출력, 정수가 아니면 0 출력 

  const [myState, changeState] = useState(initNum);
  return {myState, changeState};
};

// 숫자조절하는 함수
function Extra(){
  const {myState, changeState} = useMyState(0);
  return <div>
    <h1>{myState}</h1>
    <button onClick={() => changeState(myState - 1)}>뺄셈</button>
    <button onClick={() => changeState(myState + 1)}>덧셈</button>
  </div>;
};

export default Extra;