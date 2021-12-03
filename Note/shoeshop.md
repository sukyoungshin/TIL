# Shoeshop

코딩애플 React 강의를 듣고 스스로 코드를 개선하며 겪었던 이슈를 정리한 파일입니다.<br/><br/>

## Learn & Issues

### structure
- 강의에서 진행되는 방식은 모든 컴포넌트가 한 파일에 위치해있어 가독성이 좋지 않았다.
> 💡 Solution : 재사용성 및 유지보수를 고려하여 컴포넌트 분리(component splits)를 진행하여 더 좋은 구조설계를 위해 노력하였다.

<br/>

### React-bootstrap
- 강의에서는 react-bootstrap이 아니라 일반 부트스트랩 문법을 사용하여 마크업구조가 한 눈에 들어오지 않았다.
> 💡 Solution : 공식문서를 참고하여 react-bootstrap 문법에 맞게 마크업구조를 개선하여 코드 가독성을 높였다. 🔗[리액트 부트스트랩](https://react-bootstrap.github.io/). 

<br/>

### React-router Version

- 강의에서 사용하는 React-router-dom 버전과 최신 버전이 맞지 않아서 정상적으로 라우팅이 실행되지 않았다.
> 💡 Solution : react-router 공식문서를 확인하여, 새로운 syntax에 맞추어 진행 및 해결 🔗 [깃헙ISSUE](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#advantages-of-route-element), [React-router(v6)공식문서](https://reactrouter.com/docs/en/v6/getting-started/tutorial#introduction)

<br/>

### React-redux Version
- 강의에서 사용하는 Redux 버전과 최신 버전이 맞지 않았고, 강의에서는 오래된 방식(`connect()()`)으로 Redux를 연동하였다. 
> 💡 Solution : redux 공식문서를 확인하여, 최근 방식대로 `Hooks`를 사용하여 Redux를 연동하였다. 🔗[Redux 공식문서](https://redux.js.org/api/api-reference), [Flux패턴](https://www.huskyhoochu.com/flux-architecture/)

<br/>

### Redux Dev Tools
- 로컬에서 작업하던 도중, 잘 작동되고 있던 Redux Dev Tools가 갑자기 탭메뉴에서 사라지는 이슈 발생 (!!!)
- 라이브러리 버전 더블체크, 크롬 extensions 재설치, 라이브서버 껐다 켜기, 브라우저 재시작을 시도해봤으나 여전히 해결X

> 💡 Solution : /node_modules를 날리고 패키지 재설치하니 해결됨 (듸용)

<br/>

## Reference
[깃허브코드](https://github.com/sukyoungshin/reactJS/tree/master/shoeshop) <br/>

🔗관련 레포:  <b>퓨어redux</b> [이론](https://github.com/sukyoungshin/TIL/blob/main/JS/03_redux.md),
[예제코드](https://github.com/sukyoungshin/reactJS/tree/master/vanilla-redux) | 
 <b>React-redux</b> [이론](https://github.com/sukyoungshin/TIL/blob/main/REACT/05_reactRedux.md), [예제코드1](https://github.com/sukyoungshin/reactJS/tree/master/02-react-redux-velopert), [예제코드2](https://github.com/sukyoungshin/reactJS/tree/master/01-react-redux-nomard), [예제코드3](https://github.com/sukyoungshin/reactJS/tree/master/shoeshop)

