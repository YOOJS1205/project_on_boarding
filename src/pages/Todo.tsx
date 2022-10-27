import React from 'react';
import useGetUserInfo from '../hooks/useGetUserInfo';

export default function Todo() {
  const userInfo: any = useGetUserInfo();
  return (
    <div>
      <h1>{userInfo.id}</h1>
      <h1>{userInfo.password}</h1>
    </div>
  );
}
