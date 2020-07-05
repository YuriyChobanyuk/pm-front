import React from 'react';

import classes from './landing.module.scss';

const Landing: React.FC = () => {
  return (
    <div className={classes.landingPageTop}>
      <div className={classes.landingTitleContainer}>
        <span
          className={`${classes.landingTitle} ${classes.landingTitle_first}`}
        >
          schedule
        </span>
        <span
          className={`${classes.landingTitle} ${classes.landingTitle_second}`}
        >
          your
        </span>
        <span
          className={`${classes.landingTitle} ${classes.landingTitle_third}`}
        >
          destiny
        </span>
      </div>
    </div>
  );
};

export default Landing;
