import React from 'react';
// Bpp.css는 JS파일이 아닌 정적파일이므로 아래와 같이 import 해줘야 한다. 
// Bpp.css 문서 자체가 모듈이자 객체이므로, from '/path'를 쓰지 않는다.
import './Bpp.css'; 

const pets = ['강아지',' 고양이','앵무새'];
const petStyle = {color:'tomato', fontSize: 48 /* 48px이 아니라 숫자만 준다 */}

// 파일명과 컴포넌트명은 달라도 상관없다. 
function Pet(){
  return <h1 className="pet">
    귀여운 <span style={petStyle}> {pets[0]} </span>
  </h1>;
};

export default Pet;