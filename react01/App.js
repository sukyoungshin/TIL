import React from 'react';
import Wrapper from './Wrapper';
import Hello from './Hello';

function App() {
  return (
    <Wrapper>
      <Hello name="HELLO" color="blue" />
      <Hello name="BYE" isSpecial={true} />
      <Hello isSpecial /> {/* JSX에서는 TRUE/FALSE 속성을 지정안하면 TRUE로 인식함 */}
    </Wrapper>
  );
}

export default App;
