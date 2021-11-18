# Shoeshop

코딩애플 React 강의를 들으며 고민한 내용과 해결한 방법입니다.<br/>

## 삽질 및 해결노트

### ❌ ISSUE
강의에서 사용하는 Redux 및 React-router-dom 버전과 최신 버전이 맞지 않아서 생기는 여러가지 이슈들이 있었습니다.

### 🧐 시도해본 방법

- Redux 및 React-router 공식문서, stack overflow 서치를 통해 새로운 버전이 출시되었고 syntax 변경 때문임을 확인함
- react-router의 새로운 syntax에 맞추어 컴포넌트를 라우팅하여 문제해결 ⭕
- redux 공식 문서대로 방식을 바꾸었고, 기존버전과 기능이 상충되어 실행되지 않음을 확인하여 문제해결 ⭕

### 💡 결론

`버전체크`와 `공식문서`를 꼼꼼히 확인할 것 (공식문서 최고!) <br/><br/>

## 학습법에 대한 고민

> 사용방법(syntax) 자체가 아니라, `기본적인 사용원리(컨셉)`과 `메서드`를 파악하며 학습하는 것으로 학습전략 수정<br/>
> 프론트앤드는 버전 릴리즈가 빠르게 진행되기 때문에, 기본적인 원리를 숙지해야 syntax가 바뀌어도 금방 사용할 수 있기 때문.

## 📖 Reference

- [리액트 공식문서](https://ko.reactjs.org/)
- React-router-dom (v6) : [공식문서](https://reactrouter.com/docs/en/v6/getting-started/tutorial#introduction), [깃허브이슈](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#advantages-of-route-element)
- [Flux패턴](https://www.huskyhoochu.com/flux-architecture/)
- [리액트 부트스트랩](https://react-bootstrap.github.io/)
- 리다기 [16~17강](https://thebook.io/080203/)
