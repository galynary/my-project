import { lazy } from 'react';
//import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
const HomePage = lazy(() => import('../pages/Home/Home'));
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
};
