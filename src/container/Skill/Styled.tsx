import styled, { keyframes } from 'styled-components';

// Keyframes for pulsating box-shadow
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

  .skill-wrapper {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: #000;
    width: 80vw;
    min-height: 40vh;
    padding: 30px 40px;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 40px;
    animation: ${pulseBoxShadow} 2s infinite;

    h1 {
      color: #39ff14;
      text-align: center;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
        0 0 6px #228b22;
      font-size: var(--font-lg);
    }

    .skill-bar {
      margin-bottom: 20px;
      width: 100%;

      .label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        font-size: 1rem;
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
        .skill-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }

      .bar-container {
        background: #333;
        border-radius: 10px;
        overflow: hidden;
        height: 20px;

        .bar {
          height: 100%;
          background: linear-gradient(90deg, #00ff00, #00cc00);
          box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
          border-radius: 10px;
        }
      }
    }
  }
`;

export default Styled;
