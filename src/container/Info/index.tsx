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
            끊임없이 학습하며 성장하는 프론트엔드 개발자 강규민입니다.
            퍼블리셔로 경력을 시작해 웹·모바일 전반의 UI/UX 구현 경험을 쌓았으며, 이후 React와 TypeScript를 중심으로 한 프론트엔드 개발자로 전향했습니다. 사용자 경험을 고려한 인터랙션 설계와 성능 최적화에 주력하며, 다양한 환경(웹·태블릿·모바일·데스크톱·iOS)에서 일관성 있는 서비스를 구현해 왔습니다.
            </p>
            <p>
            SK하이닉스, KB국민은행, 우리은행 등 다수의 대형 프로젝트에 참여하며 디자인 시스템 구축, 공통 컴포넌트화, 반응형 웹 퍼블리싱, 글로벌 스타일 모듈화 등 재사용성과 유지보수성을 극대화한 개발 경험을 보유하고 있습니다. 특히, KB국민은행 협업 플랫폼 ‘워크비’와 자사 Clush 워크플레이스 협업툴 개발에서는 2만 줄 규모의 글로벌 스타일 코드를 컴포넌트 단위로 분리·모듈화하여 성능 개선과 운영 효율성을 동시에 달성했습니다.
            </p>
            <p>
            최근에는 Spring Boot와 MySQL을 기반으로 API 서버 및 백엔드 로직을 직접 구축하고, LangChain, Whisper, Gemini API를 연동하여 AI 기반 기능을 프론트엔드와 통합하는 등 풀스택 영역으로 역량을 확장하고 있습니다. SaaS 환경에서 회원가입·조직관리·권한제어·다국어 지원(i18n)·마이크로프론트엔드 호환 구조 등을 직접 설계·구현한 경험도 있습니다.
            </p>
            <p>
            낯선 기술을 빠르게 습득하고 실무에 적용하는 능력을 강점으로 삼아, 실용적이면서도 사용자 중심적인 서비스를 만드는 것을 목표로 합니다. 앞으로도 변화하는 기술 환경 속에서 꾸준히 성장하며, 프로젝트의 가치와 완성도를 높이는 개발자가 되겠습니다.
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
