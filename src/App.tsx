import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

export default function App() {
  const [userId, setUserId] = useState('');
  const getUserInfo = async () => {
    const userInfo = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    setUserId(userInfo.data.userId);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  console.log(userId);
  return <div>App</div>;
}
