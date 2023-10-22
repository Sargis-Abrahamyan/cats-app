import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Category from '../category/Category';
import Cats from '../cats/Cats';
import Found from '../../pages/found';

const RootRoutes = () => {
  return (
    <>
      <Category />
      <Routes>
        <Route path={'/'} element={<Cats />} />
        <Route path={'/boxes'} element={<Cats />} />
        <Route path={'/clothes'} element={<Cats />} />
        <Route path={'/hats'} element={<Cats />} />
        <Route path={'/sinks'} element={<Cats />} />
        <Route path={'/space'} element={<Cats />} />
        <Route path={'/sunglasses'} element={<Cats />} />
        <Route path={'/ties'} element={<Cats />} />
        <Route path={'*'} element={<Found/>} />
      </Routes>
    </>
  );
};

export default RootRoutes;
