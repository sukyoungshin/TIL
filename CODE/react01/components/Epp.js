/* 
미션!
1. 브랜드명을 p태그로 표현하는 내부 컴포넌트 Brand 만들기
2. map을 사용하여 Brand 반환해주기
3. Brand 보여주는 p태그의 font는 30px, color는 white, bgcolor는 green
*/

import React from 'react';

function Brand(props){
  const pStyle = {fontSize: 30, color: 'white', backgroundColor: 'green'};
  return <p style={pStyle}>{props.brandName}</p>;
};

function ChickenBrand(){
  const brands = ['BHC', '네네', '육십계', '페리카나', '맥시카나', '교촌치킨'];
  return <div>
    {
    brands
    .map((brandName, index) => <Brand brandName={brandName} key={index} />)
    }
  </div>;
};

export default ChickenBrand;