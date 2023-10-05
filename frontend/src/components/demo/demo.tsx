import React, { FC } from 'react';
import { useQuery } from 'react-query';



const fetchData = async () => {
  const response = await fetch('http://localhost:3000/user');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.text();
  return data;
};

const Demo: FC = () => {
  const { data: hello, isLoading, isError, error } = useQuery('hello', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <div>{JSON.stringify(hello)}</div>;
};

export default Demo;
