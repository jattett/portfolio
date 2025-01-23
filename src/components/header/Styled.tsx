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

interface HeaderStyledProps {
  isScrolled: boolean;
}

const HeaderStyled = styled.div<HeaderStyledProps>`
  width: 100%;
  height: 100%;
  max-height: 70px;
  position: fixed;
  z-index: 1;
  box-shadow: -1px 9px 8px 4px rgba(0, 0, 0, 0.4);
  transition: 0.5s ease-in-out;
  opacity: ${(props) => (props.isScrolled ? '0' : '1')};
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--black-color);
    h1 {
      font-family: 'Jersey 15', serif;
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
          font-family: 'Jersey 15', serif;
          font-size: var(--font-sd);
          position: relative;
          cursor: pointer;
          transition: 0.3s ease-in;
          color: #39ff14;
          font-family: 'Bebas Neue', serif;
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
  }
`;

export default HeaderStyled;
