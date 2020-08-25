import React from 'react';
import './TestComponent1.scss';

export const TestComponent1 = () => {
  console.log(process.env.ORIGIN);
  return <>hello world1</>;
};
