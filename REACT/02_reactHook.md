# React Hook

- Hook 사용규칙 [ React공식문서1 ](https://ko.reactjs.org/docs/hooks-overview.html), [ React공식문서2 ](https://ko.reactjs.org/docs/hooks-rules.html)
-

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

- React는 DOM을 바꾼 뒤에 “effect” 함수를 실행
- useEffect는 컴포넌트 생명주기 관련 Hook으로, 리렌더링 시에 호출할 콜백을 지정하는 함수이다.
- useEffect는 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 dependencyList라고 한다.)
- 주로 비동기적으로 웹서버에 뭔가를 요청할때 사용한다.

```
useEffect(() => {
  console.log('반가워');
}, [state1, state2]);

// state1이 바뀔때 호출, state2가 바뀔때 호출.
// 배열 state1, state2한테 의존해서 콜백함수가 호출된다.
```

만일 [] 배열 내부에 아무것도 없으면 최초 1번만 실행한다.<br/>
만일 배열자체가 아예 없으면 뭐가됐든 바뀔때마다 호출된다.
<br />
<br />

### Dependency lists (deps, 의존배열)

```
useEffect(() => console.log('렌더링COMPLETE!'), []); // 빈 배열: 최초 1회에만 콜백호출!
useEffect(() => console.log('렌더링COMPLETE!'), [특정조건]); // dependency (의존성)이 정해져 있는 경우, 조건이 바뀔때만 콘솔 출력
useEffect(() => console.log('렌더링COMPLETE!')); // 기본형 : 모든 렌더링 직후에 콜백을 호출한다.
```

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

## 3. useRef

- 참조변수. DOM객체를 직접 지정할 때 사용할 수 있다. <br/>
- 참조변수를 2개의 DOM에 넣어주고 싶으면 useRef를 두개 만들어야 한다.<br>
- ref.current에 접근해서 DOM을 직접 수정한다면, 리액트에서 제공하는 Lifecycle 혹은 Virtual DOM 렌더링 뎁스가 꼬일 위험이 매우 높아진다. ref를 여러 군데서 호출하고 있다면 어디에서 로직이 수정되었는지 추적이 더욱 어려워진다. current가 undefined인 경우도 고려해야한다. 이렇게 side-effect가 존재하는 ref의 사용보다는 가능하다면 리액트의 Lifecycle을 따르는 것이 좋다.

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

<br><br>

## 4. useReducer

- 상태 관리를 위해 사용하는 리액트 내장 훅
- useState vs useReducer ? 상황에 따라 더 편한 방법으로 사용한다. <br>
  컴포넌트에서 관리하는 값이 딱 하나고 숫자, 문자열, 불리언 값처럼 간단하면 useState 사용하는 것이 편하고,
  컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해지거나, 해야하는 액션이 많을 때 (user값을 delete, add 등...)는 useReducer가 편할 것이니, 상황에 맞게 선택해서 지혜롭게 사용할 것.

```
const [ numbers, setNumbers ] = useState(true); // 이런 경우엔 useState가 편함
```

<br><br>

### useState과의 차이

A. 상태 변경 시

- useState에서의 상태변경 ? 직접변경 ex) setValue(5);
- useReducer에서의 상태변경? action이라는 (update할 때 참조하는) 객체를 기반으로 상태변경. ex) dispatch({ type: 'INCREMENT' })<br>
  업데이트 할때 필요한 참조하고 싶은 값이 있다면, dispatch ({ type: 'INCREMENT', diff : 4 }) 이런식으로도 넣어줄 수 있음 <br><br>

B. useReducer를 사용하면, 상태 업데이트 로직을 컴포넌트 밖으로 분리하여 사용할 수 있음

C. 사용방법

- reducer : 상태를 업데이트 하는 함수. 현재 상태와 action parameter를 받아와서, 업데이트 된 새로운 형태를 반환해주는 형태를 갖추고 있음
- action = { type : 'INCREMENT' }

```
function reducer (state, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};
```

- useReducer

```
const [ number, dispatch ] = useReducer(reducer, 0);
// number : 현재 상태 (기본값 0)
// dispatch : action을 발생시키는 함수
// useReducer(reducer 함수, 기본값(문자, 숫자, 배열 등 가능))
```
