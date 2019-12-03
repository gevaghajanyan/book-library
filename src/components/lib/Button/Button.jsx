import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = memo(({ children, className,...props }) => {
  return (
    <button onClick={props.onClick} className={`lib-button ${className}`}>
      {children}
    </button>
  )
});

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  className: ''
};

export default Button