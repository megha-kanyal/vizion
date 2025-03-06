import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-[#2F2F2F] py-4'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between'>
          <div className='bg-[#FFCB74] h-12 w-12 rounded-full'></div> 
          <ul className='text-[#FFCB74] hidden md:flex space-x-6'>
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