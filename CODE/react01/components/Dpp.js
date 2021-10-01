import React from 'react';

function Singer(props){
  return <p>{props.artists}</p>;
};

function Entertainer(){
  const singers = ['청하', '아이유', '선미', '악동뮤지션'];
  return <div>
    {
      // map 메소드가 콜백함수를 사용한 결과를 여기에 반환한다!
      singers.map((artists, index) => {
        return <Singer artists={artists} key={index} />;
      })
    }
  </div>;
};

export default Entertainer;

/* 
배열.map(콜백함수)
=>배열 요소의 개수만큼 콜백함수를 호출한다!
  호출결과, 새로운 배열을 반환한다.
map() : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/