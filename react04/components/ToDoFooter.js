import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  font-size: 20px;
`;

const ToDoFooter = () => {
  return <>
  <hr />
  <Footer>
    <strong>&copy; All rights are reserved by SuKyoung Shin.</strong><br />
    <em>sukyoung.dev@gmail.com</em>
  </Footer>
  </>;
};

export default ToDoFooter;
