# Hooks

리액트 훅과 관련하여 공부한 내용을 정리한 레포입니다. <br/>
주로 [리액트를 다루는 기술](https://thebook.io/080203/), [벨로퍼트와 함께하는 모던리액트](https://github.com/velopert/react-tutorial)을 참고하였습니다 <br/><br/>
Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태 관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해 줍니다.<br/><br/>

## 🔗 Index

[1. useState](#1-usestate) <br/>
[2. useEffect](#2-useeffect) <br/>
[3. useReducer](#3-usereducer) <br/>
[4. useMemo](#4-usememo)<br/>
[5. useCallback](#5-usecallback을-사용하여-함수-재사용하기)<br/>
[💡 React.memo](#react.memo)<br/>
[6. useRef](#6-useref)<br/>
[7. 커스텀 Hooks 만들기](#7-커스텀-hooks-만들기)<br/>
[8. 다른 Hooks](#8-다른-hooks)<br/>

[📖 Reference](#reference) <br/>

<br/><br/>

## 1 useState</a>

- 상태관리를 위해 사용하는 리액트 내장 훅 <br/>
- 사용 방법: `const [상태값변수, 상태변경함수] = useState(초기값);`
- https://reactjs.org/docs/hooks-reference.html#usestate

```
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

- 하나의 useState 함수는 하나의 상태 값만 관리한다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용한다.

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
- useEffect는 컴포넌트 생명주기 관련 Hook으로, 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 지정하는 함수이다.
- 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태
- useEffect는 이 함수를 언제 호출할건지 같이 지정해줘야한다 (이를 의존배열deps 라고 한다.)
- 주로 비동기적으로 웹서버에 뭔가를 요청할때 사용한다.
- https://reactjs.org/docs/hooks-reference.html#usereducer

<br/>

### 💡 Dependency lists (deps, 의존배열)

#### 기본형

- 모든 렌더링 직후에 콜백을 호출한다.
- `useEffect(() => console.log('렌더링COMPLETE!'));`

#### 마운트될 때만 실행하고 싶을 때

- useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면
- `useEffect(() => console.log('마운트될 때만 실행됩니다.'), []);`
- 빈 배열: 최초 1회에만 콜백호출

#### 특정 값이 업데이트될 때만 실행하고 싶을 때

- dependency (의존성)이 정해져 있는 경우, 특정 value가 변경될 때만 호출하려면
- `useEffect(() => console.log(name), [name]);` <br/>

```
useEffect(() => {
  console.log('반가워');
}, [state1, state2]);
// 배열 내부의 state1 또는 state2 값이 바뀔때마다 useEffect 내부가 호출된다
```

<br/>

#### 뒷정리함수 (cleanup 함수)

```
useEffect(() => {
  console.log('컴포넌트가 화면에 나타남');

  // Component Mount : UI가 나타난 이후이므로, DOM에 바로 접근 가능
  // 주로 사용하는 경우 :
  // - props -> state
  // - REST API 요청할 때
  // - D3, Video.js (라이브러리 인스턴스를 생성했을 때)
  // - setInterval, setTimeout

  return () => {
    console.log('컴포넌트가 화면에서 사라짐');

    // Component Unmount : UI가 사라질 때 뒷정리해주는 함수 (cleanup 함수 / 뒷정리함수)
    // - clearInterval, clearTimeout
    // - (라이브러리 인스턴스 제거

  };
}, []);
```

#### 마운트될 때만 뒷정리 함수를 호출하고 싶다면

- useEffect 함수의 두 번째 파라미터에 비어 있는 배열을 넣으면 됩니다.

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

- `상태 관리`를 위해 사용하는 리액트 내장 훅.
- useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용
- useState vs useReducer ? 상황에 따라 더 편한 방법으로 사용한다. <br>
- useState : 컴포넌트에서 관리하는 값이 딱 하나고 숫자, 문자열, 불리언 값처럼 간단할 때 `const [ numbers, setNumbers ] = useState(true);`<br/>
- useReducer : 컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해지거나, 해야하는 액션이 많을 때 (user값을 delete, add 등...) <br/>

- 리듀서는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 `액션(action) 값을 전달받아 새로운 상태를 반환하는 함수`입니다. <br/>
  리듀서 함수에서 새로운 상태를 만들 때는 `반드시 불변성을 지켜 주어야` 합니다.

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

### useReducer VS useState

#### A. 상태 변경 시

- `useState`에서의 상태변경 ? 직접변경 `setValue(5);`
- `useReducer`에서의 상태변경? action 객체를 기반으로 상태변경. `dispatch({ type: 'INCREMENT' })`<br>
- 업데이트 할때 필요한 참조하고 싶은 값이 있다면, `dispatch({ type: 'INCREMENT', diff : 4 })` 이런식으로도 넣어서 reducer함수로 전달가능 <br><br>

#### B. useReducer를 사용하면

장점 : 상태 업데이트 로직을 컴포넌트 밖으로 분리하여 사용할 수 있음<br/>

#### C. 사용방법

- reducer : 상태를 업데이트 하는 함수. 현재 상태와 action parameter를 받아와서, 업데이트 된 새로운 형태를 반환해주는 형태
- `action = { type : 'INCREMENT' }`

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
const [ number, dispatch ] = useReducer(reducer, 0);
// number : 현재 상태 (기본값 0)
// dispatch : action을 발생시키는 함수
// useReducer(reducer 함수, 기본값(문자, 숫자, 배열 등 가능))
```

## 4 useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화하기 위해 사용하는 Hook <br/>
- 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식.

```
import React, { useRef, useState, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };
  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };
  const count = useMemo(() => countActiveUsers(users), [users]); // users값이 바뀔때만 countActiveUsers 함수를 호출함
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
};

export default App;
```

## 5 useCallback을 사용하여 함수 재사용하기

- useMemo처럼 렌더링 성능을 최적화하기 위해 사용
- `useMemo`는 특정 결과값을 재사용 할 때 사용하는 반면, `useCallback`은 이벤트 핸들러 함수를 필요할 때만 생성한다. 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 `useCallback`을 사용하여 최적화해 주는 것이 좋다.
- 특히, react-redux에서는 <b>`useDispatch`와 함께 사용하는 습관이 필요</b>
- 사용방법 : useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣는다. <br/>
  `const onChange = useCallback((e) => {setNumber(e.target.value)}, []);`

```
import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    id => {
      setUsers(users.filter(user => user.id !== id));
    },
    [users]
  );
  const onToggle = useCallback(
    id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
```

- 사실, useCallback 은 useMemo 를 기반으로 만들어졌습니다. 다만, 함수를 위해서 사용 할 때 더욱 편하게 해준 것 뿐이지요. useCallback은 결국 useMemo로 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hook입니다. 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고, 함수를 재사용하려면 useCallback을 사용하세요.

```
useCallback(() => {
  console.log('hello world!');
}, []);

useMemo(() => {
  const fn = () => {
    console.log('hello world!');
  };
  return fn;
}, []);
```

### React.memo

- 💡 샘플코드 : [밸로퍼트의 모던 리액트 React.memo](https://github.com/velopert/react-tutorial/blob/master/basic/19-React.memo.md)
- 컴포넌트에서 리렌더링이 불필요할 때는 이전에 렌더링했던 결과를 재사용할 수 있게 하는 방법. 이 함수를 사용하면 컴포넌트의 리렌더링 성능을 최적화 할 수 있음.
- 사용방법 : 컴포넌트를 export할때 React.memo()로 감싸주면 됨. props가 바뀌었을때만 리렌더링 해줌

- [ToastUI: React.memo 현명하게 사용하기](https://ui.toast.com/weekly-pick/ko_20190731)
- <b>\*[함수형 업데이트](https://ui.toast.com/weekly-pick/ko_20201022)</b>

## 6 useRef

- 참조변수. DOM객체를 직접 지정할 때 사용할 수 있다. <br/>
- 참조변수를 2개의 DOM에 넣어주고 싶으면 useRef를 두개 만들어야 한다.<br>
- ref.current에 접근해서 DOM을 직접 수정한다면, 리액트에서 제공하는 Lifecycle 혹은 Virtual DOM 렌더링 뎁스가 꼬일 위험이 매우 높아진다. ref를 여러 군데서 호출하고 있다면 어디에서 로직이 수정되었는지 추적이 더욱 어려워진다. current가 undefined인 경우도 고려해야한다. 이렇게 side-effect가 존재하는 ref의 사용보다는 가능하다면 리액트의 Lifecycle을 따르는 것이 좋다.
- useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current 값이 실제 엘리먼트를 가리킵니다.

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

### 로컬 변수로 사용하기

로컬 변수란 렌더링과 상관없이 바뀔 수 있는 값을 의미

```
import React, { useRef } from 'react';

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  }
  const printId = () => {
    console.log(id.current);
  }
  return (
    <div>
      refsample
    </div>
  );
};

export default RefSample;
```

이렇게 ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다는 점에는 주의해야 합니다. 렌더링과 관련되지 않은 값을 관리할 때만 이러한 방식으로 코드를 작성하세요.

<br><br>

## 7 커스텀 Hooks 만들기

자신만의 훅 만들기 : [ React공식문서 ](https://ko.reactjs.org/docs/hooks-custom.html), [ToastUI : 커스텀훅 예제](https://ui.toast.com/weekly-pick/ko_20200916)

### WHY ?

- 코드의 재사용을 용이하게 하고, 번들 시 코드의 용량을 줄여주기 위해 사용한다.
- App이 비즈니스로직으로 비대해진다면 custom hook을 사용해서 비즈니스 로직과 상태를 분리해내는 방법을 사용하는 것이 좋다.
- react-async, react-use, react-spectrum 과 같이 잘 만들어진 Hooks 오픈소스도 살펴보자.
  `yarn add react-async`

### HOW TO USE

useEffect, useState, useReducer 같은 리액트에 내장되어 있는 훅을 이용하여, 원하는 기능을 구현하고 컴포넌트에서 사용하고 싶은 값을 반환해주면 된다.

## 8 다른 Hooks

## Reference

- 리다기 [8강](https://thebook.io/080203/ch08/)
- Hook 사용규칙 [ Hooks overview ](https://ko.reactjs.org/docs/hooks-overview.html), [ Hooks rule ](https://ko.reactjs.org/docs/hooks-rules.html)
- [Common React Hook Mistakes](https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c)
- [ 리액트 hooks에 대해 이해하기(번역) ](https://github.com/sbyeol3/articles/issues/12)
- [ react-async레포 ](https://github.com/async-library/react-async)
- [ react-async 밸로퍼트 깃북 ](https://react.vlpt.us/integrate-api/04-react-async.html)
- [ToastUI : Reack Hook의 어두운 면](https://ui.toast.com/weekly-pick/ko_20200922)
- [React 렌더러를 최적화하는 간단한 트릭](https://ui.toast.com/weekly-pick/ko_20190725)
- [React 렌더링과 성능 알아보기](https://ui.toast.com/weekly-pick/ko_20170324)
