/* 
formik: form wrapper

npm install formik
*/
import React from 'react';
import { Formik } from 'formik';

class CppForm extends React.Component{

  render() {
    return(
      <>
        <Formik
          /* formik으로 관리할때는 this.state가 아니라, formik에 전달한다. */
          initialValues={{ email: '', password: '' }}
          /* 기존 form에선 제출하면 이벤트가 발생해서 e.preventDefault를 쓰지만, formik은 서버에 바로 제출되지 않으므로 value를 받아서 처리함 */
          onSubmit={(values) => {
            /* 
            로그인 가능한 계정을 지정
            email: korea@it.com
            password: koreais123
            */
            console.log(values.email === 'korea@it.com'); 
            console.log(values.password === 'koreais123');
            // 방법1 : if문을 쓴다. 
            // if (values.email === 'korea@it.com' && values.password === 'koreais123') {
            //   this.props.handleLogIn()
            // }

            // 방법2 : 단축평가
            (values.email === 'korea@it.com' && values.password === 'koreais123') && this.props.handleLogIn();
            
          }}
        >
        {/* Formik사이의 공간 : formik에게 관리받는 공간 */}
          { 
            formProps => 
            <form
              /* formProps.handleSubmit === formik에 있는 onSubmit */ 
              onSubmit={formProps.handleSubmit}
            >
              <input 
                type="text" 
                /* name을 email로 하면, initialValue의 email과 연결됨 */
                name="email"
                /* formProps.handleChange를 지정하면 initialValue 변화에 전달해줌 */
                onChange={formProps.handleChange} 
                value={formProps.values.email}
              /> <br />
              <input 
                type="password" 
                name="password"
                onChange={formProps.handleChange} 
                value={formProps.values.password}
              /> <br />
              <input type="submit" value="로그인" /> 
            </form>
          }
        </Formik>
      </>
    );
  }

}

export default CppForm;