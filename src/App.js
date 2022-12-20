import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';
import Hotels from './pages/Hotels';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './context/AuthProvider';
import './assets/sass/style.scss';
import RequireAuth from './PrivateRoute/RequireAuth';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Place />} />
        <Route path='/:id/hotels' element={
          <RequireAuth>
            <Hotels />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
