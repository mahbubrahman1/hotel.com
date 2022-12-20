import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/sass/style.scss';
import Place from './pages/Place';
import Hotels from './pages/Hotels';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Place />} />
        <Route path='/:id/hotels' element={<Hotels />} />
      </Routes>
    </div>
  );
}

export default App;
