import React from 'react';

import classes from './landing.module.scss';

const Landing: React.FC = () => {
  return (
    <div
      style={{
        overflowX: 'hidden',
      }}
    >
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
      <div>cards here</div>
    </div>
  );
};

export default Landing;
