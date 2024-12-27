import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { BreadCrumbs } from './components/BreadCrumbs/BreadCrumbs';

// Сторінки
const HomePage = lazy(() => import('pages/HomePage'));
const ProductsPage = lazy(() => import('pages/ProductsPage/ProductsPage'));

export const App = () => {
  const location = useLocation();
  return (
    <div className="page-fruits">
      <SharedLayout />
      <main className="main">
        {location.pathname !== '/' && <BreadCrumbs />}
        <Suspense fallback={<div>Завантаження...</div>}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/fruits" element={<ProductsPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
