import React, { useState, useEffect } from 'react';
import HeaderStyled from './Styled';

interface HeaderProps {
  fullpageApi?: {
    moveTo: (section: string) => void;
  };
  activeSection: string;
}

const sections = [
  { id: 'first', label: 'MAIN' },
  { id: 'info', label: 'INFO' },
  { id: 'Timeline', label: 'TIMELINE' },
  { id: 'Project', label: 'PROJECT' },
  { id: 'Contact', label: 'CONTACT' },
];

const Header: React.FC<HeaderProps> = ({ fullpageApi, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (section: string) => {
    if (fullpageApi) {
      fullpageApi.moveTo(section);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderStyled>
      <div
        className={`header-wrapper ${isScrolled ? 'scrolled opacity-0' : ''}`}
        style={{
          opacity: activeSection === 'info' ? 0 : 1,
          visibility: activeSection === 'info' ? 'hidden' : 'visible',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
        }}
      >
        <h1>DEV.GYUMIN</h1>
        <nav>
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id} className={activeSection === id ? 'active' : ''} onClick={() => handleNavigation(id)}>
                {label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
