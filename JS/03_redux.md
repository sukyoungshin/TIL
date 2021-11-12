# Redux 라이브러리

노마드코더 리덕스101 강의를 듣고 학습한 내용을 정리한 파일입니다. <br/>

## Redux

- redux : `JavaScript` application의 `state(상태)를 관리`하는 방법
- redux는 VanillaJS, Vue.js, Angular.js, React.js 어디에서든 사용가능함
- redux는 React에 의존하는 라이브러리가 아님
- redux 설치 : `yarn add redux`

## Data flow

#### 1. data(state)를 저장하는 공간을 생성
  
- store : data(state)를 저장하는 공간을 생성 `import { createStore } from 'redux';` <br/>
- reducer : data를 modify 해주는 함수( data's modifier). application에 있는 data를 return함 <br/>
  this is the only func(), which changes the state of your application's data. And this func returns the data/state of your application.<br/>
- action : this makes the data/state change.

#### 2. dispatch를 사용하여 message(action)를 redux에게 전달
   `store.dispatch({ type : 'ADD' });`
   <br/>

#### 3. redux가 reducer를 호출
#### 4. reducer 내부의 조건에 맞도록 state값을 바꾸어서 return
- 불변성을 유지해줘야함.

<img alt="Redux data flow diagram" src="https://ko.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif">

[이미지출처](https://ko.redux.js.org/tutorials/fundamentals/part-1-overview/)


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
  }
}

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

## Redux 장점
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
- 
