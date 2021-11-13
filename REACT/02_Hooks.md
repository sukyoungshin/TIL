# Hooks

리액트 훅과 관련하여 공부한 내용을 정리한 레포입니다. <br/>
Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줍니다.<br/><br/>

## 🔗 Index

[1. useState](#1-usestate) <br/>
[2. useEffect](#2-useeffect) <br/>
[3. useReducer](#3-usereducer) <br/>
[4. useMemo](#4-usememo)<br/>
[5. useCallback](#5-usecallback)<br/>
[6. useRef](#6-useref)<br/>
[7. 커스텀 Hooks 만들기](#7-커스텀-hooks-만들기)<br/>
[8. 다른 Hooks](#8-다른-hooks)<br/>

[📖 Reference](#reference) <br/>

<br/><br/>

## 1 useState</a>

- 상태관리를 위해 사용하는 리액트 내장 훅 <br/>
- 사용 방법:

```
const [number, setNumber] = useState(0);
// const [상태값변수, 상태변경함수] = useState(초기값);
// number: 0으로 초기화되어 있는 상태변수, 이 변수의 값이 바뀌면 다시 렌더링된다.
// setNumber(x) : 상태변수의 값을 x로 변경하는 함수
```

- 하나의 useState 함수는 하나의 상태 값만 관리할 수 있습니다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됩니다.

```
// ex
import React, { useState } from 'react';

function Counter(){
  const [number, setNumber] = useState(0);
  return <div>
    <h1>{number}</h1>
    <button onClick={() => setNumber(number === -5 ? number : number - 1)}>뺄셈</button>
    <button onClick={() => setNumber(number === 5 ? number : number + 1)}>덧셈</button>
  </div>;
};

export default Counter;
```

<br><br>

- useState는 독립적인 함수이므로, 커스텀 함수(useMyState) 내부에서도 활용할 수 있다.

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

## 2 useEffect

- React는 DOM을 바꾼 뒤에 'useEffect' 함수를 실행
- useEffect는 컴포넌트 생명주기 관련 Hook으로, 리렌더링 시에 호출할 콜백을 지정하는 함수이다.
- useEffect는 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 dependencyList라고 한다.)
- 주로 비동기적으로 웹서버에 뭔가를 요청할때 사용한다.

- useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태

<br />
<br />

### 💡 Dependency lists (deps, 의존배열)

- 기본형 : 모든 렌더링 직후에 콜백을 호출한다.
  `useEffect(() => console.log('렌더링COMPLETE!'));` <br/>

- 마운트될 때만 실행하고 싶을 때
  useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면
  `useEffect(() => console.log('마운트될 때만 실행됩니다.'), []);` 빈 배열: 최초 1회에만 콜백호출! <br/>
- 특정 값이 업데이트될 때만 실행하고 싶을 때
  dependency (의존성)이 정해져 있는 경우, 특정 value가 변경될 때만 호출
  `useEffect(() => console.log(name), [name]);` <br/>

```
useEffect(() => {
  console.log('반가워');
}, [state1, state2]);

// 배열 state1, state2한테 의존해서 콜백함수가 호출된다.
// state1이 바뀔때 호출, state2가 바뀔때 호출.
```

<br/>

- 뒷정리하기

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

마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면 됩니다.

```
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  };
}, []);
```

<br /> <br />

## 3 useReducer

- `상태 관리`를 위해 사용하는 리액트 내장 훅. useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용
- useState vs useReducer ? 상황에 따라 더 편한 방법으로 사용한다. <br>
  useState : 컴포넌트에서 관리하는 값이 딱 하나고 숫자, 문자열, 불리언 값처럼 간단할 때 `const [ numbers, setNumbers ] = useState(true);`
  useReducer : 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해지거나, 해야하는 액션이 많을 때 (user값을 delete, add 등...)

- 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 `액션(action) 값을 전달받아 새로운 상태를 반환하는 함수`입니다. 리듀서 함수에서 새로운 상태를 만들 때는 `반드시 불변성을 지켜 주어야` 합니다.

```
// Counter.js
import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default Counter;
```

```
// App
import React from 'react';
import Counter from './Counter';

const App = () => {
  return <Counter />;
};

export default App;
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

## 4 useMemo

## 5 useCallback

## 6 useRef

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

## 7 커스텀 Hooks 만들기

## 8 다른 Hooks

## Reference

- 리다기 [8강](https://thebook.io/080203/ch08/)
- Hook 사용규칙 [ Hooks overview ](https://ko.reactjs.org/docs/hooks-overview.html), [ Hooks rule ](https://ko.reactjs.org/docs/hooks-rules.html)
- [Common React Hook Mistakes](https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c)
