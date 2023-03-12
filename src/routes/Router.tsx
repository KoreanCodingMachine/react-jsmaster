import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';
import Chart from './Chart';
import Price from './Price';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Coins />} />
        <Route path='/:coinId' element={<Coin />}>
          <Route path='chart' element={<Chart />} />
          <Route path='price' element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
