import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Styled } from './Styled';
import { globalModalState } from '../main';
import projectsData from '../../data/projects.json';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  mainimage?: string;
  image?: string;
  images?: string[];
  subdescription?: string[];
  features?: string[];
  skill?: string[];
  technologies?: string[];
  githublink?: string;
  link?: string;
  playlink?: string;
  demo?: string;
}

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const projects = projectsData as ProjectItem[];

  const openModal = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    globalModalState.openModal();
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
        className="project-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => globalModalState.setElementHover('project')}
        onMouseLeave={() => globalModalState.setElementHover(null)}
      >
        <motion.div
          className="project-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Projects</h1>
          <p>클릭하여 프로젝트 상세 정보를 확인하세요</p>
        </motion.div>

        <motion.div
          className="project-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projects.map((project: ProjectItem, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => openModal(project)}
              onMouseEnter={() => globalModalState.setElementHover('project-card')}
              onMouseLeave={() => globalModalState.setElementHover(null)}
            >
              <div className="project-image">
                <img src={project.mainimage ?? project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>클릭하여 상세보기</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {(project.skill ?? project.technologies ?? []).slice(0, 3).map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {(project.skill ?? project.technologies ?? []).length > 3 && (
                    <span className="tech-tag">+{(project.skill ?? project.technologies ?? []).length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
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
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">{selectedProject.description}</p>
                </div>

                <div className="modal-body">
                  <div className="right-content">
                  <div className="project-image-large">
                    {(() => {
                      const images: string[] = Array.isArray(selectedProject.images) ? selectedProject.images : [];
                      const mainSrc: string = images.length > 0
                        ? images[Math.min(activeImageIndex, images.length - 1)]
                        : (selectedProject.mainimage ?? selectedProject.image ?? "");
                      return (
                        <img
                          src={mainSrc}
                          alt={selectedProject.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      );
                    })()}
                  </div>
                  <div className="project-details">
                    <div className="features-section">
                      {Array.isArray(selectedProject.images) && selectedProject.images.length > 0 && (
                        <div
                          className="image-gallery"
                          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 12, marginBottom: 16 }}
                        >
                          {selectedProject.images.map((src: string, idx: number) => {
                            const isActive = idx === activeImageIndex;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setActiveImageIndex(idx)}
                                style={{
                                  padding: 0,
                                  border: isActive ? '2px solid rgba(57, 255, 20, 0.9)' : '2px solid rgba(255,255,255,0.15)',
                                  borderRadius: 10,
                                  overflow: 'hidden',
                                  background: 'transparent',
                                  cursor: 'pointer',
                                }}
                              >
                                <img
                                  src={src}
                                  alt={`${selectedProject.title}-${idx + 1}`}
                                  style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block' }}
                                />
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    </div>
                  </div>
                  <div className='left-content'>
                  <div className="current-stack" style={{ alignSelf: 'start' }}>
                    <h4 style={{ margin: '12px 0' }}>현재 사용 기술</h4>
                    <div className="tech-list">
                      {(selectedProject.skill ?? selectedProject.technologies ?? []).map((tech: string, index: number) => (
                        <span key={index} className="tech-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <ul className="features-list">
                        {(selectedProject.subdescription ?? selectedProject.features ?? []).map((line: string, index: number) => (
                          <li key={index}>{line}</li>
                        ))}
                    </ul>
                      <div className="project-links">
                        {(selectedProject.githublink ?? selectedProject.link) && (
                          <a 
                            href={selectedProject.githublink ?? selectedProject.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link github"
                          >
                            <FaGithub />
                            GitHub
                          </a>
                        )}
                        {(selectedProject.playlink ?? selectedProject.demo) && (
                          <a 
                            href={selectedProject.playlink ?? selectedProject.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link demo"
                          >
                            <FiExternalLink />
                            Live Demo
                          </a>
                        )}
                      </div>
                  </div>
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

export default Project;
