import { useState, useEffect } from 'react';
import Styled from './Styled';

function FirstContents() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm FrontEnd Developer!\nMy name is GYUMIN, KANG! ";

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

  return (
    <Styled>
      <div className="left-text first">CodeSmith</div>
      <div className="right-text first">TechNomad</div>
      <div className="left-text second">AlgoArtist</div>
      <div className="right-text second">PixelCrafter</div>
      <div className="left-text third">DataWarrior</div>
      <div className="right-text third">StackTactician</div>
      <p>{text}</p>
    </Styled>
  );
}

export default FirstContents;
