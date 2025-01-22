import Header from '../../components/header';
import Styled from './Styled';
import FirstContents from '../FirstContents';
import Info from '../Info';
import ReactFullpage from '@fullpage/react-fullpage';

function Main() {
  return (
    <Styled>
      <Header />
      <ReactFullpage
        scrollingSpeed={1000}
        anchors={['first', 'info']}
        navigation
        navigationTooltips={['First Contents', 'Info']}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <FirstContents />
            </div>
            <div className="section">
              <Info />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </Styled>
  );
}

export default Main;
