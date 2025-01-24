import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import Skill from '../Skill';
import Project from '../Project';
import ReactFullpage from '@fullpage/react-fullpage';

function Main() {
  return (
    <Styled>
      <Header />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={['first', 'info', 'Skill', 'Project']}
        navigation
        navigationTooltips={['First Contents', 'Info', 'Skill', 'Project']}
        render={() => (
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
          </ReactFullpage.Wrapper>
        )}
      />
    </Styled>
  );
}

export default Main;
