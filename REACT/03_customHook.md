# 커스텀 Hook

- 자신만의 훅 만들기 : [ React공식문서 ](https://ko.reactjs.org/docs/hooks-custom.html)

## WHY ?

- 코드의 재사용을 용이하게 하고, 번들 시 코드의 용량을 줄여주기 위해 사용한다.
- App이 비즈니스로직으로 비대해진다면 custom hook을 사용해서 비즈니스 로직과 상태를 분리해내는 방법을 사용하는 것이 좋다.
- react-async, react-use, react-spectrum 과 같이 잘 만들어진 Hooks 오픈소스도 살펴보자.

  `yarn add react-async`

## HOW TO USE

- useEffect, useState, useReducer 같은 리액트에 내장되어 있는 훅을 이용하여, 원하는 기능을 구현하고 컴포넌트에서 사용하고 싶은 값을 반환해주면 된다.

## REFERENCE

- [ 리액트 hooks에 대해 이해하기(번역) ](https://github.com/sbyeol3/articles/issues/12)
- [ react-async레포 ](https://github.com/async-library/react-async)
- [ react-async 밸로퍼트 깃북 ](https://react.vlpt.us/integrate-api/04-react-async.html)
