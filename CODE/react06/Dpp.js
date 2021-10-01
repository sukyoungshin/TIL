import React from 'react';
import CppForm from './Cpp';

class Dpp extends React.Component{

  constructor(props) {
    super(props);
    this.state = { loggedIn : false }
  };

  handleLogIn = () => this.setState({ loggedIn : true })

  render() {
    const { loggedIn } = this.state;

    return (
    <>
      { loggedIn ? <h1>환영합니다</h1> : <CppForm handleLogIn={this.handleLogIn}/> }
    </>
    );
  }
};

export default Dpp;