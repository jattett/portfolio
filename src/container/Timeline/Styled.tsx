import styled from 'styled-components';

const modalOpen = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const modalClose = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const Styled = styled.div`
  width: 100vw;
  height: 100dvh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10dvh;
  .timeline-container {
    width: 85vw;
    height: 80dvh;
    margin: 0 auto;
    background-color: #000;
    color: white;
    border-radius: 20px;
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;

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
        }
      }

      .timeline {
        padding-top: 30px;
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;
        height: 55dvh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 50px;
        gap: 10dvh;

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
            padding: 15px 10px;
            font-size: 21px;
            border-radius: 5px;
            text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          }

          .timeline-content {
            border: 2px solid #39ff14;
            box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;
            max-width: 250px;
            width: 100%;
            border-radius: 10px;
            padding: 30px 20px;
            transition: all 0.3s ease-in;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 23px;
            text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
            color: #39ff14;
            cursor: pointer;
            position: relative;
            z-index: 2;
            &:hover {
              scale: 1.1;
            }
            h2 {
              color: #fff;
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
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    &.open {
      width: 100vw;
      height: 100dvh;
    }
    &.close {
      width: 0vw;
      height: 0vh;
    }
  }

  .modal-content {
    background-color: #444444;
    padding: 40px 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 2;
    width: 50vw;
    height: 60dvh;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14;

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
      background: none;
      border: none;
      svg {
        transition: all 0.3s ease-in;
      }
      &:hover {
        svg {
          color: red !important;
        }
      }
    }
    .modal-detail-header {
      padding-bottom: 15px;
      border-bottom: 1px solid #cdcdcd;
      .modal-detail-title {
        display: flex;
        align-items: center;
        gap: 20px;
        h3 {
          font-size: 1.5rem;
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          color: #39ff14;
        }
        p {
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 700;
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          color: #39ff14;
        }
      }
      .description {
        font-size: 1rem;
        line-height: 1.5;
        color: #8c8c8c;
        margin-top: 10px;
      }
    }

    .project-info {
      padding: 30px 10px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 25px;
      .project-contents-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        h3 {
          font-size: 1.2rem;
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          color: #39ff14;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          li {
            font-size: 1rem;
            line-height: 1.5;
            color: #8c8c8c;
            transition: all 0.3s ease-in;
            list-style: square;
            line-height: 1.3;
            cursor: pointer;
            &:hover {
              text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
              color: #39ff14;
              font-weight: 700;
            }
            &.active {
              text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
              color: #39ff14;
              font-weight: 700;
            }
          }
        }
      }
      .index-result-wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        p {
          text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          color: #39ff14;
          word-break: break-all;
        }
        .project-image {
          width: 300px;
          height: 40dvh;
          border-radius: 20px;
          overflow: hidden;
          background: #cdcdcd;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .drawer {
    position: absolute;
    top: 0;
    right: -100%; /* 기본적으로 숨김 */
    width: 300px;
    height: 100dvh;
    background: #000;
    color: white;
    transition: right 0.3s ease-in-out;
    padding: 20px;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
    z-index: 999;
    border-radius: 15px 0 0 15px;
    opacity: 0.8;
    padding: 30px;
  }

  .drawer.open {
    right: 0; /* 마우스를 올리면 나타남 */
  }

  .drawer-content h4 {
    font-size: 21px;
    text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
    color: #39ff14;
  }

  .drawer-content ul {
    margin-top: 20px;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .drawer-content ul li {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 768px) {
    .timeline-container {
      width: 95vw;
      .contents-wrapper {
        .title-wrapper {
          .timeline-title {
            font-size: 21px;
          }
        }
        .timeline {
          margin-top: 80px;
          &::before {
            display: none;
          }
          .timeline-item {
            .timeline-date {
              width: 100%;
              text-align: center;
              top: -60%;
              font-size: 16px;
            }
          }
          .timeline-content {
            h2 {
              font-size: 16px;
            }
          }
        }
      }
    }
    .modal {
      height: 100%;
      .modal-content {
        width: auto;
        height: auto;
        padding: 30px;
        max-height: 100dvh;
        overflow: auto;
        .modal-detail-header {
          .modal-detail-title {
            h3 {
              font-size: 16px;
            }
            p {
              font-size: 14px;
            }
          }
        }
        .project-info {
          flex-direction: column;
          justify-content: flex-start;
          height: auto;
          .index-result-wrapper {
            justify-content: center;
            align-items: flex-start;
            position: relative;
          }
        }
      }
    }
  }
  .drawer {
    width: 200px;
  }
`;

export default Styled;
