import React, { Component } from 'react';
import { connect } from 'react-redux';

export const createStoreConnector = (mapStateToProps, mapDispatchToProps) => InnerComponent => {

  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(InnerComponent);

  return class ReduxStoreConnectionWrapper extends Component {
    render() {
      return (
        <ConnectedComponent {...this.props} />
      );
    }
  };
};

export default createStoreConnector;

export const createStateConnector = mapStateToProps =>
  createStoreConnector(mapStateToProps, dispatch => ({}));

export const createActionsConnector = mapDispatchToProps =>
  createActionsConnector(state => ({}), mapDispatchToProps);