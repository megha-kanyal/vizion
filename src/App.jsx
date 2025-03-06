import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Events from './pages/Events';
import Internship from './pages/Internship';
import Alumini from './pages/Alumini';
import SProfile from './pages/SProfile';
import Techtalks from './pages/Techtalks';

import Chat from "./pages/Chat";

import AddEvents from './pages/AddEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/alumini" element={<Alumini />} />
        <Route path="/sprofile" element={<SProfile />} />
        <Route path="/tecktalks" element={<Techtalks/>} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/addevents' element={<AddEvents/>}/>
      </Routes>
    </Router>
  );
}

export default App;