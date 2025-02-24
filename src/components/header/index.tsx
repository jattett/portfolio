import React, { useState, useEffect } from 'react';
import HeaderStyled from './Styled';
import { FiMenu } from 'react-icons/fi'; // 햄버거 버튼 아이콘
import { MdClose } from 'react-icons/md'; // 닫기 버튼 아이콘 (원한다면)

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
  // 햄버거 버튼 클릭 시 열리는 드로어 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    if (fullpageApi) {
      fullpageApi.moveTo(section);
      // 메뉴 선택 후 자동으로 드로어 닫기
      setIsMenuOpen(false);
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

  // 햄버거 버튼 클릭 -> 열림/닫힘
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderStyled>
      {/* PC/데스크탑용 헤더 (기존 방식) */}
      <div
        className={`header-wrapper ${isScrolled ? 'scrolled opacity-0' : ''}`}
        style={{
          opacity: activeSection === 'info' ? 0 : 1,
          visibility: activeSection === 'info' ? 'hidden' : 'visible',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
        }}
      >
        <h1>DEV.GYUMIN</h1>

        {/* PC 메뉴 */}
        <nav className="pc-nav">
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id} className={activeSection === id ? 'active' : ''} onClick={() => handleNavigation(id)}>
                {label}
              </li>
            ))}
          </ul>
        </nav>

        {/* 햄버거 버튼 (모바일에서만 보이도록 CSS에서 처리) */}
        <button className="hamburger-button" onClick={toggleMenu}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* 모바일 드로어 메뉴 */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <button className="drawer-close" onClick={toggleMenu}>
          <MdClose size={24} />
        </button>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id} className={activeSection === id ? 'active' : ''} onClick={() => handleNavigation(id)}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;
