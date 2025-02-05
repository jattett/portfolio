import React, { useState } from 'react';
import { StyledSlider, Styled, Modal } from './Styled';

// 슬라이더 데이터
const projects = [
  {
    id: 1,
    title: 'eCommerce Website',
    description: 'React와 TypeScript를 사용해 상품 필터링 및 검색 기능을 구현한 프로젝트입니다.',
    image: 'https://via.placeholder.com/600x300?text=eCommerce+Project',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'React와 Styled-Components를 활용해 제작한 반응형 포트폴리오 웹사이트입니다.',
    image: 'https://via.placeholder.com/600x300?text=Portfolio+Website',
  },
  {
    id: 3,
    title: 'Todo App',
    description: 'React와 Redux를 사용하여 상태 관리 및 CRUD 기능을 구현한 프로젝트입니다.',
    image: 'https://via.placeholder.com/600x300?text=Todo+App',
  },
];

const PortfolioSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null); // 선택된 프로젝트 데이터

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
        <Modal>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </Modal>
      )}
    </Styled>
  );
};

export default PortfolioSlider;
