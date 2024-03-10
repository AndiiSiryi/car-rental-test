import { Route, Routes, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const CatalogPag = lazy(() => import('../pages/Catalog/CatalogPage'));
const FavoritesPag = lazy(() => import('../pages/Favorites/FavoritesPage'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPag />} />
          <Route path="/favorites" element={<FavoritesPag />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
