# React-redux

리액트를 다루는 기술을 보며 학습한 내용을 정리한 레포입니다.

## 패턴

리액트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것입니다. 여기서 프레젠테이셔널 컴포넌트란 주로 상태 관리가 이루어지지 않고, 그저 props를 받아 와서 화면에 UI를 보여 주기만 하는 컴포넌트를 말합니다. 이와 달리 컨테이너 컴포넌트는 리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 합니다.

<img alt="" style="width: 600px; height: auto;" src="https://thebook.io/img/080203/432.jpg">

이러한 패턴은 리덕스를 사용하는 데 필수 사항은 아닙니다. 다만 이 패턴을 사용하면 코드의 재사용성도 높아지고, 관심사의 분리가 이루어져 UI를 작성할 때 좀 더 집중할 수 있습니다.

UI에 관련된 프레젠테이셔널 컴포넌트는 src/components 경로에 저장하고, 리덕스와 연동된 컨테이너 컴포넌트는 src/containers 컴포넌트에 작성합니다.

## 코드 작성 방식

리덕스를 사용할 때는 액션 타입, 액션 생성 함수, 리듀서 코드를 작성해야 하는데요. 이 코드들을 1) 각각 다른 파일에 작성하는 방법도 있고, 2) 기능별로 묶어서 파일 하나에 작성하는 방법도 있습니다.

### 1. 가장 일반적인 구조

<img alt="" style="width: 200px; height:auto;" src="https://thebook.io/img/080203/436.jpg">
actions, constants, reducers라는 세 개의 디렉터리를 만들고 그 안에 기능별로 파일을 하나씩 만드는 방식입니다. 코드를 종류에 따라 다른 파일에 작성하여 정리할 수 있어서 편리하지만, 새로운 액션을 만들 때마다 세 종류의 파일을 모두 수정해야 하기 때문에 불편하기도 합니다. 이 방식은 리덕스 공식 문서에서도 사용되므로 가장 기본적이라 할 수 있지만, 사람에 따라서는 불편할 수도 있는 구조입니다.
<br />

### 2. Ducks 패턴

<img alt="" style="width: 200px; height: auto;" src="https://thebook.io/img/080203/436_2.jpg">

액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 다 작성하는 방식입니다. <br/>
이러한 방식을 Ducks 패턴이라고 부르며, 앞서 설명한 일반적인 구조로 리덕스를 사용하다가 불편함을 느낀 개발자들이 자주 사용합니다.

리덕스 관련 코드에 대한 디렉터리 구조는 정해진 방법이 없기 때문에 마음대로 작성해도 되지만, 위 두 가지 방법이 주로 사용됩니다. 이 책에서는 두 번째로 소개한 방식인 Ducks 패턴을 사용하여 코드를 작성하겠습니다.

Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 ‘모듈’이라고 합니다.

## REFERENCE 및 관련레포

### REFERENCE

- 리액트를 다루는 기술 [17강](https://thebook.io/080203/ch17/)
- [ToastUI : Redux분석하기](https://ui.toast.com/weekly-pick/ko_20170331)

### 관련레포

- React-redux 예제코드 : [💡예제1](https://github.com/sukyoungshin/reactJS/tree/master/02-react-redux-velopert), [예제2](https://github.com/sukyoungshin/reactJS/tree/master/01-react-redux-nomard), [예제3](https://github.com/sukyoungshin/reactJS/tree/master/shoeshop)
- Pure-redux 관련레포 : [이론](https://github.com/sukyoungshin/TIL/blob/main/JS/03_redux.md),
  [vanilla-redux 예제](https://github.com/sukyoungshin/reactJS/tree/master/vanilla-redux)
