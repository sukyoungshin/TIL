import React from 'react';

// function Hello(props) {
//   return (
//     <div style={{color: props.color}}> 안녕하세요! {props.name} </div>
//   );
// };

// 비구조화 할당을 사용하여 props 생략하고 객체형태로도 전달 가능
function Hello({ color, name, isSpecial }) {
  return (
    <div style={{
      color
    }}>
    {/* 조건부렌더링 */}
    {/* 1. 삼항연산자  : 조건을 다르게 하려면 삼항연산자 사용 */}
    {isSpecial? 'SPECIAL / ' : 'NON-SPECIAL / ' } {/* JSX에서는 falsy한 값 (null, false, undefined)를 렌더링하면 아무것도 안나타남 (App.js 참고) */}
    {/* 2. && 연산자 : 단순히 값을 보여주고 숨기려면 && 연산자를 사용 */}
    {isSpecial && <b>🖖</b>} 
    안녕하세요! {name} 
    </div>
  );
};

/* props가 없을때 보여줄 default값 지정 */
Hello.defaultProps = {
  name: '이름없음',
  color: 'hotpink'
};

export default Hello;
