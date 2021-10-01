import React from 'react';

function User({ user }){
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <>
    {
      users.map(
        user => (<User user={user} key={user.id} />)
        )
        /* 
        key값으로 지정할 고유값이 없다면 map함수 내부에 2번째 인자 index를 사용하여 key값에 넣는다.
        왠만하면 index는 사용하지 않는것이 좋다.
        */
    }
    </>
  );
}

export default UserList;