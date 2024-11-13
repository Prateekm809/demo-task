import React from 'react';

function Footer() {
  return (
    <>
      <div className="flex items-center justify-center space-x-4 mb-4 pl-2">
        <img src="files/flag.png" alt="Logo" className="h-6 ml-2" />
        <span className="text-[14px] sm:text-[16px]">India</span>
      </div>
      <footer className="px-2 sm:px-4 border-t">
        <div className="mx-auto">
          <nav className="flex flex-wrap justify-center sm:justify-between">
            {/* Left section */}
            <div className="flex flex-wrap justify-center space-x-6 mb-4 sm:mb-0">
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                About
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Advertising
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Business
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Investor
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                We are Hiring
              </a>
            </div>

            {/* Right section */}
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Privacy
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Terms
              </a>
              <a href="#" className="text-black-600 text-[12px] sm:text-[20px]">
                Help
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
