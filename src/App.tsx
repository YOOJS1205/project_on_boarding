import React from 'react';
import { worker } from './mocks/browser';

import Router from './pages/Router';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

export default function App() {
  return <Router />;
}
