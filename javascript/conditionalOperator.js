const array = [1, 2];
let text = '';
if (array.length === 0) {
  text = '배열이 비어있습니다.';
} else {
  text = '배열이 비어있지 않습니다.';
}

// 위 코드는 삼항연산자로 간단하게 표현할 수 있다.
let text = array.length === 0 
? '배열이 비어있습니다' 
: '배열이 비어있지 않습니다';
console.log(text);


// 삼항연산자는 겹쳐쓰기도 가능 
// (하지만 이 경우엔 가독성이 좋지 않으므로 차라리 if문을 사용하는게 좋을것)
const condition1 = false;
const condition2 = false;

const value = condition1
  ? '와우!'
  : condition2 
    ? 'blahblah'
    : 'foo'

console.log(value);