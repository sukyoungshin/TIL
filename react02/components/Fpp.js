import React, { useState } from 'react';

// 커스텀 기능 : 문자열의 길이가 10을 넘어가지 못하도록 제한한다.
const useLimitedState = (validation) => {
  const [ value, setValue ] = useState("")
  const handleChange = (e) => {
    const currentValue = e.target.value;
    if(validation(currentValue)){
      setValue(currentValue)
    }
  };
  return { value, handleChange };
}

function Fila(){
  const validation = (text) => {
    if(text.length < 10){
      return true
    }
  };
  const { value, handleChange } = useLimitedState(validation);
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};


export default Fila;
