// axios
import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

// axios.get(url) : 프로미스 기반의 비동기 통신 객체를 반환
async function getCatImage(){
  return await axios.get('https://cat.beansdrawer.com/api/breeds/image/random');
};
// getCatImage().then().catch(); ==> 비동기라 실행순서가 어케 될지 모르므로 이렇게 쓰면 안됨. 대신 키워드를 넣어서 사용한다. async + await
// async + await : 최신 자바스크립트에서 프로미스를 반환할 때 사용하는 키워드

const BUTTON = styled.button`
  display: block;
  width: 400px;
  line-height: 60px;
  background-color: tomato;
  color: white;
  border: none;
`;
const IMAGE = styled.img`
  width: 400px;
  height: 400px;
`;

const Bpp = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const handleClick = () => {
    // 비동기 서버통신
    getCatImage()
    .then((result) => {
      console.log(result.data.message);
      setImgSrc(result.data.message);
    }) /* data 외 다른 키는 모두 axios 설정상 추가된 것이므로 실제 데이터만 보고 싶다면 .data */
    .catch((error) => console.log(error))
  };

  return <>
    <BUTTON onClick={handleClick}>GET CATS IMAGE</BUTTON>
    { imgSrc === null ? <p>NO IMAGE DATA</p> : <IMAGE src={imgSrc} alt="CAT IMAGE" /> }
  </>;
};

export default Bpp;
