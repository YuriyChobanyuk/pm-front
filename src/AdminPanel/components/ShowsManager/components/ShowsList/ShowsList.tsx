import React from 'react';
import AddShowButton from '../AddShowButton';
import {useRouteMatch} from "react-router-dom";

const ShowsList: React.FC = () => {
  const { url, path } = useRouteMatch();
  console.log({ url, path });
  return (
    <div>
      <AddShowButton />
      shows list
    </div>
  );
};

export default ShowsList;
