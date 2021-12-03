# React-redux

리액트를 다루는 기술 [17강](https://thebook.io/080203/ch17/)을 학습하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues
### 컴포넌트 구조설계 structure
- 좋은 컴포넌트 구조에 대해 고민하게 된 첫 계기가 되었고, 리액트 구조패턴인 ducks 패턴에 대해 알게 되었다.<br/>
리액트 공식문서에도 딱히 추천하는 파일구조는 없지만, 인기있는 🔗[파일구조](https://ko.reactjs.org/docs/faq-structure.html)는 이런것이 있다.<br/>
해당 예문에서는 ducks 패턴으로 구조가 설계되어있다. 🔗[ducks 패턴](https://github.com/sukyoungshin/TIL/blob/main/REACT/05_reactRedux.md) *설명은 예문 아래에*

```
components/
  Counter.js
  Todos.js
containers/
  CounterContainer.js
  ToDosContainer.js
modules/
  counter.js
  index.js
  todos.js
App.js
index.js
```

- containers 폴더 :
  - 데이터를 처리하는 비즈니스 로직을 담당<br/>
- components 폴더 :
  - UI만 담당한다. (presentational components)
  - 부모컴포넌트에게 전달받은 props를 사용하기만 하면 된다.
- modules폴더 :
  - modules/index.js : 루트리듀서 (counter와 todos 함수를 합쳐줌)
  - modules/counter.js : 카운터 구현에 관련된 액션타입, 액션생성함수, 리듀서함수를 보관
  - modules/todos.js : 투두 구현에 관련된 액션타입, 액션생성함수, 리듀서함수를 보관


> 💡 Solution : ducks패턴이란 한 파일에 액션타입, 액션생성함수, 리듀서 함수를 한번에 보관하는 방식을 뜻한다. 

<br/>

## Reference
[깃허브코드](https://github.com/sukyoungshin/reactJS/tree/master/react-redux-velopert)
