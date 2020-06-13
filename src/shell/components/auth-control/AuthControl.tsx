import React, { FC } from 'react';
import { Button } from 'react-bootstrap';
import { IUser } from '../../../interfaces/user.interface';
import { Link } from 'react-router-dom';

interface Props {
  user: IUser | null;
  className?: string;
}

const AuthControl: FC<Props> = ({ user, className }) => {
  return (
    <div className={className}>
      {user ? (
        ''
      ) : (
        <div className="d-flex text-light align-items-center">
          <Button variant="secondary" as={Link} to="/login">
            Login
          </Button>
          <span className="px-2">Or</span>
          <Button variant="secondary" as={Link} to="/signup">
            Sign up
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthControl;
