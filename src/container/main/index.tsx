import { useState } from 'react';
import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import Skill from '../Skill';
import Project from '../Project';
import Timeline from '../Timeline';
import ReactFullpage from '@fullpage/react-fullpage';

// fullpageApi 타입 정의
type FullpageApiType = {
  moveTo: (section: string) => void;
};

function Main() {
  const [fullpageApi, setFullpageApi] = useState<FullpageApiType | null>(null); // 타입 명시

  return (
    <Styled>
      <Header fullpageApi={fullpageApi} />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={['first', 'info', 'Skill', 'Project', 'Timeline']}
        navigation
        navigationTooltips={['First Contents', 'Info', 'Skill', 'Project', 'Timeline']}
        credits={{ enabled: false }}
        render={({ fullpageApi }) => {
          if (!fullpageApi) {
            setFullpageApi(fullpageApi); // 상태 초기화
          }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <FirstContents />
              </div>
              <div className="section">
                <Info />
              </div>
              <div className="section">
                <Skill />
              </div>
              <div className="section">
                <Project />
              </div>
              <div className="section">
                <Timeline />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Styled>
  );
}

export default Main;
