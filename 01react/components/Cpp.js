import React from 'react';

// props를 통해 전달된 속성을 읽고, 처리하기 (참고: props는 관습적 명칭)
function Cafe(props){
  return <h1>{props.brand}은 {props.price}원입니다!</h1>;
};

// 리액트 컴포넌트에는 커스텀 속성을 만들어 추가할 수 있다!
function Coffee(){
  const cafes = ['커피빈', '스타벅스', '이디야'];
  const prices = [5500, 4700, 3200];

  return <div>
    <Cafe brand={cafes[0]} price={prices[0]} />
    <Cafe brand={cafes[1]} price={prices[1]} />
    <Cafe brand={cafes[2]} price={prices[2]} />
  </div>
};

export default Coffee;