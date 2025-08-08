import React, { useEffect, useState } from 'react';
import Main from './container/main';
import GlobalStyle from './common/global-style';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Main />
      
      {/* 커스텀 마우스 커서 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 99999,
        }}
      >
        {/* 메인 물방울 */}
        <div
          className="main-droplet"
          style={{
            position: 'absolute',
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            width: '16px',
            height: '16px',
            background: 'radial-gradient(circle, #39ff14 0%, rgba(57, 255, 20, 0.6) 70%, transparent 100%)',
            borderRadius: '50%',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14',
          }}
        />
        
        {/* 작은 물방울들 */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`small-droplet droplet-${index}`}
            style={{
              position: 'absolute',
              left: mousePosition.x - 4 + (index - 1) * 8,
              top: mousePosition.y - 4 + (index - 1) * 8,
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, rgba(57, 255, 20, 0.8) 0%, rgba(57, 255, 20, 0.4) 70%, transparent 100%)',
              borderRadius: '50%',
              opacity: isVisible ? 0.6 : 0,
              transition: `opacity 0.3s ease ${index * 0.1}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 5px rgba(57, 255, 20, 0.6)',
            }}
          />
        ))}
        
        {/* 물방울 궤적 효과 */}
        {[...Array(5)].map((_, index) => (
          <div
            key={`trail-${index}`}
            className={`trail-droplet trail-${index}`}
            style={{
              position: 'absolute',
              left: mousePosition.x - 2,
              top: mousePosition.y - 2,
              width: '4px',
              height: '4px',
              background: 'radial-gradient(circle, rgba(57, 255, 20, 0.6) 0%, transparent 100%)',
              borderRadius: '50%',
              opacity: isVisible ? 0.3 - index * 0.05 : 0,
              transition: `opacity 0.3s ease ${index * 0.05}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
