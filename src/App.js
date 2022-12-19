import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/sass/style.scss';
import Place from './pages/Place';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Place />} />
      </Routes>
    </div>
  );
}

export default App;
