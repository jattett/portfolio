import styled from 'styled-components';

export const Styled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-color);
  color: white;
  padding: 20px;
  overflow-y: auto;
  position: relative;

  /* 실제 마크업에 맞춘 클래스명: .project-grid */
  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
  }

  .project-card {
    background: linear-gradient(135deg, 
      rgba(57, 255, 20, 0.1) 0%, 
      rgba(0, 0, 0, 0.8) 100%);
    border-radius: 20px;
    padding: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(57, 255, 20, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    .project-image {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(57, 255, 20, 0.2);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .project-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;

        span {
          color: #39ff14;
          font-weight: 600;
          text-shadow: 0 0 10px #39ff14;
        }
      }

      &:hover img {
        transform: scale(1.05);
      }
      &:hover .project-overlay {
        opacity: 1;
      }
    }

    .project-info {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      h3 {
        color: #39ff14;
        font-size: 1.2rem;
        margin: 0;
        text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
      }

      p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0;
        line-height: 1.4;
        font-size: 0.95rem;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;

        .tech-tag {
          background: rgba(57, 255, 20, 0.15);
          color: #39ff14;
          border: 1px solid rgba(57, 255, 20, 0.3);
          padding: 4px 10px;
          border-radius: 14px;
          font-size: 0.8rem;
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(57, 255, 20, 0.1) 0%, 
        transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      border-color: rgba(57, 255, 20, 0.5);
      box-shadow: 0 0 30px rgba(57, 255, 20, 0.3);
      transform: translateY(-5px);

      &::before {
        opacity: 1;
      }
    }

    .click-text {
      color: rgba(57, 255, 20, 0.8);
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 15px;
      font-weight: 500;
    }

    .content {
      margin-top: 15px;

      h3 {
        color: #39ff14;
        font-size: 1.3rem;
        font-weight: 700;
        margin-bottom: 10px;
        text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        line-height: 1.5;
        margin: 0;
      }
    }
  }

                /* 모달 스타일 */
              .modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                backdrop-filter: blur(5px);
                cursor: pointer;
              }

  .modal-content {
    background: linear-gradient(135deg, 
      rgba(57, 255, 20, 0.1) 0%, 
      rgba(0, 0, 0, 0.95) 100%);
    border: 2px solid rgba(57, 255, 20, 0.3);
    border-radius: 25px;
    padding: 40px;
    width: 95%;
    height: 95%;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(15px);
    box-shadow: 
      0 0 50px rgba(57, 255, 20, 0.2),
      inset 0 0 50px rgba(57, 255, 20, 0.05);
    display: flex;
    flex-direction: column;
    cursor: default;
    max-width: 900px;
    max-height: 600px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 30%, rgba(57, 255, 20, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #fff;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      z-index: 10;

      &:hover {
        background: rgba(255, 0, 0, 0.2);
        border-color: rgba(255, 0, 0, 0.5);
        color: #ff4444;
      }
    }

    .modal-header {
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(57, 255, 20, 0.3);
      text-align: center;

      .modal-title h3 {
        color: #39ff14;
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0 0 15px 0;
        text-shadow: 0 0 20px #39ff14;
      }

      .modal-description {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        margin: 0;
        line-height: 1.5;
      }
    }

    .modal-body {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      overflow: hidden;

      .image-section {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .image-container {
          position: relative;
          flex: 1;
          border-radius: 15px;
          overflow: hidden;
          border: 2px solid rgba(57, 255, 20, 0.3);
          background: rgba(0, 0, 0, 0.5);

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .nav-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(57, 255, 20, 0.8);
            border: none;
            color: black;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(57, 255, 20, 1);
              transform: translateY(-50%) scale(1.1);
            }

            &.prev {
              left: 10px;
            }

            &.next {
              right: 10px;
            }
          }
        }

        .image-indicators {
          display: flex;
          justify-content: center;
          gap: 10px;

          .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            border: 2px solid #39ff14;
            background: transparent;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(57, 255, 20, 0.5);
            }

            &.active {
              background: #39ff14;
              box-shadow: 0 0 10px #39ff14;
            }
          }
        }

        .project-links {
          display: flex;
          gap: 15px;
          justify-content: center;

          .project-link {
            padding: 12px 24px;
            border: 2px solid #39ff14;
            background: transparent;
            color: #39ff14;
            border-radius: 25px;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;

            &:hover {
              background: rgba(57, 255, 20, 0.1);
              box-shadow: 0 0 20px rgba(57, 255, 20, 0.3);
            }

            &.github {
              svg {
                font-size: 1.2rem;
              }
            }
          }
        }
      }

      .info-section {
        display: flex;
        flex-direction: column;
        gap: 30px;
        overflow-y: auto;

        .skills-section, .description-section {
          h4 {
            color: #39ff14;
            font-size: 1.4rem;
            font-weight: 600;
            margin-bottom: 20px;
            text-shadow: 0 0 10px #39ff14;
          }
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          .skill-tag {
            background: rgba(57, 255, 20, 0.2);
            color: #39ff14;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            border: 1px solid rgba(57, 255, 20, 0.3);
            transition: all 0.3s ease;

            &:hover {
              background: rgba(57, 255, 20, 0.3);
              box-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
            }
          }
        }

        .description-list {
          display: flex;
          flex-direction: column;
          gap: 15px;

          .description-item {
            display: flex;
            gap: 12px;
            align-items: flex-start;

            .description-bullet {
              width: 8px;
              height: 8px;
              background: #39ff14;
              border-radius: 50%;
              margin-top: 6px;
              flex-shrink: 0;
              box-shadow: 0 0 10px #39ff14;
            }

            p {
              color: rgba(255, 255, 255, 0.9);
              font-size: 0.95rem;
              line-height: 1.5;
              margin: 0;
            }
          }
        }
      }
    }
  }

  /* 스크롤바 스타일 */
  .info-section::-webkit-scrollbar {
    width: 6px;
  }

  .info-section::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .info-section::-webkit-scrollbar-thumb {
    background: rgba(57, 255, 20, 0.5);
    border-radius: 3px;
  }

  .info-section::-webkit-scrollbar-thumb:hover {
    background: rgba(57, 255, 20, 0.7);
  }

  /* 반응형 디자인 */
  @media (max-width: 1024px) {
    .project-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .modal-content {
      padding: 30px;

      .modal-body {
        grid-template-columns: 1fr;
        gap: 30px;
        height: auto;
        max-height: 70vh;
        overflow-y: auto;
      }
    }
  }

  @media (max-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .modal-content {
      padding: 20px;
      width: 98%;
      height: 98%;

      .modal-header .modal-title h3 {
        font-size: 1.8rem;
      }

      .modal-body {
        .image-section {
          .project-links {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
  }
`;
