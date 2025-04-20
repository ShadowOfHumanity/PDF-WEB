import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ShuffleUp Component
 * Receives an array of React elements via `elements` prop.
 * Automatically shuffles vertically (up-only) with configurable speed & pause.
 * Wrapped in a circular background to complement the PDF icons.
 */
const ShuffleUp: React.FC<{ 
  elements: React.ReactElement[]; 
  shuffleSpeed?: number; 
  pause?: number; 
  distance?: number;
  className?: string; 
}> = ({ 
  elements, 
  shuffleSpeed = 0.5, 
  pause = 1, 
  distance = 200,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let next;
      do {
        next = Math.floor(Math.random() * elements.length);
      } while (next === currentIndex && elements.length > 1);
      setCurrentIndex(next);
    }, (shuffleSpeed + pause) * 1000);

    return () => clearTimeout(timer);
  }, [currentIndex, elements.length, shuffleSpeed, pause]);

  return (
    <div className={`flex flex-col items-center justify-center h-full ${className}`}>
      <div className="relative w-60 h-60 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ y: distance, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -distance, opacity: 0 }}
            transition={{ duration: shuffleSpeed, ease: 'backInOut' }}
            className="absolute bg-transparent inset-0 flex items-center justify-center bg-gray-100 "
          >
            {elements[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShuffleUp;