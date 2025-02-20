import { useState } from 'react';
import { StyledSlider, Styled, Modal } from './Styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub } from 'react-icons/fa';

// 슬라이더 데이터
const projects = [
  {
    id: 1,
    title: 'DreamScapeAI',
    description:
      'React와 TypeScript 그리고 구글 제미나이와 이미지 오픈 API를 사용해 생성형 이미지 AI를 활용해 만든 서비스 입니다.',
    mainimage: '/assets/project/ai_project.png',
    images: [
      '/assets/project/ai_project.png',
      '/assets/project/coin_chart_1.png',
      '/assets/project/yourtrip_project.png',
    ],
    subdescription: [
      '사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다.',
      'Gemini API를 활용하여 이미지 생성 기능을 구현하였습니다.',
      'Firebase를 이용한 데이터 저장 및 관리 기능을 제공합니다.',
    ],
    skill: 'React, TypeScript, Gemini API, RESTful API, Firebase, AWS',
  },
  {
    id: 2,
    title: '맛운로드',
    description: 'React와 Kakao Map API 를 활용 하여 만든, 맛집 찾기, 종합운동장 찾기 서비스 입니다.',
    mainimage: '/assets/project/ai_project.png',
    images: [
      '/assets/project/ai_project.png',
      '/assets/project/coin_chart_1.png',
      '/assets/project/yourtrip_project.png',
    ],
    subdescription: '카카오 맵 API를 활용하여 맛집 및 운동 장소를 추천하는 서비스입니다.',
    skill: 'React, TypeScript, Kakao Map API, RESTful API',
  },
  {
    id: 3,
    title: 'AI 코인 차트 분석 서비스',
    description: '준비중',
    mainimage: '/assets/project/ai_project.png',
    images: [
      '/assets/project/ai_project.png',
      '/assets/project/coin_chart_1.png',
      '/assets/project/yourtrip_project.png',
    ],
    subdescription: 'AI를 활용한 코인 가격 분석 및 예측 서비스.',
    skill: 'React, TypeScript, Chart.js, Firebase, AWS',
  },
  {
    id: 4,
    title: '포트폴리오 사이트',
    description: 'Vite, React, TypeScript를 사용하여 인터렉션을 중점적으로 만든 사이트 입니다.',
    mainimage: '/assets/project/potpol_project.png',
    images: [
      '/assets/project/ai_project.png',
      '/assets/project/coin_chart_1.png',
      '/assets/project/yourtrip_project.png',
    ],
    subdescription: '개인 포트폴리오 웹사이트로, 인터랙션을 강조한 프로젝트입니다.',
    skill: 'React, TypeScript, Vite, SCSS',
  },
  {
    id: 5,
    title: 'Your Trip',
    description: 'React를 활용하여 공공 데이터 API로 만든 전국 여행지 추천 서비스입니다.',
    mainimage: '/assets/project/yourtrip_project.png',
    images: [
      '/assets/project/ai_project.png',
      '/assets/project/coin_chart_1.png',
      '/assets/project/yourtrip_project.png',
    ],
    subdescription: '공공 데이터 API를 활용한 여행지 추천 서비스.',
    skill: 'React, TypeScript, OpenAPI, Firebase',
  },
];

const PortfolioSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  // 이미지 클릭 핸들러
  const handleImageClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Styled>
      <StyledSlider>
        <div className="slider">
          <div className="slides">
            {projects.map((project) => (
              <div className="slide" key={project.id}>
                <p className="click-text">이미지를 클릭 하면 해당 프로젝트의 상세정보가 나와요!</p>
                <img
                  src={project.mainimage}
                  alt={project.title}
                  onClick={() => handleImageClick(project)}
                  style={{ cursor: 'pointer' }}
                />
                <div className="content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StyledSlider>

      {/* 모달 */}
      {isModalOpen && selectedProject && (
        <Modal className={`modal ${isModalOpen ? 'open' : ''}`}>
          <div className="modal-content open">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-detail-title">
              <h3>{selectedProject.title}</h3>
            </div>
            <div className="content-area">
              <Slider
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={false}
                autoplaySpeed={3000}
              >
                {selectedProject.images.map((img, index) => (
                  <div className="image-wrapper" key={index}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} 이미지 ${index + 1}`}
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                    <div className="button-area">
                      <button className="github-button">
                        <FaGithub />
                      </button>
                      <button className="play-button">Play!</button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="info-area">
              <div className="skill-area">
                <h3>SKill Set</h3>
                <p>{selectedProject.skill}</p>
              </div>
              <div className="description-area">
                <h3>설명란</h3>
                <ul>
                  {Array.isArray(selectedProject.subdescription) ? (
                    selectedProject.subdescription.map((desc, index) => <li key={index}>{desc}</li>)
                  ) : (
                    <li>{selectedProject.subdescription}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Styled>
  );
};

export default PortfolioSlider;
