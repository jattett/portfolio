import styled from 'styled-components';

const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .timeline-container {
    width: 90vw;
    height: 85vh;
    margin: 0 auto;
    background: linear-gradient(135deg, rgba(57, 255, 20, 0.05) 0%, rgba(0, 0, 0, 0.95) 100%);
    color: white;
    border-radius: 25px;
    border: 1px solid rgba(57, 255, 20, 0.2);
    box-shadow: 
      0 0 30px rgba(57, 255, 20, 0.1),
      inset 0 0 30px rgba(57, 255, 20, 0.05);
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 50%, rgba(57, 255, 20, 0.1) 0%, transparent 70%);
      pointer-events: none;
    }

    .contents-wrapper {
      padding: 40px;
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 1;

      /* 실제 마크업에서 사용하는 .timeline-title 헤더와 안내 문구 스타일 */
      .timeline-title {
        text-align: center;
        h1 {
          color: #39ff14;
          font-size: 3rem;
          font-weight: 900;
          text-shadow: 0 0 20px #39ff14, 0 0 40px #39ff14, 0 0 60px #39ff14;
          letter-spacing: 2px;
          margin: 0 0 10px 0;
        }
        p {
          text-align: center;
          color: rgba(57, 255, 20, 0.8);
          font-size: 1.1rem;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
          margin: 0;
        }
      }

      /* 기존 템플릿용 .title-wrapper는 유지 (다른 마크업 호환) */
      .title-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 40px;

        .timeline-title {
          text-align: center;
          color: #39ff14;
          font-size: 3rem;
          font-weight: 900;
          text-shadow: 
            0 0 20px #39ff14,
            0 0 40px #39ff14,
            0 0 60px #39ff14;
          letter-spacing: 2px;
          margin: 0;
        }

        span {
          text-align: center;
          color: rgba(57, 255, 20, 0.8);
          font-size: 1.1rem;
          font-weight: 500;
          text-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
        }
      }

      /* 실제 마크업의 .timeline-content 컨테이너를 커버 */
      .timeline,
      .timeline-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 30px;
        overflow-y: auto;
        padding: 20px 0;

        .timeline-item {
          background: linear-gradient(135deg, 
            rgba(57, 255, 20, 0.1) 0%, 
            rgba(0, 0, 0, 0.8) 100%);
          border: 2px solid rgba(57, 255, 20, 0.3);
          border-radius: 20px;
          padding: 25px;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;

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

          .timeline-marker {
            flex-shrink: 0;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #39ff14;
            box-shadow: 0 0 10px #39ff14, 0 0 20px #39ff14;
          }

          .timeline-content-wrapper {
            display: flex;
            align-items: center;
            gap: 16px;
            width: 100%;
          }

          .timeline-year {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: linear-gradient(135deg, #000 0%, #111 100%);
            color: #39ff14;
            padding: 8px 12px;
            border-radius: 12px;
            border: 2px solid #39ff14;
            box-shadow: 0 0 15px rgba(57, 255, 20, 0.3), inset 0 0 15px rgba(57, 255, 20, 0.1);
            font-size: 0.9rem;
            font-weight: 700;
            backdrop-filter: blur(10px);
            flex-shrink: 0;
          }

          .timeline-info {
            display: flex;
            flex-direction: column;
            gap: 6px;
            overflow: hidden;

            h3 {
              color: #fff;
              font-size: 1.4rem;
              font-weight: 700;
              margin: 0;
              text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
            }

            h4 {
              color: rgba(255, 255, 255, 0.85);
              font-size: 1rem;
              font-weight: 600;
              margin: 0;
            }

            p {
              color: rgba(255, 255, 255, 0.8);
              font-size: 0.95rem;
              margin: 0;
              line-height: 1.5;
            }
          }

          .timeline-date {
            display: flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #000 0%, #111 100%);
            color: #39ff14;
            padding: 8px 12px;
            border-radius: 12px;
            border: 2px solid #39ff14;
            box-shadow: 
              0 0 15px rgba(57, 255, 20, 0.3),
              inset 0 0 15px rgba(57, 255, 20, 0.1);
            font-size: 0.9rem;
            font-weight: 600;
            backdrop-filter: blur(10px);
            width: fit-content;
            margin-bottom: 15px;

            span {
              font-size: 0.8rem;
            }
          }

          .timeline-content {
            .content-header {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 12px;

              h2 {
                color: #fff;
                font-size: 1.5rem;
                font-weight: 700;
                margin: 0;
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
              }
            }

            .content-description {
              color: rgba(255, 255, 255, 0.8);
              font-size: 1rem;
              margin-bottom: 15px;
              line-height: 1.5;
            }

            .content-skills {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
              margin-bottom: 15px;

              .skill-tag {
                background: rgba(57, 255, 20, 0.2);
                color: #39ff14;
                padding: 3px 8px;
                border-radius: 10px;
                font-size: 0.7rem;
                font-weight: 500;
                border: 1px solid rgba(57, 255, 20, 0.3);
              }
            }

            .click-hint,
            .click-hint span {
              text-align: center;
              margin-top: 10px;

              color: rgba(57, 255, 20, 0.6);
              font-size: 0.85rem;
              font-weight: 500;
              text-shadow: 0 0 5px rgba(57, 255, 20, 0.3);
            }
          }
        }
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
    max-width: 90vw;
    max-height: 600px;
    width: 1000px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(15px);
    box-shadow: 
      0 0 50px rgba(57, 255, 20, 0.2),
      inset 0 0 50px rgba(57, 255, 20, 0.05);
    cursor: default;
    overflow-y: auto;

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

      .modal-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;

        h3 {
          color: #39ff14;
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 0 20px #39ff14;
        }

        .modal-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(57, 255, 20, 0.8);
          font-size: 1rem;
          font-weight: 500;
        }
      }

      .modal-description {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        margin: 0;
        line-height: 1.5;
      }
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .timeline-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .projects-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px 0;
        h4 {
          color: #39ff14;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 20px;
          text-shadow: 0 0 10px #39ff14;
        }

        .project-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 60vh;
          overflow-y: auto;

          .project-item {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(57, 255, 20, 0.2);
            border-radius: 15px;
            padding: 20px;
            display: flex;
            gap: 15px;
            align-items: flex-start;
            transition: all 0.3s ease;

            .project-number {
              background: #39ff14;
              color: #000;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 700;
              font-size: 0.9rem;
              flex-shrink: 0;
            }

            .project-text {
              flex: 1;

              p {
                color: rgba(255, 255, 255, 0.9);
                font-size: 0.95rem;
                line-height: 1.4;
                margin: 0 0 10px 0;
              }

              .project-skills {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-bottom: 15px;

                .skill-chip {
                  background: rgba(57, 255, 20, 0.2);
                  color: #39ff14;
                  padding: 3px 8px;
                  border-radius: 12px;
                  font-size: 0.75rem;
                  border: 1px solid rgba(57, 255, 20, 0.3);
                }
              }

              .project-details {
                display: flex;
                flex-direction: column;
                gap: 8px;

                .detail-item {
                  display: flex;
                  gap: 8px;
                  align-items: flex-start;


                  span {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.9rem;
                    line-height: 1.4;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  /* 스크롤바 스타일 */
  .timeline::-webkit-scrollbar,
  .project-items::-webkit-scrollbar {
    width: 6px;
  }

  .timeline::-webkit-scrollbar-track,
  .project-items::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  .timeline::-webkit-scrollbar-thumb,
  .project-items::-webkit-scrollbar-thumb {
    background: rgba(57, 255, 20, 0.5);
    border-radius: 3px;
  }

  .timeline::-webkit-scrollbar-thumb:hover,
  .project-items::-webkit-scrollbar-thumb:hover {
    background: rgba(57, 255, 20, 0.7);
  }

  /* 반응형 디자인 */
  @media (max-width: 1024px) {
    .timeline-container {
      width: 95vw;
      height: 90vh;

      .contents-wrapper {
        padding: 30px;

        .title-wrapper .timeline-title,
        .timeline-title h1 {
          font-size: 2.5rem;
        }

        .timeline,
        .timeline-content {
          gap: 25px;

          .timeline-item {
            padding: 20px;
            gap: 14px;

            .timeline-content {
              .content-header h2 {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
    }

    .modal-content {
      width: 95vw;
      padding: 30px;

      .modal-body {
        .projects-list {
          .project-items {
            max-height: 50vh;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .timeline-container {
      .contents-wrapper {
        padding: 20px;

        .title-wrapper {
          .timeline-title {
            font-size: 2rem;
          }
        }

        .timeline {
          .timeline-item {
            padding: 15px;

            .timeline-content {
              .content-header h2 {
                font-size: 1.2rem;
              }

              .content-skills {
                .skill-tag {
                  font-size: 0.65rem;
                }
              }
            }
          }
        }
      }
    }

    .modal-content {
      padding: 20px;

      .modal-header .modal-title h3 {
        font-size: 1.5rem;
      }

      .modal-body {
        .projects-list {
          .project-items {
            .project-item {
              flex-direction: column;
              gap: 10px;

              .project-number {
                align-self: flex-start;
              }
            }
          }
        }
      }
    }
  }
`;

export default Styled;
