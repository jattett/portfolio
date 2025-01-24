import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const FullPageWithSlides: React.FC = () => {
  return (
    <ReactFullpage
      // FullPage.js 옵션
      scrollingSpeed={700}
      navigation
      slidesNavigation={true} // 슬라이드 네비게이션 활성화
      slidesNavPosition="bottom" // 네비게이션 위치
      render={() => (
        <ReactFullpage.Wrapper>
          {/* 첫 번째 섹션 */}
          <div className="section">
            <h1>Section 1</h1>
          </div>

          {/* 두 번째 섹션: 슬라이드 포함 */}
          <div className="section">
            <h1>Section with Slides</h1>
            <div className="slide">
              <h2>Slide 1</h2>
            </div>
            <div className="slide">
              <h2>Slide 2</h2>
            </div>
            <div className="slide">
              <h2>Slide 3</h2>
            </div>
          </div>

          {/* 세 번째 섹션 */}
          <div className="section">
            <h1>Section 3</h1>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default FullPageWithSlides;
