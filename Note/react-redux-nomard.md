# react-redux-nomard

노마드코더 리덕스101 강의를 들으며 겪었던 이슈를 정리한 파일입니다.<br/><br/>

## Issues
### React-router Version

- 강의에서 사용하는 React-router-dom 버전과 최신 버전이 맞지 않아서 정상적으로 라우팅이 실행되지 않았다.
> 💡 Solution : react-router 공식문서를 확인하여, 새로운 syntax에 맞추어 진행 및 해결 🔗 [깃헙ISSUE](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#advantages-of-route-element), [React-router(v6)공식문서](https://reactrouter.com/docs/en/v6/getting-started/tutorial#introduction)

<br/>

### Redux Version
- 강의에서 사용하는 Redux 버전과 최신 버전이 맞지 않았고, 강의에서는 오래된 방식(`connect()()`)으로 Redux를 연동하였다.
> 💡 Solution : redux 공식문서를 확인하여, 최근 방식대로 `Hooks`를 사용하여 Redux를 연동하였다. 🔗[Redux 공식문서](https://redux.js.org/api/api-reference)

<br/>

### Redux Dev Tool
- 로컬에서 작업하던 도중, 잘 작동되고 있던 Redux Dev Tools가 갑자기 탭메뉴에서 사라지는 이슈 발생 (!!!)
- 라이브러리 버전 더블체크, 크롬 extensions 재설치, 라이브서버 껐다 켜기, 브라우저 재시작을 시도해봤으나 여전히 해결X

> 💡 Solution : /node_modules를 날리고 패키지 재설치하니 해결됨 (듸용)

<br/><br/>

## Reference

- [깃허브코드](https://github.com/sukyoungshin/reactJS/tree/master/react-redux-nomard)
