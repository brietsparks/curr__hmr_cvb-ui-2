import createConnector from '../createConnector';

import { stateKey } from './constants';
import * as actions from './actions';

const mapStateToProps = state => {
  return state[stateKey];
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

export default createConnector(mapStateToProps, mapDispatchToProps);