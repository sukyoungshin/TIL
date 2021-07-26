import React from 'react';
import styled from 'styled-components'
// styled: 컴포넌트를 만들어주는 모듈

const Heading = styled.h1`font-size:48px; margin:0;`;
const Header = styled.header`
width: 100vw; height: 100px;
background-color: orange;
color: white;
text-align: center;
padding-top: 25px;`

/* const headerStyle = {
  width: '100vw', 
  height: '100px', 
  lineHeight: '100px',
  backgroundColor: 'orange', 
  color: 'white', 
  textAlign: 'center'
};

const h1Style = {
  fontSize: '48px',
  margin: 0
}; */

const ToDoHeading = () => {
  return <>
{/*     <header style={headerStyle}>
      <h1 style={h1Style}>TO DO LIST</h1>
    </header> */}
    <Header>
      <Heading>TO DO LIST</Heading>
    </Header>
  </>;
};

export default ToDoHeading;