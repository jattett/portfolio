import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import Contact from '../Contact';
import Project from '../Project';
import Timeline from '../Timeline';
import ReactFullpage from '@fullpage/react-fullpage';

// fullpageApi 타입 정의
type FullpageApiType = {
  moveTo: (section: string) => void;
};

const anchors = ['first', 'info', 'Timeline', 'Project', 'Contact'];
const tooltips = ['First Contents', 'Info', 'Timeline', 'Project', 'Contact'];

function Main() {
  const [fullpageApi, setFullpageApi] = useState<FullpageApiType | null>(null);

  useEffect(() => {
    if (fullpageApi) {
      // fullpageApi가 설정된 후 추가 초기화 작업
      console.log('Fullpage API initialized');
    }
  }, [fullpageApi]);

  return (
    <Styled>
      {fullpageApi && <Header fullpageApi={fullpageApi} />}
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={anchors}
        navigation
        navigationTooltips={tooltips}
        credits={{ enabled: false }}
        normalScrollElements=".custom-slider" // 슬라이더 요소를 지정하여 스크롤 이벤트 무시
        render={({ fullpageApi }) => {
          setFullpageApi(fullpageApi); // 상태 초기화
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <FirstContents />
              </div>
              <div className="section">
                <Info />
              </div>
              <div className="section">
                <Timeline />
              </div>
              <div className="section">
                <Project />
              </div>
              <div className="section">
                <Contact />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Styled>
  );
}

export default Main;
