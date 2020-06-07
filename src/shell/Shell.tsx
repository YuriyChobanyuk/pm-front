import React, { FC, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector } from '../auth/ducks/selectors';
import TopNavigation from './components/top-nav/TopNavigation';

interface Props {
  children: ReactNode;
}

export const Shell: FC<Props> = ({ children }) => {
  // on app init try to get access token from local storage and parse it
  // if success write decoded user to redux store
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <TopNavigation />
      {children}
    </div>
  );
};