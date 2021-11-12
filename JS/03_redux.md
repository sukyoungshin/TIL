# Redux 라이브러리

노마드코더 리덕스101 강의를 듣고 학습한 내용을 정리한 파일입니다. <br/>

## Redux

- redux : `JavaScript` application의 `state(상태)를 관리`하는 방법
- redux는 VanillaJS, Vue.js, Angular.js, React.js 어디에서든 사용가능함
- redux는 React에 의존하는 라이브러리가 아님
- redux 설치 : `yarn add redux`

## Redux's flow

#### 1. data(state)를 저장하는 공간을 생성

- `import { createStore } from 'redux';`
- redux에는 createStore라는 function이 있음.
- store : data(state)를 저장하는 공간을 생성
  <br/>

#### 2. dispatch를 사용하여 message(action)를 redux에게 전달
   `store.dispatch({ type : 'ADD' });`
   <br/>

#### 3. redux가 reducer를 호출
#### 4. reducer 내부의 조건에 맞도록 state값을 바꾸어서 return
- 불변성을 유지해줘야함.

<br/>

`createStore`

- redux에는 createStore라는 function이 있음.
- store : data(state)를 저장하는 공간을 생성
- reducer : data를 modify 해주는 함수. application에 있는 data를 return함

- reducer : data's modifier
  this is the only func(), which changes the state of your application's data. And this func returns the data/state of your application.
- action : this makes the data/state change.

<br/>

## 🔗 관련레포

- [vanillaJS Redux 코드](https://github.com/sukyoungshin/reactJS/blob/master/vanilla-redux)
