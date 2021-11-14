# Redux 라이브러리

Redux 공식문서와 노마드코더 리덕스101 강의, 리액트를 다루는 기술(개정판) 등을 참고하여 학습한 내용을 정리한 파일입니다. <br/>

## Redux

- redux : `JavaScript` application의 `state(상태)를 관리`하는 방법
- redux는 VanillaJS, Vue.js, Angular.js, React.js 어디에서든 사용가능함
- redux는 React에 의존하는 라이브러리가 아님
- redux 설치 : `yarn add redux`

## Redux Terminology

### store

프로젝트에 리덕스를 적용하기 위해 스토어(store)를 만듭니다. 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있습니다. 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며, 그 외에도 몇 가지 중요한 내장 함수를 지닙니다.

### actionCreator

액션 생성 함수(action creator)는 액션 객체를 만들어 주는 함수입니다.
액션 이름은 문자열 형태로, 주로 대문자로 작성하며 액션 이름은 고유해야 합니다. 이름이 중복되면 의도하지 않은 결과가 발생할 수 있기 때문입니다.

```
// 액션이름
const ADDTODO = 'ADD_TODO';
const CHANGEINPUT = 'CHANGE_INPUT';

// 액션 생성함수
// 액션 객체는 type 값을 반드시 갖고 있어야 하며, 그 외에 추후 상태를 업데이트할 때 참고하고 싶은 값을 넣을 수 있습니다.
function addTodo(data) {
  return { type: ADDTODO, data };
};

// 화살표 함수로도 만들 수 있습니다.
const changeInput = text => ({ type: CHANGEINPUT, text });
```

어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 정보를 놓칠 수도 있습니다. 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리합니다.

### Reducer

리듀서(reducer)는 변화를 일으키는 함수입니다. 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 옵니다. 그리고 두 값을 참고하여 새로운 상태를 만들어서 반환해 줍니다.

```
const initialState = { counter: 1 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    default:
      return state;
    }
}
```

### dispatch

디스패치(dispatch)는 스토어의 내장 함수 중 하나입니다. 디스패치는 '액션을 발생시키는 것'이라고 이해하면 됩니다. 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출합니다.

이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줍니다.

### subscribe

스토어의 내장 함수 중 하나입니다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출됩니다. // react-redux에서는 subscribe를 사용하지 않는다.

```
const listener = () => {
  console.log('상태가 업데이트됨');
};
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
```

## One-way Data Flow

<img alt="Redux data flow diagram" src="https://ko.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif">

[이미지출처](https://ko.redux.js.org/tutorials/fundamentals/part-1-overview/)

#### 1. data(state)를 저장하는 공간을 생성

- store : data(state)를 저장하는 공간을 생성 <br/>
- reducer : data를 modify 해주는 함수. action으로부터 전달받은 값과 reducer 내부의 조건에 따라서, data(state)를 변환시켜서 그 새롭게 변환된 값을 return함 <br/>
- action : application에 있는 data를 변환시킨다.

#### 2. dispatch를 사용하여 message(action)를 redux에게 전달

`store.dispatch({ type : 'ADD' });` <br/>

#### 3. redux가 reducer를 호출

#### 4. reducer 내부의 조건에 맞도록 state값을 바꾸어서 return

- [불변성](https://daveceddia.com/react-redux-immutability-guide/)을 유지해줘야함. 

## Sample

```
import { createStore } from 'redux'

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  };
};

// 앱의 상태를 보관하는 Redux 저장소를 만듭니다.
// API로는 { subscribe, dispatch, getState }가 있습니다.
let store = createStore(counter)

// subscribe()를 이용해 상태 변화에 따라 UI가 변경되게 할 수 있습니다.
// 보통은 subscribe()를 직접 사용하기보다는 뷰 바인딩 라이브러리(예를 들어 React Redux)를 사용합니다.
// 하지만 현재 상태를 localStorage에 영속적으로 저장할 때도 편리합니다.

store.subscribe(() => console.log(store.getState())))

// 내부 상태를 변경하는 유일한 방법은 액션을 보내는 것뿐입니다.
// 액션은 직렬화할수도, 로깅할수도, 저장할수도 있으며 나중에 재실행할수도 있습니다.
store.dispatch({ type: 'INCREMENT' }) // 1
store.dispatch({ type: 'INCREMENT' }) // 2
store.dispatch({ type: 'DECREMENT' }) // 1
```

상태를 바로 변경하는 대신, 액션이라 불리는 평범한 객체를 통해 일어날 변경을 명시합니다. 그리고 각각의 액션이 전체 애플리케이션의 상태를 어떻게 변경할지 결정하는 특별한 함수인 리듀서를 작성합니다. <br/>

보통의 Redux 앱에는 하나의 루트 리듀서 함수를 가진 단 하나의 저장소가 있습니다. 앱이 커짐에 따라 루트 리듀서를 상태 트리의 서로 다른 부분에서 개별적으로 동작하는 작은 리듀서들로 나눌 수 있습니다. React 앱을 하나의 루트 컴포넌트에서 시작해서 여러 작은 컴포넌트의 조합으로 바꾸는 것과 동일합니다. <br/>

이런 아키텍처가 카운터 앱에서는 너무 과한 것처럼 보이지만, 크고 복잡한 앱에서는 이 패턴의 확장성이 잘 드러납니다. 액션에 따른 모든 변경을 추적할 수 있기 때문에, 매우 강력한 개발자 도구를 가능하게 해주기도 합니다. 여러분은 사용자 세션을 기록한 다음 액션 하나하나를 다시 실행해 볼 수 있습니다. <br/><br/>

## Redux 사용을 고려해볼법한 상황

- 계속해서 바뀌는 상당한 양의 데이터가 있다
- 상태를 위한 단 하나의 근원이 필요하다
- 최상위 컴포넌트가 모든 상태를 가지고 있는 것은 더 이상 적절하지 않다

<br/>

## Redux libraries & tool

- React-Redux
- Redux Toolkit : 공식문서에서 추천하는 방식
- Redux DevTools Extension

<br/><br/>

## 🔗 관련레포 및 Reference

- [vanillaJS Redux 코드](https://github.com/sukyoungshin/reactJS/blob/master/vanilla-redux)
- [Redux공식문서](https://ko.redux.js.org/introduction/getting-started/)
- [Redux Terminology, Redux Application Data Flow](https://ko.redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#redux-terminology)
- [React Redux 불변성 가이드](https://daveceddia.com/react-redux-immutability-guide/)
