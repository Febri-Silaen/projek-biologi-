import React, { useEffect, useRef, useState } from 'react';
import '../styles/AnimatedElement.css';

const AnimatedElement = ({ 
  children, 
  animation = 'fade', 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = elementRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={elementRef} 
      className={`animated-element ${animation} ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;