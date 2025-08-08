import styled, { keyframes } from 'styled-components';

const neonGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 5px #39ff14,
      0 0 10px #39ff14,
      0 0 15px #39ff14,
      0 0 20px #39ff14;
  }
  50% {
    box-shadow: 
      0 0 2px #39ff14,
      0 0 5px #39ff14,
      0 0 8px #39ff14,
      0 0 12px #39ff14;
  }
`;

export const Styled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--black-color);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .info-container {
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

    .section-wrapper {
      display: flex;
      height: 100%;
      position: relative;
      z-index: 1;

                                                                                                               .info-section {
          flex: 1;
          padding: 40px;
          overflow-y: auto;
          max-height: 100%;
          display: flex;
          flex-direction: column;

        h1 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 30px;
          line-height: 1.4;
          color: #fff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

          b {
            color: #39ff14;
            text-shadow: 0 0 20px #39ff14;
          }
        }

                 .intro-text {
           margin-bottom: 20px;

          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.9);
            margin: 0;

            b {
              color: #39ff14;
              font-weight: 600;
            }
          }
        }

                 .skills-section {
           margin-bottom: 20px;

          h2 {
            color: #39ff14;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            text-shadow: 0 0 15px #39ff14;
          }

                     .skills-grid {
             display: grid;
             grid-template-columns: repeat(2, 1fr);
             gap: 15px;

                         .skill-item {
               background: rgba(255, 255, 255, 0.05);
               border: 1px solid rgba(57, 255, 20, 0.2);
               border-radius: 15px;
               padding: 12px;
              backdrop-filter: blur(10px);

              .skill-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;

                .skill-name {
                  color: #fff;
                  font-weight: 600;
                  font-size: 1rem;
                }

                .skill-level {
                  color: #39ff14;
                  font-weight: 700;
                  font-size: 0.9rem;
                }
              }

              .skill-bar {
                width: 100%;
                height: 8px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
                overflow: hidden;

                .skill-progress {
                  height: 100%;
                  background: linear-gradient(90deg, #39ff14, #00ff88);
                  border-radius: 4px;
                  box-shadow: 0 0 10px rgba(57, 255, 20, 0.5);
                }
              }
            }
          }
        }

                 .experiences-section {
           margin-bottom: 20px;

          h2 {
            color: #39ff14;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 15px;
            text-shadow: 0 0 15px #39ff14;
          }

                     .experiences-grid {
             display: grid;
             grid-template-columns: repeat(2, 1fr);
             gap: 15px;

                         .experience-item {
               background: rgba(255, 255, 255, 0.05);
               border: 1px solid rgba(57, 255, 20, 0.2);
               border-radius: 15px;
               padding: 15px;
              text-align: center;
              backdrop-filter: blur(10px);
              transition: all 0.3s ease;

              &:hover {
                border-color: rgba(57, 255, 20, 0.5);
                box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
              }

              .experience-icon {
                font-size: 2rem;
                color: #39ff14;
                margin-bottom: 10px;
                text-shadow: 0 0 15px #39ff14;
              }

              h3 {
                color: #fff;
                font-size: 1.2rem;
                font-weight: 600;
                margin-bottom: 10px;
              }

              p {
                color: rgba(255, 255, 255, 0.8);
                font-size: 0.9rem;
                line-height: 1.5;
                margin: 0;
              }
            }
          }
        }


      }

             .img-section {
         width: 350px;
         display: flex;
         align-items: center;
         justify-content: center;
         padding: 30px;

                 .profile-container {
           position: relative;
           width: 280px;
           height: 350px;
          border-radius: 20px;
          overflow: hidden;
          border: 2px solid rgba(57, 255, 20, 0.3);
          box-shadow: 0 0 30px rgba(57, 255, 20, 0.2);

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .profile-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
            padding: 30px 20px 20px;
            text-align: center;

            .profile-info {
              h3 {
                color: #39ff14;
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 5px;
                text-shadow: 0 0 10px #39ff14;
              }

              p {
                color: rgba(255, 255, 255, 0.8);
                font-size: 1rem;
                margin-bottom: 20px;
              }

              .profile-stats {
                display: flex;
                justify-content: space-around;

                .stat {
                  text-align: center;

                  .stat-number {
                    display: block;
                    color: #39ff14;
                    font-size: 1.5rem;
                    font-weight: 700;
                    text-shadow: 0 0 10px #39ff14;
                  }

                  .stat-label {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: 0.8rem;
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
    .info-container {
      width: 95vw;
      height: 90vh;

      .section-wrapper {
        flex-direction: column;

        .info-section {
          padding: 30px;

          h1 {
            font-size: 1.8rem;
          }

          .skills-section,
          .experiences-section {
            h2 {
              font-size: 1.5rem;
            }
          }

          .experiences-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;

            .experience-item {
              padding: 20px;

              .experience-icon {
                font-size: 2rem;
              }

              h3 {
                font-size: 1.1rem;
              }
            }
          }
        }

        .img-section {
          width: 100%;
          padding: 20px;

          .profile-container {
            width: 250px;
            height: 350px;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .info-container {
      .section-wrapper {
        .info-section {
          padding: 20px;

          h1 {
            font-size: 1.5rem;
          }

          .intro-text p {
            font-size: 1rem;
          }

          .skills-section,
          .experiences-section {
            h2 {
              font-size: 1.3rem;
            }
          }

          .experiences-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }


        }

        .img-section {
          .profile-container {
            width: 200px;
            height: 280px;
          }
        }
      }
    }
  }
`;

export const NeonBorder = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  p {
    color: #39ff14;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 10px 20px;
    border: 2px solid #39ff14;
    border-radius: 25px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    animation: ${neonGlow} 2s ease-in-out infinite alternate;
    text-shadow: 0 0 10px #39ff14;
  }
`;
