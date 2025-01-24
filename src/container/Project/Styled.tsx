import styled, { keyframes } from 'styled-components';

const fadeInfinity = keyframes`
  0% {
    opacity: 0;
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
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  background: #000;
  height: 60vh;
  border-radius: 20px;

  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      width: 100%;
      max-width: 600px;
      height: 40vh;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      background-color: #cdcdcd;
    }

    .click-text {
      font-size: var(--font-md);
      margin-bottom: 10px;
      animation: ${fadeInfinity} 5s infinite;
      color: #39ff14;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
        0 0 6px #228b22;
    }

    .content {
      h3 {
        font-size: var(--font-xxl);
        margin-bottom: 10px;
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }

      p {
        font-size: var(--font-md);
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }
    }
  }
`;

const Modal = styled.div`
  position: fixed;
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
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #333;
      cursor: pointer;

      &:hover {
        color: red;
      }
    }
  }
`;

export { StyledSlider, Styled, Modal };
