import React, { Component } from 'react';
import connectToAuthState from '../../state/Auth/connector';

class Callback extends Component {
  componentWillMount() {
    this.props.login();
  }

  render() {
    return (
      <div style={style}>
        <p>Logging in...</p>
        {/*<img src={loading} alt="loading"/>*/}
      </div>
    );
  }
}

export default connectToAuthState(Callback);


const style = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
};