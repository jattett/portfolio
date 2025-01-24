import React, { useState } from 'react';
import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import Skill from '../Skill';
import Project from '../Project';
import Timeline from '../Timeline';
import ReactFullpage from '@fullpage/react-fullpage';

function Main() {
  const [fullpageApi, setFullpageApi] = useState<any>(null); // fullpageApi 상태 관리

  return (
    <Styled>
      {/* fullpageApi를 Header에 전달 */}
      <Header fullpageApi={fullpageApi} />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={['first', 'info', 'Skill', 'Project', 'Timeline']}
        navigation
        navigationTooltips={['First Contents', 'Info', 'Skill', 'Project', 'Timeline']}
        render={({ fullpageApi }) => {
          // fullpageApi를 상태로 저장
          setFullpageApi(fullpageApi);
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
