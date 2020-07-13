import React, { useState, useEffect } from 'react';
import { increment, decrement } from '../actions';
import { useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
