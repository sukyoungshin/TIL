import React from 'react';

function SubwayLine(props){
  const LINE = ['1호선', '2호선', '3호선', '4호선', '5호선'];
  const LINE_COLOR = ['blue', 'green', 'orangered', 'skyblue', 'purple'];
  const DIV_STYLE = {
    'display':'inline-block',
    'width': '100px',
    'height': '100px',
    'lineHeight':'100px',
    'borderRadius':'50%',
    'textAlign':'center',
    'fontSize': '20px',
    'boxSizing':'border-box',
    'borderWidth':'5px',
    'borderStyle': 'solid',
    'borderColor':'blue'
  };
  
  // BORDER COLOR 변경
  const COLOR_MAPPING = LINE.map((subwaylines, index) => {
    let copyDivStyle = {...DIV_STYLE};
    let colorMatch = DIV_STYLE.borderColor;
    colorMatch = LINE_COLOR[index];
    copyDivStyle.borderColor = colorMatch;
    return <div style={copyDivStyle} key={index}>{subwaylines}</div>;
  });

  return <div>{COLOR_MAPPING}</div>;
};

export default SubwayLine;