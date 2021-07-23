import React, { useState } from 'react';

function Data(){

  // NAME, NICKNAME의 useState() 설정
  const [nameText, updateNameText] = useState(''); // NAME의 초기값으로 빈문자열 전달
  const [nickText, updateNickText] = useState(''); // 별도의 값을 반환하는 useState 사용
  // NAME, NICKNAME 각각의 useState의 멤버함수 지정
  const handleChangeName = (e) => { updateNameText(e.target.value) };
  const handleChangeNick = (e) => { updateNickText(e.target.value) };

  // RETURN
  return <div>
    <input onChange={handleChangeName} type="text" placeholder="이름" />
    <input onChange={handleChangeNick} type="text" placeholder="별명" />
    <p>이름 : {nameText}</p>
    <p>별명 : {nickText}</p>
  </div>;
  
};

export default Data;