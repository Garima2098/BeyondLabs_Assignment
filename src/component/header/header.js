import React from 'react';
import classes from './header.module.scss';
import { ReactComponent as Logo } from '../../assets/images/companylogo.svg';

const Header = () => {
  return (
    <div className={classes['header']}>
      <div className={classes['header__left']}>
        <div className={classes['header__logo']}>
          <Logo />
        </div>
      </div>
      <div className={classes['header__center']}>
        <a
          className={classes['header__link']}
          href="#"
        >
          Company
        </a>
        <a
          className={classes['header__link']}
          href="#"
        >
          Case Studies
        </a>
        <a
          className={classes['header__link']}
          href="#"
        >
          Impact
        </a>
        <a
          className={classes['header__link']}
          href="#"
        >
          Operations
        </a>
        <a
          className={classes['header__link']}
          href="#"
        >
          Career
        </a>
      </div>
      <div className={classes['header__right']}>
        <div className={classes['header__build']}>Build with us</div>
      </div>
    </div>
  );
};

export default Header;
