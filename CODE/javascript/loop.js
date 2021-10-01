{
  // for

  // ex1
  for (let i = 0; i < 10; i++) {
    console.log('@@ plus', i);
  };
  // ex2
  for (let i = 10; i >= 0; i-=2) {
    console.log('@@ minus', i);
  };
  // ex3
  const names = ['멍멍이', '야옹이', '멍뭉이'];
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  };
}

{
  // while

  // ex1
  let i = 0;
  while (i < 10) {
    console.log('@@while', i);
    i++;
  };
}
{
  // ex2
  let i = 0;
  let isFun = false;

  while (!isFun) {
    console.log('@@while의 i', i);
    i++;
    if (i === 30) {
      isFun = true;
    }
  };
}

{
  // for...of --> 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문
  const numbers = [10, 20, 30, 40, 50];
  for (let number of numbers) {
    console.log(number);
  };

  // 위와 동일
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  };
}

{
  const doggy = {
    name : '멍멍이',
    sound : '멍멍',
    age : 2
  };
  // 객체의 정보를 배열 형태로 받아올 수 있는 함수
  console.log(Object.entries(doggy));
  console.log(Object.keys(doggy));
  console.log(Object.values(doggy));

  // for ... in --> 객체를 위한 반복문
  for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`);
  }
}

{
  // break, continue  --> for문,while문 어디에서든 사용가능
  for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 2를 스킵하고 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 5가 되면 반복문 종료
  }
}

// 연습과 퀴즈
{
  function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  };

  const result = sumOf([1, 2, 3, 4, 5]);
  console.log('@@ sum', result);
}

// Quiz 1
// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중
// 3보다 큰 숫자로만 이루어진 배열을 만들어서 반환해보세요
{
  // my code :
  function biggerThanThree(numbers) {

    let sum = [];
    for (number of numbers) {
      // if (number <= 3) continue;
      if (number > 3) sum.push(number);
    }
    return sum;

  }

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log('@@result', biggerThanThree(numbers)); // [4, 5, 6, 7]
}

{
  // teacher's code : 
  function biggerThanThree(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 3) {
        array.push(numbers[i]);
      }
    }
    return array;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]
}