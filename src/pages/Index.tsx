
import { useState, useEffect, useCallback } from 'react';

const Index = () => {
  const words = ['FELIX', 'BLOMBERG', 'DOT', 'COM'];
  const [positions, setPositions] = useState([0, 1, 2, 3]); // indices for corners
  const [hoverColors, setHoverColors] = useState<{ [key: string]: string }>({});

  const corners = [
    'top-8 left-8', // top-left
    'top-8 right-8', // top-right
    'bottom-8 left-8', // bottom-left
    'bottom-8 right-8' // bottom-right
  ];

  const getRandomColor = () => {
    const primaryColors = ['#FFA56C', '#00FF9E', '#FF5C8D'];
    const rareColors = ['#FF3FA0', '#00FFD7', '#C74AFF', '#FFF73A', '#FF823C', '#FF8EFF'];
    
    // 75% chance for primary colors, 25% chance for rare colors
    if (Math.random() < 0.75) {
      return primaryColors[Math.floor(Math.random() * primaryColors.length)];
    }
    return rareColors[Math.floor(Math.random() * rareColors.length)];
  };

  const handleMouseEnter = (word: string) => {
    setHoverColors(prev => ({ ...prev, [word]: getRandomColor() }));
  };

  const handleMouseLeave = (word: string) => {
    setHoverColors(prev => {
      const newColors = { ...prev };
      delete newColors[word];
      return newColors;
    });
  };

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
          className={`absolute font-bold text-6xl md:text-8xl lg:text-9xl tracking-tight transition-[top,right,bottom,left] duration-1000 ease-in-out cursor-pointer ${corners[positions[index]]}`}
          style={{ color: hoverColors[word] || 'white' }}
          onMouseEnter={() => handleMouseEnter(word)}
          onMouseLeave={() => handleMouseLeave(word)}
        >
          {word}
        </a>
      ))}
    </div>
  );
};

export default Index;
