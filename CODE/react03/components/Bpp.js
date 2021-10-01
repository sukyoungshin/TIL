// useRef
import React, { useRef, useEffect } from 'react';

const Banana = () => {

  const inputRef = useRef(); // 참조변수 선언. 역할은 아직 미정
  const handleClick = () => console.log(inputRef.current.value);

  useEffect(() => {
    console.log('최초 1회 렌더링 시에만 호출될 예정!');
    inputRef.current.focus(); // input태그에 focus를 준다.
  }, []);

  return <>
  <input ref={inputRef} type="text" placeholder="INPUT element" />
  <button onClick={handleClick}>CLICK ME!</button>
  </>;

};

export default Banana;
