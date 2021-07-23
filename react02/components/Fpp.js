// 문자열을 관리하는데, 문자열 길이가 10을 넘어가지 못하도록 제한을 주는 (커스텀 기능을 주는) 컴포넌트
import React, { useState } from 'react';

const useLimitedState = (validation) => {
  const [ value, setValue ] = useState("")
  const handleChange = (e) => {
    const currentValue = e.target.value
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
  return <div>
    <input type="text" value={value} onChange={handleChange} />
  </div>;
};


export default Fila;