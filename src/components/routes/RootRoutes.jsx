import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// components
import Category from '../category/Category';
import Cats from '../cats/Cats';

const RootRoutes = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Category />
      <Routes>
        <Route path={`/${pathname}`} element={<Cats />} />
        <Route path={`/:${pathname}`} element={<Cats />} />
      </Routes>
    </>
  )
}

export default RootRoutes;