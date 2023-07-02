import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CoinInfo from './pages/CoinInfo';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/:id' element={<CoinInfo />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
