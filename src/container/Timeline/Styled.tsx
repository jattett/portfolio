import styled, { keyframes } from 'styled-components';

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
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;
  .timeline-container {
    width: 85vw;
    height: 80vh;
    margin: 0 auto;
    background-color: #000;
    color: white;
    border-radius: 20px;
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    animation: ${pulseBoxShadow} 3s infinite;

    .contents-wrapper {
      padding: 50px;
      .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        .timeline-title {
          text-align: center;
          color: #39ff14;
          font-size: 2.5rem;
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
        }
        span {
          text-align: center;
          color: #39ff14;
          font-size: 16px;
          text-align: center;
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          animation: ${fadeInfinity} 5s infinite;
        }
      }

      .timeline {
        padding-top: 30px;
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 55vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 50px;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: #39ff14;
        }

        .timeline-item {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:nth-child(even) {
            justify-content: flex-end;
          }

          .timeline-date {
            position: absolute;
            top: 0;
            left: calc(50% - 2px);
            transform: translateX(-50%);
            background-color: #000;
            color: #39ff14;
            padding: 5px 10px;
            font-size: 1rem;
            border-radius: 5px;
          }

          .timeline-content {
            border: 2px solid #39ff14;
            box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
            max-width: 400px;
            width: 100%;
            border-radius: 10px;
            padding: 15px 20px;
            transition: all 0.3s ease-in;
            &:hover {
              scale: 1.1;
            }
          }
        }
      }
    }
  }

  /* 모달 스타일 */
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 300px;
    z-index: 2;

    h2 {
      font-size: 1.5rem;
      color: #39ff14;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export default Styled;
