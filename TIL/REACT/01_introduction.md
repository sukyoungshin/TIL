# React

자바스크립트 라이브러리.
가상 DOM을 생성하여 동적으로 페이지에 렌더링한다.
JSX라는 문법을 토대로 컴포넌트를 생성할 수 있다.

## 리액트에 필요한 도구들

- 트랜스파일러(컴파일러) : 브라우저에서 실행 가능한 형태로 코드를 변환한다
- 모듈번들러 : 프로젝트 구조 안에서 다양한 목적의 다양한 소스를 하나의 프로젝트로 번들링(합쳐주는)해주는 소프트웨어적 도구 (ex.웹팩)

## CRA(create-react-app) 보일러플레이트

리액트 어플리케이션을 만들기 위해 필요한 프로젝트 구조 및 도구들을 완성하여 제공하는 것
(리액트를 CRA없이도 직접 빌드할 수 있음)

## JSX (JavaScript + HTML)

- 리액트에서 '생김새'를 정의할 떄 사용하는 문법
- 기본적으로 태그 형태로 요소를 만들되, 자바스크립트 코드가 입혀진 형태
- 규칙1 반드시 태그가 닫혀야 한다. ex. <img />
- 규칙2 자바스크립트 코드가 들어갈 때는 {}를 사용해 자바스크립트 표현식을 써 준다.
- 규칙3 단어 두개 이상 섞인 속성(attributes)에서는 카멜 표기법을 쓴다. ex. className, labelFor, htmlFor
- 규칙4 style은 문자열이 아닌 객체 리터럴(JSON)로 정의해야한다. ex. <p style={{color: 'white', fontSize: 16}}> P태그 스타일 입히기</p>
- 규칙5 주석 또한 자바스크립트 표현식으로 친다. {/_주석_/}
- 규칙6 기존 HTML 요소 이름은 소문자로, 커스텀 컴포넌트 이름은 대문자로 시작한다.

## attributes(특성) vs property(속성)

- 특성은 HTML에서 태그 안에 추가하는 부가기능, 속성은 자바스크립트 객체의 키
- JSX를 통해 만든 컴포넌트의 태그 안에 부가기능을 추가하면, 그것은 property
- 컴포넌트는 자신에게 전달된 property를 이용한 내부 로직을 가질 수 있다.

## state

- 사용자와의 상호작용에 따라 바뀌어야 하는 부분을 정의하는 방법
- 컴포넌트 상태 관리를 해 주는 데이터. 이것이 바뀌면 렌더링을 다시 시도한다.
- 함수형 컴포넌트에서는 useState라는 Hook을 사용해 상태 관리를 할 수 있다.

## CRA(create-react-app)은 노드 기반의 프로젝트이다.

- npm을 통한 패키지 추가가 가능하다.
- package.json과 node_modules의 존재가 필수적이다.
  만일 node_modules를 지웠다면, package.json이 있는 폴더에서 npm install 혹은 yarn add만 입력하면 다시 다운로드 됨~

## 컴포넌트 스타일링 하기

- 기본적으로 style 속성은 객체리터럴(JSON)을 사용한다. ex. <p style={{fontSize : 20, textAlign : 'center'}}> P태그 스타일링 </p>
- 직접 css 파일을 작성해 import해도 된다. (정적인 css)
- 스타일 패키지 중 인지도 면에서는 styled-components가 강력한 입지를 가지고 있다.
- SCSS는 점차 스타일시트의 대세로 자리잡아가고 있다.

## SPA(Single Page Application)에서 라우팅하기

- 라우팅이란, 요청 주소에 따라 다른 결과를 제공하는 일
- 한페이지앱에서, 라우팅은 라우터 모듈이 처리해줄 수 있다.
- 리액트 앱에서는 주로 react-router-dom을 사용한다.

## REFERENCE

- [Incremental DOM과 Virtual DOM 비교](https://ui.toast.com/weekly-pick/ko_20210819)
-
