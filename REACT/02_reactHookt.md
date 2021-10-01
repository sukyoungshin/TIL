# React Hook

## 1. useState

useState - 상태관리
useState(초기값) <br>
useState함수의 반환값 : 상태값변수, 상태변경함수 <br>

```
// ex
import React, { useState } from 'react';

function Counter(){

  const [number, setNumber] = useState(0);
  // number: 0으로 초기화되어 있는 상태변수, 이 변수의 값이 바뀌면 다시 렌더링된다.
  // setNumber(x) : 상태변수의 값을 x로 변경하는 함수

  return <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number === -5 ? number : number - 1)}>뺄셈</button>
    <button onClick={() => setNumber(number === 5 ? number : number + 1)}>덧셈</button>
  </div>;
};

export default Counter;
```

<br><br>
특징 : useState는 독립적인 함수이므로, 커스텀 함수(useMyState) 내부에서도 활용할 수 있다.

```
// 커스텀 기능 : 문자열의 길이가 10을 넘어가지 못하도록 제한한다.
const useLimitedState = (validation) => {
  const [ value, setValue ] = useState("")
  const handleChange = (e) => {
    const currentValue = e.target.value;
    if(validation(currentValue)){
      setValue(currentValue)
    }
  };
  return { value, handleChange };
}

function Fila(){
  const validation = (text) => {
    if(text.length < 10){
      return true
    }
  };
  const { value, handleChange } = useLimitedState(validation);
  return (
    <>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
};


export default Fila;
```

<br>
<br>

## 2. useEffect

useEffect - 컴포넌트 생명주기 관련 Hook으로, 리렌더링 시에 호출할 콜백을 지정하는 함수이다.<br/>
useEffect는 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 dependencyList라고 한다.) <br />
주로 비동기적으로 웹서버에 뭔가를 요청할때 사용한다.<br/>

```
useEffect(() => {
  console.log('반가워');
}, [state1, state2]);
```

state1이 바뀔때 호출, state2가 바뀔때 호출. 배열 state1, state2한테 의존해서 콜백함수가 호출된다. <br/>
만일 [] 배열 내부에 아무것도 없으면 최초 1번만 실행한다.<br/>
만일 배열자체가 아예 없으면 뭐가됐든 바뀔때마다 호출된다.
<br />
<br />

`useEffect(() => console.log('렌더링COMPLETE!'));` // 기본형 : 모든 렌더링 직후에 콜백을 호출한다.

`useEffect(() => console.log('렌더링COMPLETE!'), []);` // 빈 배열: 최초 1회에만 콜백호출!

`useEffect(() => console.log('렌더링COMPLETE!'), [특정조건]);` // dependency (의존성)이 정해져 있는 경우, 조건이 바뀔때만 콘솔 출력

```
useEffect(() => {
  // Component Mount : UI가 나타난 이후이므로, DOM에 바로 접근 가능
    console.log('컴포넌트가 화면에 나타남');

  // 주로 사용하는 경우 :
  // props -> state
  // REST API
  // D3 Video.js (라이브러리 인스턴스)
  // setInterval, setTimeout

  return () => {
  // Component Unmount : UI가 사라질 때 뒷정리
    console.log('컴포넌트가 화면에서 사라짐');

  // clearInterval, clearTimeout
  // (라이브러리 인스턴스 제거

  };
}, []);
```

### 의존배열 (dependencies, deps배열) :

- [특정 값] : 해당 값이 업데이트 될 때마다 리렌더링
- [] : 1회씩만 실행됨
- 생략 : 모든 컴포넌트에서 업데이트있으면 계속 실행됨 (렌더링 속도에 문제가 될 수 있음)

<br /> <br />

## useRef

참조변수. DOM객체를 직접 지정할 때 사용할 수 있다. <br/>
참조변수를 2개의 DOM에 넣어주고 싶으면 useRef를 두개 만들어줘야함<br>

```
import React, { useRef, useEffect } from 'react';

const Banana = () => {

  const inputRef = useRef(); // 참조변수 선언. 역할은 아직 미정
  const handleClick = () => console.log(inputRef.current.value);

  useEffect(() => {
    console.log('최초 1회 렌더링 시에만 호출될 예정!');
    inputRef.current.focus(); // input태그에 focus를 준다.
  }, []);

  return <>
  <input ref={inputRef} type="text" placeholder="INPUT element" />
  <button onClick={handleClick}>CLICK ME!</button>
  </>;

};

export default Banana;

```
