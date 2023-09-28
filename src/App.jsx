import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  Aos.init({
    duration: 1000,
    offset: 0,
  });
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
