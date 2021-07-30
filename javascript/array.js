// 1. ARRAY
  const array = [1, 'blahblah', {}, 4];
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
  console.log(array[4]);

  const objects = [
    {name: '멍멍이'},
    {name: '야옹이'},
  ];
  console.log(objects.length); // 2
  objects.push({name: '멍뭉이'});
  console.log(objects); // [{name: '멍멍이'},{name: '야옹이'},{name: '멍뭉이'})]
  console.log(objects.length); // 3 

  // 2. 내장함수 forEach
  // for문을 대체할 수 있음.
  const superheros = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

  // 방법1
  for (let i = 0; i < superheros.length; i++) {
    console.log(superheros[i]);
  }

  // 방법2-1 : forEach
  function print(hero) {
    console.log(hero);
  }
  superheros.forEach(print);

  // 방법 2-2
  superheros.forEach(function(hero) {
    console.log(hero);
  })

  // 방법 2-3
  superheros.forEach((hero) => {
    console.log(hero);
  })

console.clear();

// 3. 내장함수 map
// 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어집니다.
const array2 = [1,2,3,4,5,6,7,8];
array2.map(num => (console.log(num * 2))); // 2, 4, 6, 8, 10, 12, 14, 16

// 4. 내장함수 filter
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

// 아래 두 코드 중 하나를 사용하면 됨
// const tasksNotDone = todos.filter(todo => todo.done === false);
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
