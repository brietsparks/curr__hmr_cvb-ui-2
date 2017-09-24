import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { onLoginSuccessRouteKey } from './constants';

import connectToAuthStore from '../../state/Auth/connector';

class Callback extends Component {
  componentWillMount() {
    this.props.login();
  }

  render() {
    const { user } = this.props;

    const onLoginSuccessRoute = localStorage.getItem(onLoginSuccessRouteKey);

    return (
      <div style={style}>
        <p>Logging in...</p>

        { user && user.id &&
          <Redirect to={onLoginSuccessRoute}/>
        }

        {/*<img src={loading} alt="loading"/>*/}
      </div>
    );
  }
}

export default connectToAuthStore(Callback);


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