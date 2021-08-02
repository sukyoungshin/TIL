import React from 'react';
import PropTypes from 'prop-types';

// props: 컴포넌트에 전달된 값을 모아놓은 객체
// 어떠한 타입을 전달해도 가능하다. 따라서 타입을 제한해줄 필요가 있음
// 타입을 제한해주기 위해 prop-types를 사용한다.
// 설치 : npm install prop-types

// props = { book : "일인칭 단수"};
// function BOOK(props) {
//   const {book} = props;  
//   return <h2>재미있는 {book}</h2>;
// };

function BOOK({book}) {
  return <p>책 제목 :  {book}</p>;
};

function Cpp() {

  const books = ['해리포터', '눈먼자들의 도시', '세계는 한권의 책'];

  return (
  <>
    <h1>MY BOOK LISTS</h1>
    {
      books.map((title, idx) => <BOOK key={idx} book={title} />)
    }
  </>
  );
};

// BOOK 컴포넌트의 book속성값은 문자열만 오도록 '제안'
// isRequired : 무조건 넣어야 해!
BOOK.propTypes = {
  book: PropTypes.string.isRequired
};

export default Cpp;