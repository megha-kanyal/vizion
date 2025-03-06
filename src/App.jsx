import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Events from './pages/Events';
import Internship from './pages/Internship';
import Alumini from './pages/Alumini';
import SProfile from './pages/SProfile';
import AProfile from './pages/AProfile';
import Techtalks from './pages/Techtalks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/SProfile" element={<SProfile />} />
        <Route path="/aprofile" element={<AProfile />} />
        <Route path="/tecktalks" element={<Techtalks/>} />
      </Routes>
    </Router>
  );
}

export default App;