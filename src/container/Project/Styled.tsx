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
  width: 85vw;
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
    height: 100%;
    display: flex;
    transition: transform 0.5s ease-in-out; /* 부드러운 슬라이드 전환 */
    .fp-arrow {
      &.fp-prev {
        border-color: transparent #39ff14 transparent transparent !important;
      }
      &.fp-next {
        border-color: transparent transparent transparent #39ff14 !important;
      }
    }
  }

  .slide {
    height: 100%;
    flex: 0 0 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    .fp-overflow {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 40px 30px;
      justify-content: space-between;
    }

    img {
      background-color: #cdcdcd;
      width: 70vw;
      height: 55vh;
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
        color: #fff;
      }
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  &.open {
    transition: all 0.3s ease-in-out;
    width: 100vw;
    height: 100vh;
    opacity: 1;
  }
  &.close {
    width: 0vw;
    height: 0vh;
  }

  .modal-content {
    background-color: #444444;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    width: 100%;
    max-width: 60vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px 50px;
    position: relative;
    transition: all 0.3s ease-in-out;
    .modal-detail-title {
      h3 {
        font-size: 2rem;
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }
    }
    .content-area {
      width: 50vw;
      margin: 0 auto;
      .slick-list {
        img {
          width: 100%;
          height: 40vh;
          border-radius: 20px;
        }
      }
      .slick-arrow {
        &::before {
          color: #fff;
          font-size: 26px;
        }
      }
    }

    p {
      font-size: 1rem;
    }
    .info-area {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .skill-area {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        h3 {
          color: #39ff14;
          text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
            0 0 6px #228b22;
        }
        p {
          color: #fff;
          text-align: left;
        }
      }
      .description-area {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
        h3 {
          color: #39ff14;
          text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
            0 0 6px #228b22;
        }
        ul {
          color: #fff;
          text-align: left;
        }
      }
    }

    .close-button {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 50px;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      z-index: 1;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: red;
      }
    }
  }
  .image-wrapper {
    position: relative;
    .button-area {
      display: flex;
      gap: 10px;
      position: absolute;
      top: 10px;
      right: 10px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        color: #39ff14;
        background-color: #000;
        padding: 5px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        font-size: 30px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        opacity: 0.8;
        &.github-button {
          font-size: 30px;
        }
        &.play-button {
          font-size: 20px;
        }
        &:hover {
          color: #000;
          background-color: #39ff14;
          box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
        }
      }
    }
  }
`;

export { StyledSlider, Styled, Modal };
