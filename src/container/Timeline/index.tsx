import { useState } from 'react';
import Styled from './Styled';
import { MdClose } from 'react-icons/md';

// 📌 데이터 타입 정의
interface TimelineItem {
  date: string;
  title: string;
  description: string;
  info: string[]; // ✅ 수정: JSX 대신 문자열 배열 사용
  images: string[];
  skill: string[];
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
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0); // ✅ 선택된 이미지 인덱스

  const timelineData: TimelineItem[] = [
    {
      date: '2023.03 ~ 2024.04',
      title: '리비에라 소프트 / 빅독',
      description: '프론트엔드 및 퍼블리셔',
      info: [
        '자사 서비스 페이지 유지보수 - 기존 UI 개선 및 성능 최적화 진행',
        '자사 서비스 페이지 구축 - 신규 페이지 개발 및 반응형 디자인 적용',
      ],
      skill: ['Html,CSS,JavaScript', 'Html,CSS,JavaScript,Sass'],
      images: ['/assets/timeline/bigdog.png', '/assets/timeline/stone.png'],
    },
    {
      date: '2024.04 ~ 현재',
      title: '(주)클러쉬',
      description: '프론트엔드 및 퍼블리셔',
      info: [
        'SK 하이닉스 스마트 쿠키 숏폼 퍼블리싱 - 모션 효과 및 반응형 UI 구현',
        'KB국민은행 협업 플랫폼 "워크비" 퍼블리싱 운영 - UI 최적화 및 신규 기능 퍼블리싱',
        '우리은행 데이터 포털 퍼블리싱 운영 - 데이터 시각화 및 접근성 개선',
        '자사서비스 Clush 워크플레이스 협업툴 퍼블리싱 - 신규 기능 개발 및 UI/UX 개선',
      ],
      skill: [
        'React,Styled-components,JavaScript',
        'React,Styled-components,JavaScript',
        'React,Styled-components,Antd,JavaScript,chart.js,Storybook',
        'React,Styled-components,Antd,JavaScript',
      ],
      images: [
        '/assets/timeline/project1.png',
        '/assets/timeline/project2.png',
        '/assets/timeline/project3.png',
        '/assets/timeline/project4.png',
      ],
    },
  ];

  // 📌 모달 열기 함수 (첫 번째 `li`와 이미지 기본 활성화)
  const openModal = (item: TimelineItem) => {
    setModalContent(item);
    setSelectedImageIndex(0); // ✅ 첫 번째 이미지 및 li 기본 활성화
    setIsModalOpen(true);
  };

  // 📌 모달 닫기 함수
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
              <h3>진행 프로젝트</h3>
              <div className="project-contents-wrapper">
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
                <div className="index-result-wrapper">
                  <p>{modalContent.skill[selectedImageIndex]}</p>
                  <div className="project-image">
                    {modalContent.images.length > 0 ? (
                      <img src={modalContent.images[selectedImageIndex]} alt={`project-${selectedImageIndex}`} />
                    ) : (
                      <p>이미지가 없습니다.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Styled>
  );
}

export default Timeline;
