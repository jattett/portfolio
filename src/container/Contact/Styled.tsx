import styled, { keyframes } from 'styled-components';

// 가로 방향 회전 애니메이션
const rotateCube = keyframes`
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
`;

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

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-color);
  flex-direction: column;
  gap: 10vh;

  .contact-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h1 {
      text-align: center;
      color: #39ff14;
      font-size: 2.5rem;
      text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
    }
    p {
      text-align: center;
      color: #39ff14;
      font-size: 16px;
      text-align: center;
      text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
      animation: ${fadeInfinity} 5s infinite;

      span {
        font-size: 18px;
      }
    }
  }

  .scene {
    width: 400px;
    height: 400px;
    perspective: 1640px;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: ${rotateCube} 10s infinite linear;

    &:hover {
      animation-play-state: paused;
    }
  }

  .cube-face {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(57, 255, 20, 0.8);
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #39ff14;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 15px;
    gap: 50px;

    .cube-title {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-bottom: 10px;
      font-size: 34px;
    }

    a {
      color: #656565;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      color: #656565;
      font-size: 21px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;
    }

    svg {
      margin-right: 8px;
    }
  }

  .face-front {
    transform: rotateY(0deg) translateZ(215px);
  }
  .face-back {
    transform: rotateY(180deg) translateZ(215px);
  }
  .face-left {
    transform: rotateY(-90deg) translateZ(215px);
  }
  .face-right {
    transform: rotateY(90deg) translateZ(215px);
  }

  @media screen and (max-width: 768px) {
    .scene {
      width: 200px;
      height: 200px;
      perspective: 1200px;
    }
    .face-front {
      transform: rotateY(0deg) translateZ(115px);
    }
    .face-back {
      transform: rotateY(180deg) translateZ(115px);
    }
    .face-left {
      transform: rotateY(-90deg) translateZ(115px);
    }
    .face-right {
      transform: rotateY(90deg) translateZ(115px);
    }
    .cube-face {
      p {
        font-size: 16px;
      }
    }
  }
`;

export default Styled;
