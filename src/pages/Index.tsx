
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`min-h-screen w-full flex items-center justify-center transition-colors duration-300 cursor-default ${
        isHovered ? 'bg-[#f5f5f5]' : 'bg-black'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center select-none">
        <h1 
          className={`font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight transition-colors duration-300 ${
            isHovered ? 'text-black' : 'text-white'
          }`}
        >
          FELIX BLOMBERG
        </h1>
        <p 
          className={`font-inter font-normal text-sm sm:text-base md:text-lg mt-2 sm:mt-3 md:mt-4 tracking-wide transition-colors duration-300 ${
            isHovered ? 'text-black' : 'text-[#e0e0e0]'
          }`}
        >
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default Index;
