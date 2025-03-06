import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Events from './pages/Events';
import Internship from './pages/Internship';
import Alumini from './pages/Alumini';
import Profile from './pages/Profile';
import Techtalks from './pages/Techtalks';
import AddEvents from './pages/AddEvents';
import CreateJobs from './pages/CreateJobs';

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/tecktalks" element={<Techtalks/>} />
        <Route path="/mentorship" element={<Mentorship/>} />
        <Route path='/addevents' element={<AddEvents/>}/> 
        <Route path='/CreateJobs' element={<CreateJobs/>}/>
      </Routes>
    </Router>
  );
}

export default App;