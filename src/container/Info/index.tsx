import React from 'react';
import { Styled, NeonBorder } from './Styled';
import Profile from '../../assets/react.svg';

function FirstContents() {
  return (
    <Styled>
      <NeonBorder>
        <p>Building interactive experiences, one pixel at a time.</p>
      </NeonBorder>
      <div className="section-wrapper">
        <div className="info-section">
          <h1>
            "어떻게 하면 <b>사용자가 더 편리하게 서비스를 사용할 수 있을까?</b>"
          </h1>
          <p>
            안녕하세요! 프론트엔드 개발자 <b>강규민</b>입니다.
            <br />
            저는 여러 프로젝트를 통해 프론트엔드 개발의 기초부터 실제 구현까지 경험하며,
            <br />웹 개발에 대한 폭넓은 이해를 쌓아왔습니다. 특히, <b>사용자 경험(UX)</b>을 최우선으로 생각하며,
            <br />더 나은 사용성을 고민하며 코드를 작성하고 있습니다. 제가 생각하는 좋은 IT 서비스란,
            <br />
            기술적으로 뛰어난 것뿐만 아니라, <b>사용자 입장에서 쉽고 직관적으로</b> 느껴지는 서비스입니다.
            <br />
            이러한 철학을 바탕으로, <b>늘 사용자의 관점에서 문제를 정의하고 해결책을 제시</b>하려 노력하고 있습니다.
            <br />
            아직은 완벽하지 않지만, 작은 문제 하나도 끝까지 해결하려는 자세와 끊임없이 성장하려는 열정만큼은 누구보다
            자신 있습니다.
            <br />
            저의 가능성을 믿고 함께 성장할 수 있는 팀에서 배우고 기여하고 싶습니다. 감사합니다.
          </p>
        </div>
        <div className="img-section">
          <img src={Profile}></img>
        </div>
      </div>
    </Styled>
  );
}

export default FirstContents;
