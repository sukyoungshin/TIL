// Truthy and Falsy

function print(data) {
  // null checking
  // if (person === undefined || person === null) {
  //   return;
  // }

  // 위의 코드를 더 쉽게 하는 방법:
  if (!data) {  /* !data === true */
    console.log('RETURN');
    return;
  }
  console.log(data.name);
}
const DOG = { name: '멍멍' };
print(DOG); // 멍멍

const person = null;
print(person); // RETURN

// TRUE
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
// NOTE : falsy한 값 : undefined, null, 0, '', NaN

// FALSE
// falsy한 값을 제외하면 전부 truty
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});


const value = {};
const truthy = !!value;
console.log(truthy);