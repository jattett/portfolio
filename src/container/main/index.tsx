import { useState, useEffect } from 'react';
import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import Contact from '../Contact';
import Project from '../Project';
import Timeline from '../Timeline';
import ReactFullpage from '@fullpage/react-fullpage';

type FullpageApiType = {
  moveTo: (section: string) => void;
};

const anchors = ['first', 'info', 'Timeline', 'Project', 'Contact'];
const tooltips = ['First Contents', 'Info', 'Timeline', 'Project', 'Contact'];

function Main() {
  const [fullpageApi, setFullpageApi] = useState<FullpageApiType | null>(null);
  const [activeSection, setActiveSection] = useState<string>('first');

  useEffect(() => {
    if (fullpageApi) {
      console.log('Fullpage API initialized');
    }
  }, [fullpageApi]);

  return (
    <Styled>
      {/* 첫 번째 섹션에서만 Header 표시 */}
      {activeSection === 'first' && fullpageApi && <Header fullpageApi={fullpageApi} activeSection={activeSection} />}

      <ReactFullpage
        scrollingSpeed={1000}
        anchors={anchors}
        navigation
        navigationTooltips={tooltips}
        credits={{ enabled: false }}
        normalScrollElements=".custom-slider"
        afterLoad={(_origin, destination) => {
          setActiveSection(String(destination.anchor));
        }}
        render={({ fullpageApi }) => {
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
