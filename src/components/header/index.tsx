import React, { useState } from 'react';
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
    if (fullpageApi) {
      fullpageApi.moveTo(section); // 섹션 이동
    } else {
      console.warn('fullpageApi is not available.'); // 디버깅용 경고
    }
    setActiveSection(section); // 상태 업데이트
  };

  return (
    <HeaderStyled>
      <div className="header">
        <h1>DEV.GYUMIN</h1>
        <nav>
          <ul>
            {[
              { id: 'first', label: 'MAIN' },
              { id: 'info', label: 'INFO' },
              { id: 'Skill', label: 'SKILL' },
              { id: 'Project', label: 'PROJECT' },
              { id: 'Timeline', label: 'TIMELINE' },
            ].map(({ id, label }) => (
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
