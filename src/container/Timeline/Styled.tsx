import styled from 'styled-components';

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .timeline-container {
    padding: 50px;
    width: 80vw;
    margin: 0 auto;
    background-color: var(--black-color);
    color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;

    .timeline-title {
      text-align: center;
      color: #39ff14;
      font-size: 2.5rem;
      margin-bottom: 30px;
      text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
    }

    .timeline {
      position: relative;
      margin: 0;
      padding: 0;
      list-style: none;

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
        margin-bottom: 50px;

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
          z-index: 1;
        }

        .timeline-content {
          background-color: #1a1a1a;
          color: white;
          border-radius: 10px;
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
      }
    }
  }
`;

export default Styled;
