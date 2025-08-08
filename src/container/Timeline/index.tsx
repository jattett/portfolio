import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import Styled from './Styled';
import { globalModalState } from '../main';

interface Project {
  name: string;
  description: string;
  skills: string[];
  details: string[];
}

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  projects: Project[];
}

function Timeline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<TimelineItem | null>(null);

  const timelineData = [
    {
      id: 1,
      year: '2024',
      title: '프론트엔드 개발자',
      company: '스타트업',
      description: 'React, TypeScript를 활용한 웹 애플리케이션 개발',
      projects: [
        {
          name: '관리자 대시보드',
          description: 'React와 TypeScript를 사용한 관리자 대시보드 개발',
          skills: ['React', 'TypeScript', 'Styled-Components'],
          details: [
            '사용자 관리 및 권한 시스템 구현',
            '실시간 데이터 시각화 차트 개발',
            '반응형 디자인 적용'
          ]
        },
        {
          name: '모바일 웹 앱',
          description: 'PWA 기술을 활용한 모바일 웹 애플리케이션',
          skills: ['PWA', 'React', 'Service Worker'],
          details: [
            '오프라인 기능 구현',
            '푸시 알림 시스템 개발',
            '모바일 최적화 성능 개선'
          ]
        }
      ]
    },
    {
      id: 2,
      year: '2023',
      title: '웹 개발자',
      company: 'IT 회사',
      description: '다양한 웹 프로젝트 참여 및 기술 스택 확장',
      projects: [
        {
          name: '이커머스 플랫폼',
          description: 'Next.js를 활용한 대규모 이커머스 사이트 개발',
          skills: ['Next.js', 'Node.js', 'MongoDB'],
          details: [
            'SSR/SSG 최적화로 성능 향상',
            '결제 시스템 연동',
            'SEO 최적화 구현'
          ]
        }
      ]
    },
    {
      id: 3,
      year: '2022',
      title: '신입 개발자',
      company: '소프트웨어 회사',
      description: '웹 개발 기초 학습 및 첫 프로젝트 참여',
      projects: [
        {
          name: '포트폴리오 웹사이트',
          description: '개인 포트폴리오 웹사이트 개발',
          skills: ['HTML', 'CSS', 'JavaScript'],
          details: [
            '반응형 웹 디자인 구현',
            '애니메이션 효과 추가',
            '접근성 개선'
          ]
        }
      ]
    }
  ];

  const openModal = (item: TimelineItem) => {
    setModalContent(item);
    setIsModalOpen(true);
    globalModalState.openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    globalModalState.closeModal();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);



  return (
    <Styled>
      <motion.div
        className="timeline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => globalModalState.setElementHover('timeline')}
        onMouseLeave={() => globalModalState.setElementHover(null)}
      >
        <div className="contents-wrapper">
          <motion.div
            className="timeline-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>My Timeline</h1>
            <p>클릭하여 상세 정보를 확인하세요</p>
          </motion.div>

          <motion.div
            className="timeline-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openModal(item)}
                onMouseEnter={() => globalModalState.setElementHover('timeline-item')}
                onMouseLeave={() => globalModalState.setElementHover(null)}
              >
                <div className="timeline-marker" />
                <div className="timeline-content-wrapper">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-info">
                    <h3>{item.title}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
                <span className="click-hint">클릭하여 상세 정보를 확인하세요</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && modalContent && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              style={{ zIndex: 9999 }}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                style={{ zIndex: 10000 }}
                onMouseEnter={() => globalModalState.setElementHover('modal-content')}
                onMouseLeave={() => globalModalState.setElementHover(null)}
              >
                <button className="modal-close" onClick={closeModal}>
                  <MdClose />
                </button>
                
                <div className="modal-header">
                  <h2>{modalContent.title}</h2>
                  <div className="modal-meta">
                    <span className="modal-year">{modalContent.year}</span>
                    <span className="modal-company">{modalContent.company}</span>
                  </div>
                  <p className="modal-description">{modalContent.description}</p>
                </div>

                <div className="modal-body">
                  <h3>주요 프로젝트</h3>
                  <div className="projects-list">
                                         {modalContent.projects.map((project: Project, index: number) => (
                      <div key={index} className="project-items">
                        <div className="project-item">
                          <div className="project-number">{index + 1}</div>
                          <div className="project-text">
                            <h4>{project.name}</h4>
                            <p>{project.description}</p>
                            <div className="project-skills">
                              {project.skills.map((skill: string, skillIndex: number) => (
                                <span key={skillIndex} className="skill-chip">{skill}</span>
                              ))}
                            </div>
                            <div className="project-details">
                              {project.details.map((detail: string, detailIndex: number) => (
                                <div key={detailIndex} className="detail-item">
                                  <span className="detail-bullet">•</span>
                                  <span>{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Styled>
  );
}

export default Timeline;

