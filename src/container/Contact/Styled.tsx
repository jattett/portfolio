import styled, { keyframes } from 'styled-components';

const fadeInfinity = keyframes`
  0%, 100% {
    opacity: 0.5;
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
  position: relative;
  overflow: hidden;

  .contact-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    position: relative;
    z-index: 1;
  }

  .contact-title {
    text-align: center;
    margin-bottom: 2vh;

    h1 {
      font-size: 3.5rem;
      font-weight: 700;
      color: #39ff14;
      margin-bottom: 1rem;
      text-shadow: 0 0 20px #39ff14;
      cursor: pointer;
    }

    p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      cursor: pointer;
    }
  }

  .contact-items-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .reorder-group {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem;
    width: 100%;
    min-height: 250px;
  }

  .contact-item {
    width: 280px;
    height: 200px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: grab;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    user-select: none;
    touch-action: none;
    will-change: transform;

    &:active {
      cursor: grabbing;
    }

    &:focus {
      outline: none;
    }

    &[data-dragging="true"] {
      cursor: grabbing;
      transform: rotate(5deg) scale(1.05);
      box-shadow: 0 20px 40px rgba(57, 255, 20, 0.4);
      z-index: 1000;
    }

    .item-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      z-index: 2;
      position: relative;
      pointer-events: none;
    }

    .item-icon {
      font-size: 3rem;
      color: #39ff14;
      text-shadow: 0 0 15px #39ff14;
      margin-bottom: 0.5rem;
      pointer-events: none;
    }

    .item-title {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      pointer-events: none;
    }

    .item-link {
      pointer-events: auto;

      .contact-link {
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        font-size: 0.9rem;
        word-break: break-all;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
          color: #39ff14;
          text-shadow: 0 0 10px #39ff14;
        }
      }

      span {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        word-break: break-all;
      }
    }

    .item-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      pointer-events: none;
      z-index: 1;
    }
  }

  .interaction-hint {
    text-align: center;
    margin-top: 2vh;

    p {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
      margin: 0;
      animation: ${fadeInfinity} 3s ease-in-out infinite;
    }
  }

  /* Responsive Design */
  @media screen and (max-width: 1024px) {
    .contact-title h1 {
      font-size: 2.5rem;
    }

    .reorder-group {
      gap: 1.5rem;
      padding: 1rem;
    }

    .contact-item {
      width: 240px;
      height: 180px;
      padding: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    .contact-title h1 {
      font-size: 2rem;
    }

    .contact-title p {
      font-size: 1rem;
    }

    .reorder-group {
      flex-direction: column;
      gap: 1rem;
    }

    .contact-item {
      width: 280px;
      height: 160px;
      padding: 1.5rem;
    }

    .item-icon {
      font-size: 2.5rem;
    }

    .item-title {
      font-size: 1.3rem;
    }
  }

  @media screen and (max-width: 480px) {
    .contact-container {
      gap: 3vh;
    }

    .contact-title h1 {
      font-size: 1.8rem;
    }

    .contact-items-container {
      padding: 0 1rem;
    }

    .contact-item {
      width: 260px;
      height: 150px;
      padding: 1rem;
    }

    .item-icon {
      font-size: 2rem;
    }

    .item-title {
      font-size: 1.2rem;
    }

    .item-link .contact-link,
    .item-link span {
      font-size: 0.8rem;
    }
  }
`;

export default Styled;
