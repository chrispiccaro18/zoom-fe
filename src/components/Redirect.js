import React from 'react';
import { get, getWithAuth } from '../services/request';

const Redirect = () => {
  const code = window.location.search.split('=')[1];
  console.log(code);

  get(`/auth/${code}`)
    .then(response => {
      console.log(response);
    });
   
  return (
    <h1>Redirect Page</h1>
  );
};

export default Redirect;
