
import { useState, useEffect, useCallback } from 'react';

const Index = () => {
  const words = ['FELIX', 'BLOMBERG', 'DOT', 'COM'];
  const [positions, setPositions] = useState([0, 1, 2, 3]); // indices for corners

  const corners = [
    'top-8 left-8', // top-left
    'top-8 right-8', // top-right
    'bottom-8 left-8', // bottom-left
    'bottom-8 right-8' // bottom-right
  ];

  const shufflePositions = useCallback(() => {
    setPositions(current => {
      const newPositions = [...current];
      // Fisher-Yates shuffle algorithm
      for (let i = newPositions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]];
      }
      return newPositions;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(shufflePositions, 2500);
    return () => clearInterval(interval);
  }, [shufflePositions]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {words.map((word, index) => (
        <a
          key={word}
          href="https://www.instagram.com/felixblomberg/"
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute text-white font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight transition-all duration-1000 ease-in-out cursor-pointer hover:opacity-80 ${corners[positions[index]]}`}
        >
          {word}
        </a>
      ))}
    </div>
  );
};

export default Index;
