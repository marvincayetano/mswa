import React, { useState } from 'react';
import Nav from '../components/Nav';
import cold from '../images/cold.svg';
import hot from '../images/hot.svg';

interface AppProps {}

export default function App({}: AppProps) {
  return (
    <div className="h-screen bg-blue-50 pl-72 pr-72">
      <Nav />
      <div className="h-1/2">
        <img className="rounded" src={cold} alt="Background Image" />
      </div>
    </div>
  );
}
