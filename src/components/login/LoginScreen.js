import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  const {dispatch} = useContext(AuthContext)

  const handleClick = () => {
    history.replace('/marvel')
    dispatch({
      type: types.login,
      payload: {
        name: 'Juan'
      }
    })
  };
  return (
    <div className='container mt-5'>
      <h1>Login Screen</h1>
      <hr />

      <button className='btn btn-outline-success' onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
