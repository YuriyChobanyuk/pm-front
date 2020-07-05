import React, { FC } from 'react';
import { Figure, Dropdown } from 'react-bootstrap';

import classes from './user-menu.module.scss';
import { IUser } from '../../../interfaces/user.interface';

interface Props {
  user: IUser;
  className?: string;
  logoutUser: () => void;
  isHomePage: boolean;
}

const UserMenu: FC<Props> = ({ user, className, logoutUser, isHomePage }) => {
  const userAvatar = user.img_path || 'Portrait_Placeholder.png';
  return (
    <div className={`d-flex ${className}`}>
      <Dropdown drop="down" alignRight>
        <Dropdown.Toggle
          id="dropdown-custom-1"
          className={`${classes.userButton} ${
            isHomePage ? classes.userButtonTransparent : ''
          }`}
        >
          <span className="text-light mr-3">{user.name}</span>
          <Figure className={classes.userFigure}>
            <Figure.Image
              width={32}
              height={32}
              alt="avatar"
              src={userAvatar}
              rounded
              className={`${classes.userFigureImg}`}
            />
          </Figure>
        </Dropdown.Toggle>
        <Dropdown.Menu className={classes.userMenu}>
          <Dropdown.Item
            eventKey="logout"
            className={classes.userMenuItem}
            onClick={logoutUser}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default UserMenu;
