// 1. boolean
true && true; // true
true && false; // false
true || fakse; // true
false || true; // true

// 2. 연산자 && 또는 ||
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  // if (animal) {
  //   return animal.name;
  // }
  // return undefined;

  // 위의 코드는 줄여서 이렇게 표현가능
  return animal && animal.name;
}

const NAME = getName(dog);
console.log(NAME);

// 3. &&
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // null
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // 1
console.log(1 && 1); // 1

const object = null;
const name = object && object.name;
console.log(name); // null

// 4. ||
const namelessDog = {
  name: '', /* ''은 falsy한 값 */
};
function getName(animal) {
  const NAME = animal && animal.name; // false
  if (!NAME) {
    return '이름이 없는 동물입니다.';
  }
  return NAME;
}
const name = getName(namelessDog);
console.log(name);

console.log(false || 'hello'); // hello
console.log('' || '이름없음'); // 이름없음
console.log(null || '널이다~'); // 널이다~
console.log(undefined || 'defined 되지 않았다!'); // defined 되지 않았다!
