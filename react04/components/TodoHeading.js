import React from 'react';
import styled from 'styled-components'; // styled: 컴포넌트를 만들어주는 모듈

const Heading = styled.h1`font-size:48px; margin:0;`;
const Header = styled.header`
  width: 100vw; 
  height: 100px;
  background-color: orange;
  color: white;
  text-align: center;
  padding-top: 25px;
`;

const ToDoHeading = () => {
  return <>
    <Header>
      <Heading>TO DO LIST</Heading>
    </Header>
  </>;
};

export default ToDoHeading;
