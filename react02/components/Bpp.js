// 조건부 렌더링
import React from 'react'

function EachOne(props){
  return <h1>
    {
      props.color === "yellow" ? 
      "노란 바나나" : 
      "썩은 바나나"
    }
    </h1>
};

function Banana(){
  const bananaColors = ["black","yellow","green","black","yellow","green"];

  // map()을 활용해서 조건부 렌더링되는 EachOne들을 모두 보이자!
  return <div>
    {
      bananaColors.map((color, index) => {
        return <EachOne color={color} key={index} />
      })
    }
  </div>
};

export default Banana;