# calculator

노마드코더 바닐라JS 크롬앱만들기 학습하며 배운 내용을 정리한 파일입니다.

## function

```
const calculator = {
  add : function (a, b) {
    return a + b;
  },
  minus : function (a, b) {
    return a - b;
  },
  divde : function (a, b) {
    return a / b;
  },
  times : function (a, b) {
    return a * b;
  },
  power : function (a, b) {
    return Math.pow(a, b);
  },
};

const timesResult = calculator.times(10, minusResult); // -50
const plusResult = calculator.add(2, 3); // 5
const minusResult = calculator.minus(plusResult, 10); // -5
const timesResult = calculator.times(10, minusResult); // -50
const divdeResult = calculator.divde(timesResult, plusResult); // -10
const powerResult = calculator.power(divdeResult, minusResult); // -0.000009999999999999999
```

## NOTE :

- const, let, var 같은 variable(변수)에 (return값을 갖는 함수를) 할당하면 'return값이 출력됨'

```
const calculator = {
  add : function (a, b) {
    return a + b;
  },
};

const plusResult = calculator.add(2, 3); // return 5
console.log(plusResult); // expected result : 5
```

- 만약, 함수 내부에서 return 대신 (console.log()를 지정하여 할당하면), 그 variable은 해당 'function의 결과 type을' 갖게 됨 (result : undefined)

```
const calculator = {
  add : function (a, b) {
    console.log(a + b);
  },
};

const plusResult = calculator.add(2, 3);
console.log(plusResult); // expected result : undefined
```

## Number method

- parseInt() : string -> number (type change)

```
const age = parseInt( prompt('How old are you ?') );
console.log( typeof age ); // number
```

- isNan()

```
// false면 숫자, true면 숫자아님
console.log(isNaN(age)); // means : age is Not a Number
```

## Logical operator

- [ Logical OR (||) ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR) : 둘 중 하나만 true면 true

```
true || true === true;
false || true === true;
true || false === true;
false || false === true;
```

- [ Logical AND (&&) ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) : 둘 다 true여야 됨

```
true && true === true;
false && true === false;
true && false === false;
false && false === false;
```

```
// true
if (true || false || false) {
   console.log('hi');
};
```

## Conditional

```
// user에게 number를 받아온다 (parseInt : string -> number)
const age = parseInt( prompt('How old are you ?') );

// 조건문
if (isNaN(age) || age < 0) {
  console.log('Please write a real positive number!');
} else if (age < 18) {
  console.log('You are too young');
} else if (age >= 18 && age <= 50) {
  console.log('You can drink');
} else if (age > 50 && age <= 80) {
  console.log('You\'d better not drink for your health!');
  // 작업순서 유의
} else if (age === 100) {
  console.log('wow you are wise!');
} else if (age > 80) {
  console.log('You can do whatever you want');
} else {
  console.log('You can\'t drink');
};
```

## Reference

- [ Trailing commas ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Trailing_commas)
