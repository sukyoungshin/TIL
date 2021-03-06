# 클래스형 컴포넌트

## 1. CLASS 기반의 컴포넌트
- 원래 리액트 컴포넌트는 클래스 기반만 있었다!
- 이유는 함수형 컴포넌트는 상태관리, 생명주기 함수 등이 지원되지 않았기에..
- 하지만 리액트Hook이 등장 이후 대세가 함수형으로 기울었다.
- 과거 코드의 유지보수 및 클래스가 표준인 몇몇 팀에 대응하기 위해서 클래스형 컴포넌트도 알고 있어야 한다.
<br><br>
## 2. 클래스 컴포넌트의 상태관리
- 클래스 내부 속성 state는 상태로써 관리가 된다.
- 상속 메소드 setState를 통해 state를 변경하면, 리렌더가 된다.
- setState를 사용하면 스프레드 연산 등의 기법을 쓰지 않아도 다른 키가 복사된다.
<br><br>
## 3. 클래스 컴포넌트의 생명주기 메소드
- 초기 생성, 리렌더에 대한 생명주기 메소드가 제공된다.
- constructor : 생성자 메소드, 컴포넌트가 최초로 생성될 때 제일 먼저 호출된다.
- 따라서 생성자에서는 주로 상탯값을 초기화하고, 속성props값으로 초기 필요한 처리를 해주곤 한다.
- componentDidMount : 최초 렌더링 된 직후에 호출되는 메소드.
- componentDidUpdate : 리렌더 직후에 호출되는 메소드.
(Mount: 최초 렌더를 의미함)
