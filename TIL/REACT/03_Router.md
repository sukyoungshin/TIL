# React-Router-Dom

## installation <br>

`yarn add react-router-dom` <br/>
`npm install react-router-dom`<br/><br/>

## 1. 리액트 라우팅하기 (react-router-dom)

- SPA 특성상 페이지 여러개를 이용한 이동이 불가능하다.
- 라우터 컴포넌트가 여러 컴포넌트 사이를 이동할 수 있게 해준다.
- 라우터의 종류 : 해시라우터, 브라우저 라우터 <br><br>

## 2. 라우터 간의 차이

==> 배포하고 나면 문제가 될 수 있는 부분으로 알아둘것<br>

### [ HashRouter (Hash, #) ]

- 정적인 페이지에 적합하다.
- 해쉬라우터는 새로고침을 해도 페이지 렌더링에 문제가 없다.
- 해쉬라우터의 경로에는 #기호가 붙어 검색엔진이 읽지 못한다.

### [ BrowserRouter ]<br>

- 동적인 페이지에 적합하다.
- 브라우저 라우터는 새로고침시 경로를 찾지 못하여, 추가 설정을 요구한다.
- 브라우저 라우터는 검색엔진(SEO 로봇)이 읽기에 수월하다.

## TERMS

- HashRouter : 라우터 (DOM 간의 이동을 시켜주는 라우터)
- Route : 경로를 받아서 처리해주는 wrapper 컴포넌트
- Switch : 경로들을 감싸는 wrapper (스위치 역할)
- Link : 링크...

## API

- 데이터를 fetching 하는 방법 : useState, useEffect로 데이터 로딩
- (RestAPI에 대하여)[https://meetup.toast.com/posts/92]

```
1. 요청의 결과
2. 로딩의 상태
3. 에러
```
