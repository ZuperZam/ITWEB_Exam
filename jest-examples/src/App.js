import React from 'react';

function App() {
  return (
    <h1>Test App</h1>
  );
}

export default App;

export const add = (x,y) => {
  return x + y;
}

export const subtract = (x,y) => {
  return x - y;
}

export const integrateAdd = (x, y) => {
  return add(x, y) + 'integrated';
}