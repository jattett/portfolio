import { motion } from 'framer-motion';
import { MdCode, MdPalette, MdWork } from 'react-icons/md';
import { Styled, NeonBorder } from './Styled';
import { globalModalState } from '../main';
import infoData from '../../data/info.json';

// Images under public should be referenced by absolute path
const ProfileImg = '/assets/me.jpg';

function Info() {
  const iconMap: Record<string, JSX.Element> = {
    code: <MdCode />,
    palette: <MdPalette />,
    work: <MdWork />,
  };

  const experiences = infoData.experiences.map((exp) => ({
    icon: iconMap[exp.icon] ?? <MdCode />,
    title: exp.title,
    description: exp.description,
  }));

  return (
    <Styled>
      <motion.div
        className="info-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        onMouseEnter={(e) => e.stopPropagation()}
        onMouseMove={(e) => e.stopPropagation()}
      >
        {/* Styled expects a .section-wrapper around sections */}
        <div className="section-wrapper">
          <motion.div
            className="info-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h1>
          
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onMouseEnter={() => globalModalState.setElementHover('info-intro')}
            onMouseLeave={() => globalModalState.setElementHover(null)}
          >
            <p>
              안녕하세요! 저는 프론트엔드 개발자 강규민입니다.
              사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하며,
              새로운 기술을 배우고 적용하는 것에 열정을 가지고 있습니다.
            </p>
            <p>
              React와 TypeScript를 주로 사용하며, 깔끔하고 유지보수하기 쉬운 코드를 작성하는 것을 중요하게 생각합니다.
              현재 Next.js 프로젝트에 참여하며 백엔드와 데이터베이스에 대한 이해도도 쌓아가고 있습니다.
            </p>
          </motion.div>

          <motion.div
            className="experiences-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            onMouseEnter={() => globalModalState.setElementHover('info-experiences')}
            onMouseLeave={() => globalModalState.setElementHover(null)}
          >
            <h2>What I Do</h2>
            <div className="experiences-grid">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.title}
                  className="experience-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={(e) => e.stopPropagation()}
                  onMouseMove={(e) => e.stopPropagation()}
                >
                  <div className="experience-icon">{exp.icon}</div>
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          </motion.div>

          <motion.div
            className="img-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
          >
            <motion.div
              className="profile-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={ProfileImg} alt="Profile" />
              <NeonBorder />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Styled>
  );
}

export default Info;
