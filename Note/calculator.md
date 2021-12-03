# Calculator

Vanilla JS 프로젝트인 계산기Calculator를 작업하며 겪었던 이슈 및 배운 내용을 정리한 파일입니다.<br/><br/>

## Learn & Issues
### 좋은 변수명에 대한 고민
변수명은 길어도 괜찮으니 '직관적'으로 짜야한다. 단, 의미전달이 분명해야 한다. 🔗[좋은 변수명 짓기 팁](https://remotty.github.io/blog/2014/03/01/hyogwajeogin-ireumjisgi/)
<br/><br/>

### 부동소수점 실수
- 자바스크립트에서는 `0.1 + 0.2 = 0.30000000000000004`이 나온다. <br/>

> 💡 Solution :  만일 `0.1 + 0.003 `값을 입력했다면, 각 숫자에 1000을 곱해서 정수로 만들어 준 뒤에 값을 계산하고, 그 후에 다시 1000으로 나누어서 정수로 바꿔줌 🔗[부동소수점 실수에 관하여](https://velog.io/@sgyoon/2019-09-15-01)

<br/>

### 캡슐화
함수의 외부환경에있는 변수를 쓰는 것을 캡슐화라고 한다. 🔗[클로저, 그리고 캡슐화와 은닉화](https://meetup.toast.com/posts/90)

```
// backup.js

function calculate() {
  // 입력받은 숫자들(oldNum, currentNum)을 switch문에 넣고 연산을 돌린다.
  oldNum = Number(oldNum);
  currentNum = Number(currentNum);

  switch (operator) {
    case '÷':
      resultNum = ( oldNum * standard )  / ( currentNum * standard );
      resultNum = resultNum / Math.pow(standard, 2); 
      break;
    case '×':
      resultNum = ( oldNum * standard ) * ( currentNum * standard ); // 1.1*3 (standard: 10) => 11 * 30 = 33 
      resultNum = resultNum / Math.pow(standard, 2); 
      break;
    case '−':
      resultNum = ( oldNum * standard ) - ( currentNum * standard );
      resultNum = resultNum / standard; 
      break;
    case '+':
      resultNum = ( oldNum * standard ) + ( currentNum * standard );
      resultNum = resultNum / standard; 
      break;

    // oldNum이 없으면 (두번째 숫자를 입력X 경우), currentNum을 화면에 출력
    default:
      resultNum = currentNum;
      break;
  };

  RESULT.value = resultNum; 
  oldNum = 0; 
  currentNum = resultNum; 
};

```


### 메서드 inclues & indexOf 
배열에서 필요한 값을 찾아내는 메서드

```
console.log("123.3".includes(".")); // true
console.log("123.3".indexOf(".")); // 3
console.log("123.3".indexOf(".") > -1 ); // true (-1은 값 없을때)
console.log("1.234".length - "1.234".indexOf('.') - 1);// 2면 100, 3 = 10*3, 4 = 10*4
```

<br>

### 메서드 Math.pow
Math.pow(num1, num2) : num1의 num2승

```
const result = Math.pow(10, 2);
console.log(result); // 100 (10의 2승)
```

<br><br>


## Reference
🔗 [LIVE DEMO](), [깃허브코드](https://github.com/sukyoungshin/vanillaJS/tree/master/calculator) <br/>
[MDN 자바스크립트 재입문](https://developer.mozilla.org/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
