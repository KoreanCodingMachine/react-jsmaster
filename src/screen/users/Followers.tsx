import React from 'react';
import { useParams, useOutletContext } from 'react-router-dom';

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();

  return <div>{nameOfMyUser}</div>;
};

export default Followers;
