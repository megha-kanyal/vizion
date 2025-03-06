import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#1e293b] py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
        <div className='h-15 w-15 rounded-full flex items-center justify-center overflow-hidden'>
          <img src="/public/Vizion logoNOBG.png" alt="Profile" className="h-full w-full object-cover" />
        </div>
 
          <ul className='text-white hidden md:flex space-x-6'>
            <li className='hover:text-white transition-colors'>
              <Link to="/internship">Job/Internship Opportunities</Link>
            </li>
            <li className='hover:text-white transition-colors'>
              <Link to="/alumni">Alumni Connect</Link>
            </li>
            <li className='hover:text-white transition-colors'>
              <Link to="/events">Event Hub</Link>
            </li>
            <li className='hover:text-white transition-colors'>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          
          <div className='md:hidden'>
            <button 
              onClick={toggleMenu}
              className='text-[#FFCB74] hover:text-white'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className='md:hidden mt-4'>
            <ul className='text-[#FFCB74] flex flex-col space-y-4 pb-4'>
              <li className='hover:text-white transition-colors'>
                <Link to="/internship" onClick={() => setIsMenuOpen(false)}>
                  Job/Internship Opportunities
                </Link>
              </li>
              <li className='hover:text-white transition-colors'>
                <Link to="/alumni" onClick={() => setIsMenuOpen(false)}>
                  Alumni Connect
                </Link>
              </li>
              <li className='hover:text-white transition-colors'>
                <Link to="/events" onClick={() => setIsMenuOpen(false)}>
                  Event Hub
                </Link>
              </li>
              <li className='hover:text-white transition-colors'>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;