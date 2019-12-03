import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = memo(({
  icon = null,
  contentClassName = '',
  ...props
}) => {
  return (
    <div className={`input-content ${contentClassName}`}>
      <input {...props}/>
      {icon}
    </div>
  )
});

Input.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  icon: PropTypes.any,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'])
};

export default Input;