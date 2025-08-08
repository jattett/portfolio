import styled from 'styled-components';

const Styled = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .left-text,
  .right-text {
    position: absolute;
    font-weight: 700;
    color: #39ff14;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    pointer-events: none;
    z-index: 1;
    
    &.first {
      font-size: 30px;
    }
    &.second {
      font-size: 54px;
    }
    &.third {
      font-size: 27px;
    }
  }

  .left-text {
    &.first {
      left: 10%;
      top: 30%;
    }
    &.second {
      left: 20%;
      bottom: 30%;
    }
    &.third {
      left: 70%;
      bottom: 10%;
    }
  }

  .right-text {
    &.first {
      right: 10%;
      bottom: 30%;
    }
    &.second {
      right: 30%;
      bottom: 70%;
    }
    &.third {
      right: 60%;
      bottom: 20%;
    }
  }

  .main-text-container {
    position: relative;
    z-index: 10;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .main-title {
    font-size: 80px;
    font-weight: 900;
    color: #39ff14;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    margin: 0;
    padding: 0;
    line-height: 1.2;
    position: relative;
    letter-spacing: 2px;

    .main-cursor {
      color: #39ff14;
      font-weight: bold;
      text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
      animation: mainCursorBlink 1.2s ease-in-out infinite;
    }
  }

  .subtitle {
    font-size: 24px;
    font-weight: 400;
    color: #cdcdcd;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 5px #cdcdcd;
    margin: 0;
    padding: 0;
    line-height: 1.4;
    opacity: 0.8;
    letter-spacing: 1px;

    .sub-cursor {
      color: #cdcdcd;
      font-weight: bold;
      text-shadow: 0 0 5px #cdcdcd;
      animation: subCursorBlink 1s ease-in-out infinite;
    }
  }

  .completion-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: -1;

    .glow-ring {
      width: 300px;
      height: 300px;
      border: 2px solid rgba(57, 255, 20, 0.3);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .scroll-arrow {
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    transition: transform 0.2s ease;
    
    .arrow-container {
      position: relative;
      z-index: 2;
    }

    .arrow-icon {
      transition: all 0.3s ease;
    }

    .pulse-ring {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      border: 2px solid rgba(57, 255, 20, 0.3);
      border-radius: 50%;
      z-index: 1;
    }
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #39ff14;
      border-radius: 50%;
      box-shadow: 0 0 10px #39ff14;
    }
  }

  /* Enhanced hover effects */
  .left-text:hover,
  .right-text:hover {
    cursor: pointer;
    pointer-events: auto;
  }

  /* Cursor animations */
  @keyframes mainCursorBlink {
    0%, 50% {
      opacity: 1;
      text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
    }
    51%, 100% {
      opacity: 0;
      text-shadow: none;
    }
  }

  @keyframes subCursorBlink {
    0%, 50% {
      opacity: 1;
      text-shadow: 0 0 5px #cdcdcd;
    }
    51%, 100% {
      opacity: 0;
      text-shadow: none;
    }
  }

  /* Enhanced glow animation for main title */
  @keyframes titleGlow {
    0%, 100% {
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    }
    50% {
      text-shadow: 0 0 0px #39ff14, 0 0 25px #39ff14, 0 0 0px #39ff14, 0 0 15px #39ff14, 0 0 45px #32cd32, 0 0 10px #228b22;
    }
  }

  .main-title {
    animation: titleGlow 3s ease-in-out infinite;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .main-title {
      font-size: 48px;
      letter-spacing: 1px;
    }
    
    .subtitle {
      font-size: 16px;
      letter-spacing: 0.5px;
    }
    
    .left-text,
    .right-text {
      &.first {
        font-size: 20px;
      }
      &.second {
        font-size: 36px;
      }
      &.third {
        font-size: 18px;
      }
    }

    .scroll-arrow {
      .pulse-ring {
        width: 60px;
        height: 60px;
      }
    }

    .completion-glow .glow-ring {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    .main-title {
      font-size: 32px;
      letter-spacing: 0.5px;
    }
    
    .subtitle {
      font-size: 12px;
      letter-spacing: 0.3px;
    }
    
    .left-text,
    .right-text {
      &.first {
        font-size: 16px;
      }
      &.second {
        font-size: 28px;
      }
      &.third {
        font-size: 14px;
      }
    }

    .scroll-arrow {
      .pulse-ring {
        width: 50px;
        height: 50px;
      }
    }

    .completion-glow .glow-ring {
      width: 150px;
      height: 150px;
    }
  }

  /* NOTE: Avoid global transition on all properties to prevent conflicts with framer-motion */
`;

export default Styled;
