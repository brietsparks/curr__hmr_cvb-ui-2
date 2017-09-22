import React, { Component } from 'react';
import { connect } from 'react-redux';

export const createReduxConnector = (mapStateToProps, mapDispatchToProps) => InnerComponent => {

  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(InnerComponent);

  return class ReduxStoreConnectionWrapper extends Component {
    render() {
      return (
        <ConnectedComponent {...this.props} />
      );
    }
  };
};

export default createReduxConnector;