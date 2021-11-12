# 33 Concepts of JavaScript

노마드코더 33 Concepts of JavaScript를 학습하고 정리한 문서입니다.

## 10_SetTimeout, setInterval and requestAnimationFrame

### setTimeout()

함수를 setTimeout에게 주면, 몇 초 기다린 후에 setTimeout이 함수를 부른다. <br/><br/>

사용방법<br/>
⭕ <br/>

- `setTimeout(() => console.log('hi'), 1000);` // 1000 (밀리세컨드) : 이 함수를 큐에 올리기까지의 최소대기시간 (추가지연 있을 수 있음)
- `setTimeout(console.log, 1000, 'hi');` // 1초 지연 후 'hi' 문자열 출력
- setTimeout을 취소하고 싶을 때,

```
const helloT = setTimeout(console.log, 1000, 'hello');
console.log(helloT); // setTimeout이 생성될 때마다 ID값이 리턴됨
clearTimeout(helloT);
```

  <br/>

❌ <br/>

- `setTimeout(console.log('hi'), 1000);` // 바로 실행됨
  <br/>

### setInterval()

setInterval은 정해진 매 시간마다 함수를 호출함. 최소 interval을 1000ms보다 낮게 지정하면 크롬이 자동으로 1s로 맞춤 <br/><br/>

사용방법<br/>
setTimeout과 동일<br/><br/>

### requestAnimationFrame()

애니메이션을 위한 메서드. before repainting the browser (이미지렌더링) 함수를 실행함. <br/>
브라우저가 업데이트 될 때마다 animation frame을 요청하여 애니메이션을 수정<br/><br/>

```
const sayHi = () => {
  console.log('hi');
  requestAnimationFrame(sayHi);
};

requestAnimationFrame(sayHi); // animation이 굉장히 빠르게 실행됨
```

CPU, 그래픽카드에 최적화 되어있음
ex) 탭을 이동하면 크롬은 이 이벤트를 발생시키지 않음. 해당 screen을 paint하는 것이 아니기 때문
