import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRouter } from './Router/mainRouter';

function App() {
  return (
    <div>
  <RouterProvider router={mainRouter}/>
    </div>
  );
}

export default App;
