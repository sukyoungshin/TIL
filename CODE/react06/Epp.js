/* 
유효성검사 관련 라이브러리
설치 : npm install yup
*/
import React from 'react';
import { useFormik } from 'formik'; /* formik에서 HOOK 제공 */
import { vEmail, vPassword } from './utilities/validation'; // 
import * as Yup from 'yup';

function Epp() {

  // 폼을 관리할 수 있는 객체
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({ email: vEmail(), password: vPassword() }),
    onSubmit: (values) => {
      console.log(values);
    }
  });


  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
        type="text" 
        name="email"
        onChange={formik.handleChange} 
        value={formik.values.email}
      /> 
      <p>{formik.touched.email ? formik.errors.email : ''}</p>{/* formik 이메일에 문제가 있으면 에러메시지를 띄운다. */}
      <input 
        type="password" 
        name="password"
        onChange={formik.handleChange} 
        value={formik.values.password}
      />
      <p>{formik.touched.password ? formik.errors.password : ''}</p>{/* formik 패스워드에 문제가 있으면 에러메시지를 띄운다. */}
      <input type="submit" value="로그인" /> 
    </form>
  );
};

export default Epp;