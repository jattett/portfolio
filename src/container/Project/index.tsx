import { useState, useEffect } from 'react';
import { StyledSlider, Styled, Modal } from './Styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaGithub } from 'react-icons/fa';

declare global {
  interface Window {
    fullpage_api?: {
      setAllowScrolling: (allow: boolean) => void;
      setKeyboardScrolling: (allow: boolean) => void;
    };
  }
}

const projects = [
  {
    id: 1,
    title: 'DreamScapeAI',
    description:
      'React와 TypeScript 그리고 구글 제미나이와 이미지 오픈 API를 사용해 생성형 이미지 AI를 활용해 만든 서비스 입니다.',
    mainimage: '/assets/project/ai_project.png',
    images: ['/assets/project/ai_project.png', '/assets/project/imageAi_2.png', '/assets/project/imageAi_3.png'],
    subdescription: [
      ['React와 TypeScript를 사용하여 유지보수성과 확장성이 뛰어난 프론트엔드 구조를 구현하였습니다.'],
      ['Stable Diffusion 기반의 AI 모델과 Gemini API를 연동해 텍스트 프롬프트를 통한 이미지 생성 기능을 제공합니다.'],
      [
        'Firebase Firestore와 연동하여 실시간 데이터베이스 및 검색 기능을 구현하고, 댓글 등 사용자 간 상호작용을 지원합니다.',
      ],
      [
        'Styled Components를 활용하여 반응형 UI/UX를 설계하고, 이미지 업로드 및 비율 조정, 다운로드 등 편의 기능을 제공합니다.',
      ],
      ['Vercel 및 AWS를 통한 배포 환경을 구성하여 확장성과 안정성을 높였습니다.'],
    ],
    skill: [['React'], ['TypeScript'], ['Gemini API'], ['RESTful API'], ['Firebase']],
    githublink: 'https://github.com/gm-sj/image-ai-app',
    playlink: 'https://test-project-iota-ten.vercel.app/',
  },
  {
    id: 2,
    title: 'EchoMind(개발중 , 현재 업로드 기능만 활성화)',
    description: 'React와 AI 기술을 활용하여 음성 녹음, 텍스트 변환 및 감정 분석을 제공하는 웹 애플리케이션입니다.',
    mainimage: '/assets/project/echomind_1.png',
    images: [
      '/assets/project/echomind_1.png',
      '/assets/project/echomind_2.png',
      '/assets/project/echomind_3.png',
      '/assets/project/echomind_4.png',
    ],
    subdescription: [
      ['웹에서 직접 음성을 녹음하고 AI를 활용하여 텍스트 변환 및 분석을 수행하는 프로젝트입니다.'],
      ['AssemblyAI API를 사용하여 녹음된 음성을 텍스트로 변환하고, 화자 분리 기능을 통해 대화를 분석합니다.'],
      ['Gemini AI API를 이용하여 대화에서 자주 사용하는 단어, 말투, 감정 분석을 수행하고 시각화합니다.'],
      [
        'Recharts를 이용해 감정 분석 데이터를 차트로 시각적으로 표현하여 사용자가 쉽게 이해할 수 있도록 설계하였습니다.',
      ],
      [
        'Styled-Components와 React Icons을 활용하여 사용자 친화적인 UI/UX를 제공하고, 인터랙티브한 디자인을 구현했습니다.',
      ],
      ['Vite와 TypeScript를 기반으로 최적화된 개발 환경을 구축하여 빠른 빌드 및 코드 안정성을 확보하였습니다.'],
      ['녹음 및 파일 업로드 기능이 동시에 활성화되지 않도록 UX를 개선하여 사용성을 향상시켰습니다.'],
    ],
    skill: 'React, TypeScript, Vite, SCSS, AssemblyAI API, Gemini AI API, Recharts, Styled-Components, React Icons',
    githublink: 'https://github.com/jattett/separation_test',
    playlink: 'https://separation-test.vercel.app/',
  },
  {
    id: 3,
    title: '맛운로드(UI 변경중)',
    description: 'React와 Kakao Map API 를 활용 하여 만든, 맛집 찾기, 종합운동장 찾기 서비스 입니다.(UI 개선중)',
    mainimage: '/assets/project/no_UIUX.png',
    images: ['/assets/project/no_UIUX.png', '/assets/project/no_UIUX.png', '/assets/project/no_UIUX.png'],
    subdescription: [
      ['카카오 맵 API를 활용하여 사용자의 음식 취향에 맞는 맛집을 추천·지도에 표시하는 서비스입니다.'],
      [
        'Gemini AI로 사용자의 음식 선호도를 파악해 최적의 음식점을 추천해주고, 카카오맵과 연동해 위치 정보를 시각화합니다.',
      ],
      [
        '추천된 음식점에 대해 네비게이션을 연결하여 경로 안내 기능을 제공하며, 근처 실내체육관을 검색할 수 있는 부가기능도 지원합니다.',
      ],
      ['개인 취향에 맞춰 간단한 UI로 개발하였으며, 추후 반응형 디자인과 UI/UX 개선을 진행 중입니다.'],
    ],
    skill: 'React, TypeScript, Kakao Map API, RESTful API',
    githublink: 'https://github.com/jattett/other',
    playlink: 'https://jattett.github.io/other/',
  },
  {
    id: 4,
    title: '포트폴리오 사이트',
    description: 'Vite, React, TypeScript를 사용하여 인터렉션을 중점적으로 만든 사이트 입니다.',
    mainimage: '/assets/project/potpol_project.png',
    images: ['/assets/project/potpol_project.png', '/assets/project/potpol_2.png', '/assets/project/potpol_3.png'],
    subdescription: [
      ['개인 포트폴리오 웹사이트로, 인터랙션을 강조한 프로젝트입니다.'],
      ['Vite 환경을 이용한 빠른 빌드와 HMR(Hot Module Replacement)으로 개발 효율을 높였습니다.'],
      ['SCSS와 반응형 디자인을 적용해 다양한 디바이스에서도 일관된 UI/UX를 제공합니다.'],
      ['GSAP, Framer Motion 등의 애니메이션 라이브러리를 활용해 동적인 웹 인터페이스를 구현했습니다.'],
      ['프로젝트 사진을 통해 주요 페이지별 인터랙션과 UI 예시를 직관적으로 확인할 수 있습니다.'],
    ],
    skill: 'React, TypeScript, Vite, SCSS',
    githublink: 'https://github.com/jattett/portfolio',
    playlink: 'https://portfolio-4vhc.vercel.app/',
  },
  {
    id: 5,
    title: 'Your Trip',
    description: 'React를 활용하여 공공 데이터 API로 만든 전국 여행지 추천 서비스입니다.',
    mainimage: '/assets/project/yourtrip_project.png',
    images: [
      '/assets/project/yourtrip_project.png',
      '/assets/project/yourtrip_1.png',
      '/assets/project/yourtrip_2.png',
      '/assets/project/yourtrip_3.png',
    ],
    subdescription: [
      [
        '공공데이터(OpenAPI)와 카카오맵 API를 활용하여 여행지 정보를 제공하고, 지도에 위치 정보를 표시하는 기능을 구현했습니다.',
      ],
      [
        '로컬 스토리지(LocalStorage)에 인증 키를 저장해 회원가입과 로그인이 가능하도록 하였으며, 로그인 상태를 유지해 커뮤니티 게시물 작성/수정/삭제, 테마 등록, 여행지 즐겨찾기 등의 기능을 사용할 수 있습니다.',
      ],
      ['로그인 여부에 상관없이 전체 게시글을 열람할 수 있도록 공용 계정을 통한 게시글 업로드 방식을 적용했습니다.'],
      [
        '여행지 상세 페이지에서는 댓글을 남길 수 있도록 상품 등록 API를 변형하여 활용했고, 작성자 및 댓글 데이터를 문자열 변환 방식으로 처리해 파싱 문제를 해결했습니다.',
      ],
      [
        'GitHub Action을 통해 공공데이터 API의 호출 횟수를 줄이기 위해 주기적으로 데이터를 사전에 갱신•배포하도록 설계했습니다.',
      ],
      ['컴포넌트 분리 및 리팩토링 시도, 아토믹 디자인 패턴 도입 등을 통해 유지보수성과 확장성을 높이고자 했습니다.'],
    ],
    skill: 'React, TypeScript, OpenAPI, Firebase',
    githublink: 'https://github.com/R3act-lion',
    playlink: 'https://r3act-lion.github.io/YOURTRIP_DISTRIBUTION/',
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

  // 모달 열림/닫힘에 따라 fullpage 스크롤 막기/허용
  useEffect(() => {
    if (window.fullpage_api) {
      if (isModalOpen) {
        window.fullpage_api.setAllowScrolling(false);
        window.fullpage_api.setKeyboardScrolling(false);
      } else {
        window.fullpage_api.setAllowScrolling(true);
        window.fullpage_api.setKeyboardScrolling(true);
      }
    }
  }, [isModalOpen]);

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
                      {selectedProject.githublink && selectedProject.githublink !== '1' && (
                        <button className="github-button">
                          <a href={selectedProject.githublink} target="_blank" rel="noreferrer">
                            <FaGithub />
                          </a>
                        </button>
                      )}
                      {selectedProject?.playlink && selectedProject.playlink !== '1' && (
                        <a href={selectedProject.playlink} target="_blank" rel="noreferrer">
                          <button className="play-button">Play!</button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="info-area">
              <div className="skill-area">
                <h3>SKill Set</h3>
                <ul>
                  {Array.isArray(selectedProject.skill)
                    ? selectedProject.skill.map((skillItem, idx) => (
                        <li key={idx}>{Array.isArray(skillItem) ? skillItem.join(', ') : skillItem}</li>
                      ))
                    : selectedProject.skill.split(',').map((item, idx) => <li key={idx}>{item.trim()}</li>)}
                </ul>
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
