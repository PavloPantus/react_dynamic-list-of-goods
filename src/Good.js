import React from 'react';
import PropTypes from 'prop-types';

const Good = ({ OneGood }) => (
  <li style={{ color: OneGood.color }}>
    {OneGood.name}
  </li>

);

Good.propTypes = {

  OneGood: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,

};

export default Good;
