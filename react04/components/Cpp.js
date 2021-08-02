// Input에 고양이 무늬를 영어로 쓰고 요청을 보내면,
// 그 무늬에 해당하는 고양이 사진 날아오게 하기

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// 동시에 설치하기 npm install styled-components axios

// 서버로부터 데이터를 get한다 (async + await)
async function getCatImage(catBreed) {
  return await axios.get(`https://cat.beansdrawer.com/api/breed/${catBreed}/random`);
};

// tagged template literals
const HEADING = styled.h1`
  font-size: 36px;
  color: blue;
  background-color: cyan;
`;
const BUTTON = styled.button`
  width: 100px;
  height: 25px;
  color: white;
  background-color: tomato;
  border: none;
  border-radius: 8px;
`;
const IMAGE = styled.img`
  width: 600px;
  height: 400px;
`;

function App() {

  const [catImage, setCatImage] = useState(null);
  const [catBreed, setCatBreed] = useState('cheeze');

  const handleClick = () => {
    getCatImage(catBreed)
    .then((success) => {
      console.log(success.data);
      setCatImage(success.data.message);
    })
    .catch((failed) => {
      console.log(failed);
    });
  };

  return (
  <>
    <HEADING>고양이 사진 받아오기</HEADING>
    <input 
      type="text" 
      placeholder="고양이 무늬를 쓰세요" 
      value={catBreed} 
      onChange={(e) => setCatBreed(e.target.value)} 
    />
    <BUTTON onClick={handleClick}>버튼</BUTTON>
    {catImage !== null ? <IMAGE src={catImage} /> : <></> }
  </>
  );
}

export default App;
