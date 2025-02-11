import Styled from './Styled';

function Timeline() {
  const timelineData = [
    {
      date: '2023.03 ~ 2023.09',
      title: '리비에라 소프트(퍼블리셔)',
      description: '웹 퍼블리셔로서 .',
    },
    {
      date: '2023.09 ~ 2024.04',
      title: 'First Freelance Project',
      description:
        '모 기업의 투자를 받아, 이전 회사의 사업자가 변경되었습니다. 이는 사실상 두 회사가 동일한 회사입니다.',
    },
    {
      date: '2024.04',
      title: '(주)클러쉬',
      description: 'Worked as a frontend developer focusing on user experience.',
    },
  ];

  return (
    <Styled>
      <div className="timeline-container">
        <div className="contents-wrapper">
          <h1 className="timeline-title">My Timeline</h1>
          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Styled>
  );
}

export default Timeline;
