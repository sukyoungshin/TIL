/* 
리액트 라이브러리 
react-color : https://casesandberg.github.io/react-color/ 
*/

// 함수형 컴포넌트
import React, { useState } from 'react';
import { CirclePicker } from 'react-color';

function App() {

  const [ myColor, setMyColor ] = useState('#D9E3F0');

  return (
    <>
      <CirclePicker 
        myColor={myColor}
        onChangeComplete ={(e) => setMyColor(e.hex)}
      /> 
      <br/>
      <div style={{ width: 500, height: 500, backgroundColor: myColor }} />
    </>
  );
};

export default App;


// 클래스형 컴포넌트
// import React from 'react';
// import { CirclePicker } from 'react-color';

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       myColor: 'navy',
//     };
//   };

//   render() {
//     const { myColor } = this.state;

//     return (
//     <>
//       <CirclePicker
//         color={myColor}
//         onChangeComplete={ (e) => this.setState({ myColor: e.hex }) } 
//       />
//       <br />
//       <div 
//       style={{ width: 500, height: 500, background: myColor}} 
      
//       />
//     </>
//     );
//   }
// };

// export default App;