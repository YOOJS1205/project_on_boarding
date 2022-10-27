import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Join from './Join';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}
