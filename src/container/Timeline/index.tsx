import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import Styled from './Styled';
import { globalModalState } from '../main';
import timelineDataJson from '../../data/timeline.json';

interface Project {
  period?: string;
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

  const timelineData: TimelineItem[] = timelineDataJson as TimelineItem[];

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
                            <h4>
                              {project.name}
                              {project.period ? (
                                <span className="project-period" style={{ marginLeft: 8, fontSize: '0.9rem', opacity: 0.8 }}>
                                  {project.period}
                                </span>
                              ) : null}
                            </h4>
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

