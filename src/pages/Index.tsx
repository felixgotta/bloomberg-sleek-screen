
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center transition-colors duration-300 ${
      isHovered ? 'bg-[#f5f5f5]' : 'bg-black'
    }`}>
      <div className="text-center select-none">
        <h1 
          className={`font-anton text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw] xl:text-[12vw] font-normal tracking-wider leading-[0.8] transition-colors duration-300 cursor-default ${
            isHovered ? 'text-black' : 'text-white'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          FELIX BLOMBERG
        </h1>
      </div>
    </div>
  );
};

export default Index;
