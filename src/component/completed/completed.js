import React from 'react';
import classes from './completed.module.scss';

const completed = () => {
  return (
    <div className={classes['completed']}>
      <div className={classes['completed__header']}>
        <span className={classes['completed__highlighted']}>Great !</span>
        Thanks for applying
      </div>
      <div className={classes['completed__undernithtext']}>
        We appreciate your application. Our team will review it, and
      </div>
      <div className={classes['completed__undernithtext']}>
        we’ll reach out soon if there’s a match. Stay tuned!
      </div>
      <button className={classes['completed__tracker']}>
        TRACK YOUR APPLICATION
      </button>
    </div>
  );
};

export default completed;
