/* 
반응형 : CSS로 mediaquery를 설정
리액트에서는 mediaquery 말고 react-device-detect를 사용하는 방법도 있다.
*/
import React from 'react';
import styled from 'styled-components';
import { isMobile, isTablet } from 'react-device-detect';

// styled-component에서 media쿼리 적용하는 방법 ( 각 컴포넌트 내부에 미디어쿼리 설정)
const Container = styled.div`
  display: flex;
  flex-direction : ${props => props.isMobile ? 'column' : 'row'}; 
  /* 
  컴포넌트 내부에 미디어쿼리를 설정해준다 (현재 라이브러리를 사용했으므로 주석처리)
  @media screen and (max-width: 400px) {
    flex-direction: column;
  } 
  */
`;
const TextDiv = styled.div`
  width: 300px;
  height: 300px;
  background-color: skyblue;
`;
const ButtontDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

function Fpp() {

  console.log(isMobile); // 새로고침(렌더) 시에 감지한다!

  return (
  <>
  <Container isMobile={isMobile} >
    <TextDiv />
    <ButtontDiv />
  </Container>
  </>
  );
}

export default Fpp;