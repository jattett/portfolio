import React from 'react';
import Styled from './Styled';
import reactLogo from '../../assets/react.svg'; // 예: React 로고 이미지
import htmlLogo from '../../assets/html.svg'; // 예: HTML 로고 이미지
import cssLogo from '../../assets/css.png'; // 예: HTML 로고 이미지
import styledLogo from '../../assets/styled-components.svg'; // 예: Styled-Components 로고 이미지
import jsLogo from '../../assets/javascript.svg'; // 예: JavaScript 로고 이미지
import tsLogo from '../../assets/typescript.svg'; // 예: TypeScript 로고 이미지

function Skill() {
  const skills = [
    { name: 'React', level: 80, image: reactLogo },
    { name: 'HTML', level: 95, image: htmlLogo },
    { name: 'CSS', level: 70, image: cssLogo },
    { name: 'CSS/Styled-Component', level: 95, image: styledLogo },
    { name: 'JavaScript', level: 80, image: jsLogo },
    { name: 'TypeScript', level: 70, image: tsLogo },
  ];

  return (
    <Styled>
      <div className="skill-wrapper">
        <h1>My Skills</h1>
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="label">
              {/* 이미지 추가 */}
              <span className="skill-title">
                {skill.name}
                <img src={skill.image} alt={`${skill.name} logo`} className="skill-icon" />
              </span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar-container">
              <div className="bar" style={{ width: `${skill.level}%`, transition: 'width 0.5s ease' }}></div>
            </div>
          </div>
        ))}
      </div>
    </Styled>
  );
}

export default Skill;
