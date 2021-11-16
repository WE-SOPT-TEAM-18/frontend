import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main';
import Sub from 'pages/Sub';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
