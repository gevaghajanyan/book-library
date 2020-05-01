import React, { memo, useState } from 'react';
import { Link } from 'react-navi';

import Input from '../lib/Input/Input';

import './header.scss';

import logo from '../../assets/images/logo/logo.png'
import search from '../../assets/images/search.svg'

const Header = memo(({ ...props }) => {

  const [state, setState] = useState(false);

  return (
    <header className={`header ${state ? 'open' : ''}`}>
      <a
        href="/"
        className="logo"
      >
        <img
          src={logo}
          alt="logo"
          className='header-logo'
        />
      </a>
      <span
        className="navicon"
        onClick={() => setState(!state)}
      />
      <nav className="navigation">
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
        <form className='top-search'>
          <Input
            placeholder='Search'
            icon={(
              <img
                src={search}
                alt="Search"
              />
            )}
          />
        </form>
      </nav>
    </header>
  )
});

Header.propTypes = {};

export default Header