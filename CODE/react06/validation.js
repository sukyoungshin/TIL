/* 
유효성검사 관련 라이브러리
설치 : npm install yup

Yup을 이용해서 유효성 검사 규칙(스키마) 만들기
*/

// as XXX: alias (별칭) XXX를 붙이겠다.
import * as Yup from 'yup';

// 이메일 관련 스키마
export function vEmail() {
  // 각각의 인자들 : 경고 메시지
  return Yup.string('').email('올바른 이메일 주소를 입력하세요.').required('이메일 주소가 필요합니다.');
};

// 비밀번호 검사할 땐 정규표현식을 쓰자
export function vPassword() {
  let check1 = /^(?=.*[a-z])(?=.*[0-9]).{8,15}$/;
	let check2 = /^(?=.*[a-z])(?=.*[^a-z0-9]).{8,15}$/;
	let check3 = /^(?=.*[^a-z0-9])(?=.*[0-9]).{8,15}$/;

  return Yup.string('').matches(check1 || check2 || check3, {
    message: '영문/숫자 포함, 8~15자를 입력해주세요'
  }).required('패스워드가 필요합니다.');
}


