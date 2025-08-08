import styled from 'styled-components';

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: var(--black-color);

  .sections-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .section {
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navigation-dots {
    position: fixed;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000;

    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid #39ff14;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      &.active {
        background: linear-gradient(45deg, #39ff14, #32cd32);
        box-shadow: 0 0 15px rgba(57, 255, 20, 0.6);
      }

      &:hover {
        background: rgba(57, 255, 20, 0.3);
        transform: scale(1.2);
        box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
      }

      .active-indicator {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: transparent;
        border: 1px solid rgba(57, 255, 20, 0.3);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover::before {
        opacity: 1;
      }
    }
  }

  .scroll-progress {
    box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
  }

  .background-effects {
    pointer-events: none;
  }

  /* Enhanced scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(57, 255, 20, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #39ff14, #32cd32);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #32cd32, #39ff14);
  }

  @media (max-width: 768px) {
    .navigation-dots {
      right: 15px;
      gap: 12px;

      .dot {
        width: 12px;
        height: 12px;

        .active-indicator {
          width: 4px;
          height: 4px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .navigation-dots {
      right: 10px;
      gap: 10px;

      .dot {
        width: 10px;
        height: 10px;

        .active-indicator {
          width: 3px;
          height: 3px;
        }
      }
    }
  }

  /* Loading animation for sections */
  .section {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(57, 255, 20, 0.05) 50%,
        transparent 70%
      );
      animation: shimmer 2s infinite;
      pointer-events: none;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  /* Enhanced focus states */
  .dot:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(57, 255, 20, 0.3);
  }

  /* NOTE: Avoid global transition on all properties to prevent conflicts with framer-motion */
`;

export default Styled;
