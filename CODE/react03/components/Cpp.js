import React, { useRef } from 'react';

const Carrot = () => {

  const divRef = useRef();
  const handleClick = () => {
    const COLORS = ['skyblue', 'pink', 'lightgreen', 'blue'];
    const RANDOM = Math.floor(Math.random()*4);
    divRef.current.style.backgroundColor = COLORS[RANDOM]; // 랜덤색상 지정
    console.log(divRef.current);
  };

  return <>
    <button onClick={handleClick}>CLICK ME</button>
    <div ref={divRef} style={{ width: 100, height:100 }}></div>
  </>;
};

export default Carrot;

/*
참조변수를 button이랑 div에 다 넣어주고 싶으면 두개 만들어줘야함
const divRef = useRef();
const btnRef = useRef(); 이런식으로
*/