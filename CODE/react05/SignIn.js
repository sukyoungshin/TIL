import React from 'react';

function SignIn({currentUser, signIn, signOut}) {
/* 
props = {
  currentUser: null,
  signIn: (user) => { setCurrentUser(user)}
}

const { currentUser } = props;
currentUser = null;
*/

  return (
    currentUser === null 
    ? <>
      <form onSubmit={(e) => {
        e.preventDefault(); // Submit을 누르면 새로고침이 되니까 방지
        const userInfo = {
          userName: e.target.userName.value,
          nickName: e.target.nickName.value,
          town: e.target.town.value
        }
        console.log(e.target.userName.value, e.target.nickName.value, e.target.town.value);
        signIn(userInfo);
      }}>
        <input type="text" placeholder="이름" name="userName" /><br />
        <input type="text" placeholder="닉네임" name="nickName" /><br />
        <input type="text" placeholder="사는 동네" name="town" /><br />
        <button type="submit">로그인</button>
      </form> 
      </>
    : 
    <>
      <h1> 이미 로그인 완료되었습니다. </h1>
      <label htmlFor="out">로그아웃 하시겠어요?</label>
      <input type="button" value="YES" onClick={() => signOut()} />
    </>
    );
}

export default SignIn;