import { useState } from 'react';
import Styled from './Styled';
import { MdClose } from 'react-icons/md';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  info: string[];
  images: string[];
  skill: string[];
  projectinfo: string[][];
}

function Timeline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<TimelineItem>({
    title: '',
    description: '',
    date: '',
    skill: [],
    info: [],
    images: [],
    projectinfo: [],
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [toolOver, setToolOver] = useState(false);

  const timelineData: TimelineItem[] = [
    {
      date: '2023.03 ~ 2024.04',
      title: '리비에라 소프트 / 빅독',
      description: '프론트엔드 및 퍼블리셔',
      info: [
        '자사 서비스 페이지 유지보수 - 기존 UI 개선 및 성능 최적화 진행',
        '자사 서비스 페이지 구축 - 신규 페이지 개발 및 반응형 디자인 적용',
      ],
      skill: ['Html, CSS, JavaScript', 'Html, CSS, JavaScript, Sass'],
      images: ['/assets/timeline/bigdog.png', '/assets/timeline/stone.png'],
      projectinfo: [
        [
          '- 웹 퍼블리싱 총괄: 구조 설계부터 디자인 구현까지 사용자 경험 중심 개발',
          '- 메인 페이지 개선: BootStrap을 활용한 동적 배너 구현',
          '- 인터랙션 강화: Swiper 라이브러리로 게임 아이템 슬라이드 기능 추가',
          '- 반응형 디자인: 웹·태블릿·모바일 환경 최적화',
          '- 기능 개발: JavaScript로 검색 및 게임 머니 변환 기능 구현',
        ],
        [],
      ],
    },
    {
      date: '2024.04 ~ 현재',
      title: '(주)클러쉬',
      description: '프론트엔드 및 퍼블리셔',
      info: [
        'SK 하이닉스 스마트 쿠키 숏폼 퍼블리싱 및 프론트개발 - 모션 효과 미디어 재생 및 반응형 UI 구현',
        'KB국민은행 협업 플랫폼 "워크비" 퍼블리싱 운영 및 프론트개발 - UI 최적화 및 신규 기능 퍼블리싱',
        '우리은행 데이터 포털 프론트개발 - 데이터 시각화 및 접근성 개선',
        '자사서비스 Clush 워크플레이스 협업툴 개발 - 신규 기능 개발 및 UI/UX 개선',
      ],
      skill: [
        'React,Styled-components,JavaScript',
        'React,Styled-components,JavaScript',
        'React,Styled-components,Antd,JavaScript,chart.js,Storybook',
        'React,Styled-components,Antd,JavaScript',
      ],
      images: [
        '/assets/timeline/no.png',
        '/assets/timeline/no.png',
        '/assets/timeline/no.png',
        '/assets/timeline/no.png',
      ],
      projectinfo: [['- 테스트입니다.', '- 테스트입니다.', '- 테스트입니다.'], []],
    },
  ];

  // 📌 모달 열기 함수 (첫 번째 `li`와 이미지 기본 활성화)
  const openModal = (item: TimelineItem) => {
    setModalContent(item);
    setSelectedImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Styled>
      <div className="timeline-container">
        <div className="contents-wrapper">
          <div className="title-wrapper">
            <h1 className="timeline-title">My Timeline</h1>
            <span>해당 타임라인을 클릭하시면 새 창이 열립니다.</span>
          </div>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content" onClick={() => openModal(item)}>
                  <h2>{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={`modal ${isModalOpen ? 'open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <MdClose size="24" color="#FFF" />
            </button>
            <div className="modal-detail-header">
              <div className="modal-detail-title">
                <h3>{modalContent.title}</h3>
                <p>{modalContent.date}</p>
              </div>
              <p className="description">{modalContent.description}</p>
            </div>
            <div className="project-info">
              <div className="project-contents-wrapper">
                <h3>진행 프로젝트</h3>
                <ul>
                  {modalContent.info.map((text, index) => (
                    <li
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={selectedImageIndex === index ? 'active' : ''}
                    >
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="index-result-wrapper">
                <p className="index-result-subtitle">이미지에 마우스를 올리면 상세 이력이 나와요</p>
                <div className="project-image">
                  {modalContent.images.length > 0 ? (
                    <img
                      src={modalContent.images[selectedImageIndex]}
                      alt={`project-${selectedImageIndex}`}
                      onMouseEnter={() => setToolOver(true)}
                      onMouseLeave={() => setToolOver(false)}
                    />
                  ) : (
                    <p>이미지가 없습니다.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`drawer ${toolOver ? 'open' : ''}`}>
        <div className="drawer-content">
          <h4>프로젝트 상세 내용</h4>
          <ul>
            {modalContent.projectinfo[selectedImageIndex]?.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </Styled>
  );
}

export default Timeline;
