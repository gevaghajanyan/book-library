import React, { memo } from 'react';
import { Link } from 'react-navi';

import Input from '../lib/Input/Input';

import './header.scss';

import logo from '../../assets/images/logo/logo.png'
import search from '../../assets/images/search.svg'

const Header = memo(({ ...props }) => {
  return (
    <header className='header'>
      <img src={logo} alt="logo" className='header-logo'/>
      <Link
        className='nav-link'
        activeClassName='active'
        href='/'>
        Home
      </Link>
      <Link
        activeClassName='active'
        className='nav-link'
        href='/books'>
        All Books
      </Link>
      <div/>
      <Input
        placeholder='Search'
        icon={(
          <img
            src={search}
            alt="Search"
          />
        )}
      />
    </header>
  )
});

Header.propTypes = {};

export default Header