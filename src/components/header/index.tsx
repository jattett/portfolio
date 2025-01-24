import React, { useState, useEffect } from 'react';
import HeaderStyled from './Styled';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    const optimizedHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', optimizedHandleScroll);
    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
    };
  }, []);

  return (
    <HeaderStyled isScrolled={isScrolled}>
      <div className="header">
        <h1>DEV.GYUMIN</h1>
        <nav>
          <ul>
            <li>MAIN</li>
            <li>INFO</li>
            <li>SKILL</li>
            <li>PROJECT</li>
            <li>TIMELINE</li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
}

export default Header;
