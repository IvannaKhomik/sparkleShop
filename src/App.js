import { CommonLayout } from 'common';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        {/* <Route index element={<HomePage />} /> */}
        {/* <Route path="online-shop" element={<OnlineShopPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
