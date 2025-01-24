import styled, { keyframes } from 'styled-components';

const LeftOpacity = keyframes`
  0% {
    transform: translate(-100%,0);
    opacity: 1;
  }

  100% {
    transform: translate(0%,0);
    opacity: 0;
  }
`;

const RightOpacity = keyframes`
  0% {
    transform: translate(100%,0);
    opacity: 1;
  }

  100% {
    transform: translate(0%,0);
    opacity: 0;
  }
`;

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .left-text {
    position: absolute;
    animation: ${LeftOpacity} 4s;
    opacity: 0;
    font-weight: 700;
    color: #39ff14;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    &.first {
      left: 10%;
      top: 30%;
      font-size: 30px;
    }
    &.second {
      left: 20%;
      bottom: 30%;
      font-size: 54px;
    }
    &.third {
      left: 70%;
      bottom: 10%;
      font-size: 27px;
    }
  }
  .right-text {
    font-size: var(--font-xxl);
    position: absolute;
    right: 10%;
    bottom: 30%;
    animation: ${RightOpacity} 3s;
    opacity: 0;
    font-weight: 700;
    color: #39ff14;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    &.first {
      right: 10%;
      bottom: 30%;
      font-size: 27px;
    }
    &.second {
      right: 30%;
      bottom: 70%;
      font-size: 54px;
    }
    &.third {
      right: 60%;
      bottom: 20%;
      font-size: 30px;
    }
  }

  p {
    font-size: 60px;
    white-space: pre-wrap;
    font-weight: 700;
    text-align: center;
    overflow: hidden;
    color: #39ff14;
    font-family: 'Press Start 2P', monospace;
    text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
    padding: 40px;

    &::after {
      content: '_';
      display: inline-block;
      animation: ${blink} 1s step-end infinite;
    }

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
  }
`;

export default Styled;
