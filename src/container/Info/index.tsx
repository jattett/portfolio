import React, { useState, useEffect } from 'react';
import Styled from './Styled';

function FirstContents() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm FrontEnd Developer!\nMy name is GYUMIN, Kang! ";

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
      <p>{text}</p>
    </Styled>
  );
}

export default FirstContents;
