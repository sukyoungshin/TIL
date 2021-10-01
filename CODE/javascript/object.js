'use strict';

{
  // basic
  const dog = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function() {
      console.log(this.sound);
    }
  };

  const cat = {
    name : '야옹이',
    sound : '야옹~'
  };

  cat.say = dog.say;
  dog.say(); // 멍멍!
  cat.say(); // 야옹~

  const catSay = cat.say;
  console.log( catSay ); // 함수가 잘 복사되었음
  catSay(); // this가 없으므로 undefined
}

{
  // getter and setter
  const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
  };

  console.log(numbers.sum); // 조회만 했으나 함수가 실행됨
  numbers.b = 5;
  console.log(numbers.sum); // 


  const dog = {
  _name : '멍멍이',

  get name() {
    console.log('_name을 조회합니다..');
    return this._name;
  },
  set name(value) {
    console.log('이름이 바뀝니다..' + value);
    this._name = value;
  }
  };

  console.log(dog.name); // 멍멍이
  dog.name = '뭉뭉이'; // ??? set함수의 parameter로 전달한건가?
  console.log(dog.name); // 뭉뭉이


  const numbers = {
  _a: 1,
  _b : 2,
  sum : 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.calculate();
  },
  set b(value) {
    this._b = value;
    this.calculate();
  }
  };

  console.log(numbers.sum); // 3
  numbers.a = 5;
  numbers.b = 7;
  numbers.a = 9;
  console.log(numbers.sum); // 16
}

{
  // spread operator
  const body = {
    width: 64,
    height: 174,
  };
  const brain = {
    iq : 1,
  };

  const person = {
    ...body,
    ...brain,
    name : 'Dunae',
  };

  console.log(person);
}