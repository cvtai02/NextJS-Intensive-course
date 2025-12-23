'use client';

import { useEffect } from 'react';

export default function Preloader() {
  useEffect(() => {
    // Hide preloader after a short delay to ensure content is loaded
    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      const preloader = document.getElementById('preloader');
      
      if (loader && preloader) {
        loader.style.transition = 'opacity 0.5s';
        loader.style.opacity = '0';
        
        setTimeout(() => {
          preloader.style.transition = 'opacity 0.5s';
          preloader.style.opacity = '0';
          
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 500);
        }, 300);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader">
      <div id="loader"></div>
    </div>
  );
}
