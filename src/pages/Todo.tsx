import React from 'react';
import useGetUserInfo from '../hooks/useGetUserInfo';

interface FormValue {
  id: string;
  password: string;
}

export default function Todo() {
  const userInfo = useGetUserInfo();
  return (
    <div>
      <h1>{userInfo.id}</h1>
      <h1>{userInfo.password}</h1>
    </div>
  );
}
