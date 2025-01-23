import styled from 'styled-components';

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vh;

  .section-wrapper {
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
    border-radius: 20px;
    display: grid;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    background-color: #000;
    width: 80vw;
    min-height: 40vh;
    padding: 30px 40px;
    grid-template-columns: 1.5fr 0.5fr;
    gap: 40px;
    .info-section {
      display: flex;
      gap: 20px;
      flex-direction: column;

      h1 {
        font-size: var(--font-xxl);
        color: #c0c0c0;
      }
      p {
        font-size: var(--font-lg);
        color: #c0c0c0;
        word-break: break-word;
        line-height: 1.3;
      }
      b {
        font-size: var(--font-xl);
        color: #39ff14;
        text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32,
          0 0 6px #228b22;
      }
    }
    .img-section {
      background-color: #fff;
      border-radius: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const NeonBorder = styled.div`
  width: 70vw;
  padding: 40px 30px;
  border: 4px solid transparent;
  border-radius: 20px;
  background-size: 300% 300%;
  border: 4px solid #39ff14;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 36px;
  font-weight: 700;
  color: #39ff14;
  font-family: 'Bebas Neue', serif;
  text-shadow: 0 0 0px #39ff14, 0 0 17px #39ff14, 0 0 0px #39ff14, 0 0 8px #39ff14, 0 0 30px #32cd32, 0 0 6px #228b22;
  box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
  rotate: 5deg;
`;

export { Styled, NeonBorder };
