import PropTypes from 'prop-types';

export const authStateShape = {
  user: PropTypes.shape({
    id: PropTypes.string,
    scope: PropTypes.arrayOf(PropTypes.string),
    initialized: PropTypes.bool
  })
};

export default authStateShape;