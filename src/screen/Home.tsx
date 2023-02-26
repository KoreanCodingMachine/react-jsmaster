import React from 'react';
import { users } from '../db';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [read, set] = useSearchParams();

  setTimeout(() => {
    set({
      dat: 'today',
      tommorow: '123',
    });
  }, 3000);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
