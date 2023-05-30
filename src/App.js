import { CommonLayout } from 'common';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() =>
  import('pages/HomePage').then(module => ({ default: module.HomePage }))
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="online-shop" element={<OnlineShopPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
