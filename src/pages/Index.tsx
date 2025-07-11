
import { useState, useEffect } from 'react';

const Index = () => {
  const words = ['FELIX', 'BLOMBERG', 'COMING', 'SOON'];
  const [positions, setPositions] = useState([0, 1, 2, 3]); // indices for corners

  const corners = [
    'top-8 left-8', // top-left
    'top-8 right-8', // top-right
    'bottom-8 left-8', // bottom-left
    'bottom-8 right-8' // bottom-right
  ];

  const shufflePositions = () => {
    const newPositions = [...positions];
    // Fisher-Yates shuffle algorithm
    for (let i = newPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPositions[i], newPositions[j]] = [newPositions[j], newPositions[i]];
    }
    setPositions(newPositions);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      shufflePositions();
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, [positions]);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {words.map((word, index) => (
        <div
          key={word}
          className={`absolute text-white font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight transition-all duration-1000 ease-in-out ${corners[positions[index]]}`}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default Index;
