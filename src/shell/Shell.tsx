import React, { FC, ReactNode, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector } from '../auth/ducks/selectors';

interface Props {
  children: ReactNode;
}

export const Shell: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleSideMenu = () => setOpen(!open);

  // on app init try to get access token from local storage and parse it
  // if success write decoded user to redux store
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();

  return <div>{children}</div>;
};
