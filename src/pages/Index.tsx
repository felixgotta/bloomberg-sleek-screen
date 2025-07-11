
import { useState } from 'react';

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0e1111' }}>
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

      {/* Large branch spanning across under the text */}
      <div 
        className="absolute inset-x-0 top-[60%] h-32 opacity-40 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 200'%3E%3Cpath d='M0,100 Q100,80 200,90 Q300,100 400,85 Q500,70 600,80 Q700,90 800,75 Q900,60 1000,70 Q1100,80 1200,65 L1200,120 Q1100,105 1000,115 Q900,125 800,110 Q700,95 600,105 Q500,115 400,100 Q300,85 200,95 Q100,105 0,125 Z' fill='%23000000' opacity='0.6'/%3E%3Cpath d='M50,110 Q150,90 250,100 Q350,110 450,95 Q550,80 650,90 Q750,100 850,85 Q950,70 1050,80 Q1150,90 1200,75 L1200,130 Q1150,115 1050,125 Q950,135 850,120 Q750,105 650,115 Q550,125 450,110 Q350,95 250,105 Q150,115 50,135 Z' fill='%231a1a1a' opacity='0.4'/%3E%3Cpath d='M25,105 Q125,85 225,95 Q325,105 425,90 Q525,75 625,85 Q725,95 825,80 Q925,65 1025,75 Q1125,85 1200,70 L1200,125 Q1125,110 1025,120 Q925,130 825,115 Q725,100 625,110 Q525,120 425,105 Q325,90 225,100 Q125,110 25,130 Z' fill='%232a2a2a' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <style>{`
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #ffffff 0%,
            #ffffff 30%,
            #dfe4ea 40%,
            #87ceeb 50%,
            #dfe4ea 60%,
            #ffffff 70%,
            #ffffff 100%
          );
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -300% 0;
          }
          50% {
            background-position: 0% 0;
          }
          100% {
            background-position: 300% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
