import React from 'react';

function Profile({currentUser}) {

  return (
    currentUser === null 
    ? <h1> 프로필이 없습니다. </h1> 
    : <h1> 로그인 완료 </h1>
    );
}

export default Profile;