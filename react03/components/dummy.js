import { useEffect } from 'react';

export default function App(){

  // useEffect : 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 dependencyList라고 한다.)
  // 주로 비동기적으로 웹서버에 뭔가를 요청할때 사용함
  useEffect(() => {
    console.log('반가워');
  }, [state1, state2]);
  // state1이 바뀔때 호출, state2가 바뀔때 호출. 이 친구들한테 의존해서 콜백함수가 호출된다.
  // 만일 [] 아무것도 없으면 최초 1번만 실행한다.
  // 만일 배열이 아예 없으면 뭐가됐든 바뀔때마다 호출된다.

  return <div></div>;

};