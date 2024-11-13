import React from 'react';

function Footer() {
  return (
    <>
    <div className="flex items-center space-x-4 mb-4 pl-2">
    <img src="files/flag.png" alt="Logo" className="h-6 ml-2" />  <span>India</span>
      </div>
    <footer className="px-2 border-t">
    <div className=" mx-auto">
      
      <nav className="flex flex-wrap justify-between">
        <div className="flex space-x-10">
          <a href="#" className="text-black-600 text-[20px]">About</a>
          <a href="#" className="text-black-600 text-[20px]">Advertising</a>
          <a href="#" className="text-black-600 text-[20px]">Business</a>
          <a href="#" className="text-black-600 text-[20px]">Investor</a>
          <a href="#" className="text-black-600 text-[20px]">We are Hiring</a>
        </div>
        <div className="flex space-x-10">
          <a href="#" className="text-black-600 text-[20px]">Privacy</a>
          <a href="#" className="text-black-600 text-[20px]">Terms</a>
          <a href="#" className="text-black-600 text-[20px]">Help</a>
        </div>
      </nav>
    </div>
  </footer>
  </>
  );
}

export default Footer;
