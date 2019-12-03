import React, { memo } from 'react';
import './footer.scss';

const Footer = memo(({ ...props }) => {
  return (
    <footer className='footer'>
      <span>Copyright 2019 Gevorg LLC</span>
    </footer>
  )
});

Footer.propTypes = {};

export default Footer;