import React from 'react';

function eventFunction(){
  alert('이벤트 발생!');
};

function RoundBtn(props){
  const btnStyle = {
    'width': '100px',
    'height':'40px',
    'borderRadius':'10px',
    'backgroundColor':'yellowgreen',
  }

  return <button style={btnStyle} onClick={eventFunction} id={props.id}>
            {props.children}: {props.id}
          </button>;
};

export default RoundBtn;