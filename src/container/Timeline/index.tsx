import { useState } from 'react';
import Styled from './Styled';

// 📌 데이터 타입 정의
interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

function Timeline() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<TimelineItem>({ title: '', description: '', date: '' });

  // 📌 `timelineData` 배열에 대한 타입 적용
  const timelineData: TimelineItem[] = [
    {
      date: '2023.03 ~ 2023.09',
      title: '리비에라 소프트(퍼블리셔)',
      description: '자사 홈페이지 구축',
    },
    {
      date: '2023.09 ~ 2024.04',
      title: '빅독 (퍼블리셔)',
      description: '자사 홈페이지 구축',
    },
    {
      date: '2024.04',
      title: '(주)클러쉬',
      description:
        'SK 하이닉스 스마트 쿠키 숏폼 퍼블리싱 작업, KB국민은행 협업플랫폼 워크비 퍼블리싱 운영 담당, 우리은행 데이터포털 퍼블리싱 운영 담당',
    },
  ];

  // 📌 `item` 매개변수에 타입 적용
  const openModal = (item: TimelineItem) => {
    setModalContent(item);
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
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.description}</p>
          </div>
        </div>
      )}
    </Styled>
  );
}

export default Timeline;
