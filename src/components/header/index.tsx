import React, { useState, useEffect } from 'react';
import HeaderStyled from './Styled';

// Props 타입 정의
interface HeaderProps {
  fullpageApi?: {
    moveTo: (section: string) => void; // `moveTo` 메서드 정의
  };
}

// 섹션 배열을 컴포넌트 외부로 분리
const sections = [
  { id: 'first', label: 'MAIN' },
  { id: 'info', label: 'INFO' },
  { id: 'Timeline', label: 'TIMELINE' },
  { id: 'Project', label: 'PROJECT' },
  { id: 'Contact', label: 'CONTACT' },
];

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

  // activeSection 상태 업데이트를 위한 useEffect
  useEffect(() => {
    if (fullpageApi) {
      fullpageApi.moveTo(activeSection);
    }
  }, [activeSection, fullpageApi]);

  return (
    <HeaderStyled>
      <div className="header">
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
