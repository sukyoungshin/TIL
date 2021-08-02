import React from 'react';

function Home({currentUser}) {

  return (
    currentUser === null 
    ? <h1> 아직 로그인 전입니다.</h1> 
    : <h1> 환영합니다. </h1>
    );
}

export default Home;


