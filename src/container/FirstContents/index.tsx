import { useState, useEffect } from 'react';
import Styled from './Styled';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';

interface FullpageApi {
  moveSectionDown: () => void;
}

interface FirstContentsProps {
  fullpageApi?: FullpageApi;
}

function FirstContents({ fullpageApi }: FirstContentsProps) {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm FrontEnd Developer!\nMy name is GYUMIN, KANG!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const handleScroll = () => {
    if (fullpageApi) {
      fullpageApi.moveSectionDown();
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Styled>
      <div className="left-text first">CodeSmith</div>
      <div className="right-text first">TechNomad</div>
      <div className="left-text second">AlgoArtist</div>
      <div className="right-text second">PixelCrafter</div>
      <div className="left-text third">DataWarrior</div>
      <div className="right-text third">StackTactician</div>
      <p>{text}</p>
      <div className="scroll-arrow" onClick={handleScroll}>
        <MdOutlineKeyboardDoubleArrowDown size="3.5rem" color="#cdcdcd" />
      </div>
    </Styled>
  );
}

export default FirstContents;
