import React from 'react';
import PropTypes from 'prop-types';
import Good from './Good';

const GoodsList = ({ goods }) => (
  <ul className="goodsList">
    {
      goods.map(good => <Good key={good.id} OneGood={good} />)
    }
  </ul>
);

GoodsList.propTypes = {

  goods: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string,
      id: PropTypes.number,
      color: PropTypes.string,
    }
  )).isRequired,

};

export default GoodsList;
