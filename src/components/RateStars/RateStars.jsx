import React, { memo } from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

import './rateStars.css';
import { rateConvert } from '../../core/helpers/rateHelpers';

const RateStars = memo(({ rate,...props }) => {
  return (
    <StarRatings
      changeRating={props.onChange}
      rating={rateConvert(rate)}
      starDimension="20"
      starSpacing="2px"
      starRatedColor='#FFFFFF'
      starHoverColor='#FFFFFF'
      starEmptyColor='#7ebfe1'
    />
  )
});

RateStars.propTypes = {
  rate: PropTypes.number,
  onChange: PropTypes.func,
};

export default RateStars