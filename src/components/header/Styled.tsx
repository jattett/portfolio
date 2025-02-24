import styled, { keyframes } from 'styled-components';

const bgGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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

const HeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  max-height: 70px;
  position: absolute;
  z-index: 1;
  transition: 0.5s ease-in-out;
  opacity: 1;
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--black-color);
    transition: opacity 0.7s ease;
    &.scrolled {
      opacity: 0;
    }
    h1 {
      font-family: 'Press Start 2P', monospace;
      animation: ${bgGradient} 5s linear infinite;
      font-weight: 700;
      font-size: var(--font-xxl);
      display: inline-block;
      background-image: linear-gradient(
        100deg,
        #4fb576 0%,
        #44c489 30%,
        #28a9ae 46%,
        #28a2b7 59%,
        #4c7788 71%,
        #6c4f63 86%,
        #432c39 100%
      );
      background-size: 500% auto;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: 0.3s ease-in;
      cursor: pointer;
    }

    nav {
      ul {
        display: flex;
        align-items: center;
        gap: 30px;
        li {
          font-family: 'Press Start 2P', monospace;
          font-size: var(--font-sd);
          position: relative;
          cursor: pointer;
          transition: 0.3s ease-in;
          color: #39ff14;
          text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
            0 0 6px #228b22;
          &::before {
            content: '';
            width: 0%;
            transition: 0.3s ease-in;
          }
          &:hover {
            animation: ${fadeInfinity} 0.8s;
            color: var(--green-color);
            &::before {
              content: '';
              width: 100%;
              height: 3px;
              position: absolute;
              bottom: -35px;
              background-color: #39ff14;
              box-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32;
            }
          }
        }
      }
    }
    .hamburger-button {
      display: none; /* 기본적으로 PC에서는 숨김 */
      background: none;
      border: none;
      color: #39ff14;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
        0 0 6px #228b22;
      cursor: pointer;
    }
  }
  /* 모바일 드로어 */
  .mobile-drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 240px;
    height: 100vh;
    background: #222;
    transform: translateX(100%); /* 기본적으로 오른쪽 밖에 숨김 */
    transition: transform 0.3s ease-in-out;
    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;

    .drawer-close {
      margin-left: auto; /* 오른쪽 정렬 */
      background: none;
      border: none;
      color: #39ff14;
      cursor: pointer;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      width: 100%;
    }
    li {
      padding: 10px 0;
      cursor: pointer;
      border-bottom: 1px solid #fff;
      transition: color 0.2s;
      color: #39ff14;
      text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
        0 0 6px #228b22;
    }
  }

  /* 드로어가 열렸을 때 */
  .mobile-drawer.open {
    transform: translateX(0);
  }

  @media screen and (max-width: 768px) {
    .header-wrapper {
      nav {
        ul {
          display: none;
        }
      }
      .hamburger-button {
        display: flex;
      }
    }
  }
`;

export default HeaderStyled;
