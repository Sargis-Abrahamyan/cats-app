import { Routes, Route, Navigate } from 'react-router-dom';
import { configRoutes } from '../../config/route';
import Found from '../../pages/found';

const RootRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/boxes' />} />
      {configRoutes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
      <Route path={'*'} element={<Found />} />
    </Routes>
  );
};

export default RootRoutes;
