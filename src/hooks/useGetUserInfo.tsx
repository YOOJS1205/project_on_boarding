import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserAPI } from '../api/authAPI';

interface FormValue {
  id: string;
  password: string;
}

export default function useGetUserInfo() {
  const { isLoading, isError, data, error } = useQuery(
    ['userInfo'],
    getUserAPI,
    {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error Hanppend!</p>;
  }

  return data;
}
