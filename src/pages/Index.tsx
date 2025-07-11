
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center select-none">
        <h1 
          className={`font-anton text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw] xl:text-[12vw] font-normal tracking-tighter leading-[0.8] transition-colors duration-300 cursor-default ${
            isHovered ? 'text-black' : 'text-white'
          }`}
          style={{
            background: isHovered ? '#f5f5f5' : 'transparent',
            transition: 'all 300ms ease'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          FELIX BLOMBERG
        </h1>
        <p 
          className="font-inter font-normal text-xs sm:text-sm tracking-wide text-[#e0e0e0] mt-16 sm:mt-20 md:mt-24"
        >
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default Index;
