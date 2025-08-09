import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { Styled } from "./Styled";
import { globalModalState } from "../main";

function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "포트폴리오 웹사이트",
      description: "React와 Framer Motion을 활용한 인터랙티브 포트폴리오",
      image: "/assets/project/portfolio.png",
      technologies: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Styled-Components",
      ],
      features: [
        "풀페이지 스크롤 애니메이션",
        "드래그 앤 드롭 인터랙션",
        "반응형 디자인",
        "성능 최적화",
      ],
      link: "https://github.com/jattett/portfolio",
      demo: "https://portfolio-4vhc.vercel.app/",
    },
    {
      id: 2,
      title: "AI 프로젝트",
      description: "머신러닝을 활용한 데이터 분석 및 시각화 플랫폼",
      image: "/assets/project/ai_project.png",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
      features: [
        "실시간 데이터 처리",
        "인터랙티브 차트",
        "AI 모델 통합",
        "대시보드 시스템",
      ],
      link: "https://github.com/jattett/ai-project",
      demo: "https://ai-project-demo.vercel.app/",
    },
    {
      id: 3,
      title: "EchoMind",
      description: "음성 인식 기반 메모 및 할일 관리 애플리케이션",
      image: "/assets/project/echomind_1.png",
      technologies: ["React Native", "Speech Recognition", "Firebase"],
      features: [
        "음성 명령 인식",
        "실시간 동기화",
        "오프라인 지원",
        "크로스 플랫폼",
      ],
      link: "https://github.com/jattett/echomind",
      demo: "https://echomind-app.vercel.app/",
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    globalModalState.openModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    globalModalState.closeModal();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isModalOpen]);

  return (
    <Styled>
      <motion.div
        className="project-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={() => globalModalState.setElementHover("project")}
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              onClick={() => openModal(project)}
              onMouseEnter={() =>
                globalModalState.setElementHover("project-card")
              }
              onMouseLeave={() => globalModalState.setElementHover(null)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span>클릭하여 상세보기</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">
                      +{project.technologies.length - 3}
                    </span>
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
                onMouseEnter={() =>
                  globalModalState.setElementHover("modal-content")
                }
                onMouseLeave={() => globalModalState.setElementHover(null)}
              >
                <button className="modal-close" onClick={closeModal}>
                  <MdClose />
                </button>

                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-description">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="modal-body">
                  <div className="project-image-large">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                    />
                  </div>

                  <div className="project-details">
                    <div className="technologies-section">
                      <h3>사용 기술</h3>
                      <div className="tech-list">
                        {selectedProject.technologies.map(
                          (tech: string, index: number) => (
                            <span key={index} className="tech-chip">
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="features-section">
                      <h3>주요 기능</h3>
                      <ul className="features-list">
                        {selectedProject.features.map(
                          (feature: string, index: number) => (
                            <li key={index}>{feature}</li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="project-links">
                      {selectedProject.link && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          GitHub
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link demo"
                        >
                          Live Demo
                        </a>
                      )}
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
