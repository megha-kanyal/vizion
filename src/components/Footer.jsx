import React from 'react';

const Footer = () => {
  return (
    <footer className="text-[#FFCB74] bg-[#2F2F2F] body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap md:text-left text-center">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#FFCB74] tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              {['First Link', 'Second Link', 'Third Link', 'Fourth Link'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-[#FFCB74] hover:text-white">{link}</a>
                </li>
              ))}
            </nav>
          </div>
        ))}
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-[#FFCB74] tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full bg-[#2F2F2F] rounded border border-[#FFCB74] focus:ring-2 focus:ring-[#FFCB74] focus:border-[#FFCB74] text-base outline-none text-[#FFCB74] py-1 px-3 mb-2"
            />
            <button className="ml-2 text-black bg-[#FFCB74] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black py-6">
        <div className="container mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center text-[#FFCB74]" href="#">
            <span className="ml-3 text-xl">Vizion</span>
          </a>
          <p className="text-sm text-[#FFCB74] sm:ml-6 sm:mt-0 mt-4">© 2025 Vizion —
            <a href="#" className="text-[#FFCB74] ml-1" target="_blank" rel="noopener noreferrer">@username</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, i) => (
              <a key={i} href="#" className="ml-3 text-[#FFCB74] hover:text-white">
                <i className={`fab fa-${icon} text-lg`}></i>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
