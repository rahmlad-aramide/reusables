import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className={`w-full h-16 bg-red-500 transition-all duration-500 ${
          isScrolled ? 'transform -translate-y-full' : 'transform translate-y-0'
        }`}
      >
        Your top div content
      </div>
      <nav
        className={`w-full h-16 bg-blue-500 ${
          isScrolled ? 'fixed top-0 transition-all duration-500' : ''
        }`}
      >
        Your navbar content
      </nav>
    </div>
  );
};

export default Navbar;
