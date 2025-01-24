import styled, { keyframes } from 'styled-components';

const fadeInfinity = keyframes`
  0% {
    opacity: 1;
  }
  15% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const pulseBoxShadow = keyframes`
  0% {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  }
  50% {
    box-shadow: 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14;
  }
  100% {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  }
`;

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;
`;

const StyledSlider = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: #000;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  animation: ${pulseBoxShadow} 3s infinite;
  .slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out; /* 부드러운 슬라이드 전환 */
  }

  .slide {
    flex: 0 0 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      background-color: #cdcdcd;
      width: 70vw;
      height: 50vh;
      margin-bottom: 20px;
      border-radius: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    .click-text {
      font-size: var(--font-md);
      color: #39ff14;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32;
      animation: ${fadeInfinity} 5s infinite;
    }

    .content {
      h3 {
        font-size: var(--font-xxl);
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
        margin-bottom: 10px;
      }

      p {
        font-size: var(--font-lg);
        font-size: 1rem;
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 90%;
    max-width: 600px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
    }

    .close-button {
      position: absolute;
      top: 20%;
      right: 20%;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #fff;
      cursor: pointer;
      z-index: 1;

      &:hover {
        color: red;
      }
    }
  }
`;

export { StyledSlider, Styled, Modal };
