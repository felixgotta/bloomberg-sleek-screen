
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0e1111' }}>
      {/* Forest branch overlay */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M20,20 Q40,40 60,30 Q80,20 100,35 Q120,50 140,40 Q160,30 180,45 L185,50 Q165,55 145,50 Q125,45 105,55 Q85,65 65,55 Q45,45 25,50 Z' fill='%23000000' opacity='0.3'/%3E%3Cpath d='M25,25 Q45,35 65,25 Q85,15 105,30 Q125,45 145,35 Q165,25 185,40 L190,45 Q170,50 150,45 Q130,40 110,50 Q90,60 70,50 Q50,40 30,45 Z' fill='%23000000' opacity='0.2'/%3E%3C/svg%3E")`
        }}
      />

      <div className="text-center select-none relative z-10">
        <h1 
          className={`font-anton text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw] xl:text-[12vw] font-normal tracking-tighter leading-[0.8] cursor-default text-white relative transition-all duration-1000 ${
            isHovered ? 'shimmer-text' : ''
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          FELIX BLOMBERG
        </h1>
      </div>

      <style jsx>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            transparent 0%,
            transparent 40%,
            #dfe4ea 50%,
            transparent 60%,
            transparent 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
