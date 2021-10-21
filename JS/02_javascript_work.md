# How JavaScript Works

## NOTE

- Javascript reads HTML as document (object)

```
// 브라우저 콘솔창에 아래 내용을 입력해보면 알 수 있음
document; // object
document.title;
document.title="lalala"; // document title이 변경됨 (우선순위 : HTML < JS)
document.location;
document.body;
// - console.log 와 console.dir : https://jongbeom-dev.tistory.com/115
```

<br><br>

## JavaScript를 사용하는 방법

- 1. document을 가져온다 (DOM search) \*
- 2. document를 바꾼다 (DOM control) \*
  <br><br>
  <hr>

### 1. document을 가져온다 (DOM search) \*

#### DOCUMENT.getElementById('아이디명');

```
<h1 id="title">Grab me!</h1>
```

```
const title = document.getElementById('title'); // DOM element selectd
title.autofocus = true; // 예를 들어 이런식으로 변경가능 (의미없음)
title.className; // 클래스명 조회
title.innerText = 'Got you'; // 내부 텍스트 변경 (Grab me -> Got you)
```

#### DOCUMENT.getElementByClassName('클래스명'), DOCUMENT.getElementByTagName('태그이름)

```
const hellos = document.getElementsByClassName('hello'); // HTMLCollection
const title = document.getElementsByClassName('hello'); // HTMLCollection
const h1 = document.getElementsByTagName('h1'); // HTMLCollection
```

- `NOTE` : HTMLCollection (유사배열), array형태이지만 실제 Array는 아님. 따라서 HTMLCollection에선 배열method를 사용할 수 없음. 단, 배열 프로토타입에서 메서드를 빌려오면 배열메서드를 사용할 수 있다.

```
const NUMBERS = Array.from(NUMBER).map((arr) => console.log(arr.innerText));
```

#### DOCUMENT.quesrySelector('.CSS선택자')

- element를 CSS selector방식으로 검색할 수 있음 (ex. h1:first-child)
- 하나의 element만 반환

```
const easyh1 = document.querySelector('.hello h1:first-of-type'); //
const arrayh1 = document.querySelectorAll('.hello h1'); // NodeList : array형태
```

```
const querySearch = document.querySelector('#hello'); // querySelector은 css selector를 반환
const idSearch = document.getElementById('hello'); // getElementById는 id값을 반환
```

<hr>

### 2. document를 바꾼다 (DOM control)

- Event [event handler](https://developer.mozilla.org/ko/docs/Web/Events)

```
<div class="hello" id="hello">
  <h1>Grab me!</h1>
</div>
<div class="hello">
  <h1>Grab me!</h1>
</div>
<div class="hello">
  <h1>Grab me!</h1>
</div>
```

```
const innerH1 = document.querySelector('.hello:first-of-type h1');
function handleTitleClick() {
  console.log('h1 was clicked!');
  innerH1.style.color = 'blue';
  innerH1.innerText = 'Bye';
};
function handleMouseEnter() {
  innerH1.innerText = 'Mouse is here';
};
function handleMouseLeave() {
  innerH1.innerText = 'Mouse is gone';
};

// @@ event를 등록하는 방법은 3가지가 있음 (방법마다 장단점이 있음)
// 1. addEventListener
// - 장점 : removeEventListener을 통해 등록한 이벤트를 삭제할 수 있음
innerH1.addEventListener('click', handleTitleClick);
innerH1.addEventListener('mouseenter', handleMouseEnter);
innerH1.addEventListener('mouseleave', handleMouseLeave);

// 2. onEvent
innerH1.onclick = handleTitleClick;
innerH1.onmouseenter = handleMouseEnter;
innerH1.onmouseleave = handleMouseLeave;

// 3.
```

- `NOTE` : 사용하고 싶은 EventHandler를 찾는 방법?

```
// 1. mdn에서 직접 탐색
// HTMLHeadingElement (JS에서 관점) : https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
// Element eventHandlers: https://developer.mozilla.org/en-US/docs/Web/API/Element

// 2. DOM객체를 선택하여, console.dir()에 넣어주면 좌르륵 리스트가 나옴. 이 중에서 찾아서 사용
```

- More Events...

```
// window이벤트 : wifi 끄기

function handleWindowResize() {
  document.body.style.backgroundColor = 'lightblue';
  const bodycheck = document.body;
  console.log(bodycheck);
};
function handleWindowCopy() {
  alert('copy');
};
function handleWindowOffline() {
  alert('SOS no wifi!');
};
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);

// wifi 끄는 방법
// f12 (개발자도구) -> Network -> No throttling 클릭 -> 목록 리스트 중에서 offline클릭. 그걸 누르면 현재 브라우저 자체에서 네트워크가 offline으로 설정되어 와이파이 끊겼을 시 코드가 작동되는 것을 볼 수 있습니다.
// 그리고 다시 기본 설정이었던 no throttling 을 클릭하면 와이파이 연결 시 코드가 작동되는 것을 볼 수 있습니다.
```
