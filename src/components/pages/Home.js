// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/auth';
import { Button } from '@mantine/core';

const Home = () => {
  const [data, setData] = useState(null);
  const signOut = useAuthStore((state) => state.signOut);
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setData(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <Button onClick={signOut}>Sign Out</Button>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;
