import { useState } from 'react';
import { StyledSlider, Styled, Modal } from './Styled';

// 슬라이더 데이터
const projects = [
  {
    id: 1,
    title: 'DreamScapeAI',
    description:
      'React와 TypeScript 그리고 구글 제미나이와 이미지 오픈 API를 사용해 생성형 이미지 AI를 활용해 만든 서비스 입니다.',
    image: '/assets/project/ai_project.png',
    subdescription:
      'DreamScapeAI는 사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다. 이 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, Google Gemini와 이미지 생성 오픈 API를 활용하여 텍스트 설명을 이미지로 변환하는 기능을 구현하였습니다.',
    skill: 'React,TypeScript,Gemini API, RESTful API, Firebase, AWS',
    playUrl: '',
    Contribution: '',
  },
  {
    id: 2,
    title: '맛운로드',
    description: 'React와 Kakao Map API 를 활용 하여 만든, 맛집 찾기, 종합운동장 찾기 서비스 입니다.',
    image: '/assets/project/ai_project.png',
    subdescription:
      'DreamScapeAI는 사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다. 이 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, Google Gemini와 이미지 생성 오픈 API를 활용하여 텍스트 설명을 이미지로 변환하는 기능을 구현하였습니다.',
    skill: 'React,TypeScript,Gemini API, RESTful API, Firebase, AWS',
    playUrl: '',
    Contribution: '',
  },
  {
    id: 3,
    title: 'AI 코인 차트 분석 서비스',
    description: '준비중',
    image: '/assets/project/potpol_project.png',
    subdescription:
      'DreamScapeAI는 사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다. 이 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, Google Gemini와 이미지 생성 오픈 API를 활용하여 텍스트 설명을 이미지로 변환하는 기능을 구현하였습니다.',
    skill: 'React,TypeScript,Gemini API, RESTful API, Firebase, AWS',
    playUrl: '',
    Contribution: '',
  },
  {
    id: 4,
    title: '포트폴리오 사이트',
    description: 'Vite, React, TypeScript를 사용하여 인터렉션을 중점적으로 만든 사이트 입니다.',
    image: '/assets/project/potpol_project.png',
    subdescription:
      'DreamScapeAI는 사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다. 이 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, Google Gemini와 이미지 생성 오픈 API를 활용하여 텍스트 설명을 이미지로 변환하는 기능을 구현하였습니다.',
    skill: 'React,TypeScript,Gemini API, RESTful API, Firebase, AWS',
    playUrl: '',
    Contribution: '',
  },
  {
    id: 5,
    title: 'Your Trip',
    description: 'React를 활용하여 공공 데이터 API로 만든 전국 여행지 추천 서비스입니다.',
    image: '/assets/project/yourtrip_project.png',
    subdescription:
      'DreamScapeAI는 사용자가 입력한 텍스트를 기반으로 이미지를 생성하는 인공지능 서비스입니다. 이 프로젝트는 React와 TypeScript를 사용하여 개발되었으며, Google Gemini와 이미지 생성 오픈 API를 활용하여 텍스트 설명을 이미지로 변환하는 기능을 구현하였습니다.',
    skill: 'React,TypeScript,Gemini API, RESTful API, Firebase, AWS',
    playUrl: '',
    Contribution: '',
  },
];

const PortfolioSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null); // 선택된 프로젝트 데이터

  // 이미지 클릭 핸들러
  const handleImageClick = (project: (typeof projects)[0]) => {
    console.log('프로젝트 선택됨:', project); // 확인을 위한 콘솔 로그
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // 모달 닫기 핸들러
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // 스크롤 이벤트 차단 핸들러
  const preventScroll = (e: React.UIEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Styled>
      <StyledSlider>
        <div className="slider" onWheel={preventScroll} onTouchMove={preventScroll} onScroll={preventScroll}>
          <div className="slides">
            {projects.map((project) => (
              <div className="slide" key={project.id}>
                <p className="click-text">이미지를 클릭 하면 해당 프로젝트의 상세정보가 나와요!</p>
                <img
                  src={project.image}
                  alt={project.title}
                  onClick={() => handleImageClick(project)} // 클릭 시 프로젝트 데이터 전달
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
        <Modal>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="content-area">
              <div>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <p>사용한 스킬</p>
              <div>{selectedProject.skill}</div>
            </div>
            <div className="info-area">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.subdescription}</p>
            </div>
          </div>
        </Modal>
      )}
    </Styled>
  );
};

export default PortfolioSlider;
