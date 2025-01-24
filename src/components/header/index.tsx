import React, { useState, useEffect } from 'react';
import HeaderStyled from './Styled';

// Props 타입 정의
interface HeaderProps {
  fullpageApi?: {
    moveTo: (section: string) => void; // `moveTo` 메서드 정의
  };
}

const Header: React.FC<HeaderProps> = ({ fullpageApi }) => {
  const [activeSection, setActiveSection] = useState<string>('first');

  // 네비게이션 클릭 핸들러
  const handleNavigation = (section: string) => {
    setActiveSection(section);
    if (fullpageApi) {
      fullpageApi.moveTo(section);
    }
  };

  return (
    <HeaderStyled>
      <div className="header">
        <h1>DEV.GYUMIN</h1>
        <nav>
          <ul>
            <li className={activeSection === 'first' ? 'active' : ''} onClick={() => handleNavigation('first')}>
              MAIN
            </li>
            <li className={activeSection === 'info' ? 'active' : ''} onClick={() => handleNavigation('info')}>
              INFO
            </li>
            <li className={activeSection === 'Skill' ? 'active' : ''} onClick={() => handleNavigation('Skill')}>
              SKILL
            </li>
            <li className={activeSection === 'Project' ? 'active' : ''} onClick={() => handleNavigation('Project')}>
              PROJECT
            </li>
            <li className={activeSection === 'Timeline' ? 'active' : ''} onClick={() => handleNavigation('Timeline')}>
              TIMELINE
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
