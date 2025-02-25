import styled, { keyframes } from 'styled-components';

const Typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%; 
  }
`;

const Blink = keyframes`
  50% {
    border-right-color: transparent; 
  }
`;

const Styled = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10dvh;

  .section-wrapper {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    border-radius: 20px;
    display: grid;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    background-color: #000;
    width: 80vw;
    min-height: 40dvh;
    padding: 30px 40px;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 40px;
    .info-section {
      display: flex;
      gap: 20px;
      flex-direction: column;

      h1 {
        font-size: var(--font-xxl);
        color: #c0c0c0;
      }
      p {
        font-size: var(--font-lg);
        color: #c0c0c0;
        word-break: break-word;
        line-height: 1.5;
      }
      b {
        font-size: var(--font-xl);
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }
    }
    .img-section {
      background-color: #fff;
      border-radius: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    gap: 40px;
    .section-wrapper {
      width: 70%;
      display: flex;
      flex-direction: column-reverse;
      overflow: auto;
      .img-section {
        width: 200px;
        height: 200px;
        margin: 0 auto;
      }
      .info-section {
        h1 {
          font-size: 16px;
        }
        b {
          font-size: 16px;
        }
        p {
          font-size: 14px;
        }
      }
    }
  }
`;

const NeonBorder = styled.div`
  width: fit-content;
  padding: 30px;
  border: 4px solid transparent;
  font-family: 'Press Start 2P', monospace;
  border-radius: 20px;
  background-size: 300% 300%;
  border: 4px solid #39ff14;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #39ff14;
  font-family: 'Bebas Neue', serif;
  text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  p {
    animation: ${Typing} 4s steps(30) 1 normal both, ${Blink} 0.5s step-end infinite;
    font-weight: 700;
    font-size: var(--font-xl);
    font-family: 'Press Start 2P', monospace;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid #39ff14;
    animation: ${Typing} 4s steps(30) 1 normal both, ${Blink} 0.5s step-end infinite;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 20px;
    font-size: 16px;
    p {
      white-space: normal;
      animation: none;
      border-right: none;
    }
  }
`;

export { Styled, NeonBorder };
