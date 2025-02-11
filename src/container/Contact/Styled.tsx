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

  .contact-wrapper {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    background-color: #000;
    width: 65vw;
    min-height: 40vh;
    padding: 30px 40px;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 20px;
    animation: ${pulseBoxShadow} 2s infinite;

    h1 {
      color: #39ff14;
      text-align: center;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
        0 0 6px #228b22;
      font-size: var(--font-lg);
    }

    .contact-detail {
      font-size: 1.2rem;
      color: #39ff14;
      margin-bottom: 15px;
      a {
        color: #39ff14;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      strong {
        color: #fff;
      }
    }
  }
`;

export default Styled;
