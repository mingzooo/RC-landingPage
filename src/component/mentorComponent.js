import React from "react";
import styled from "styled-components";

import summer from "../assets/img_risingcamp_summer.png";

const MentorComponent = () => {
  return (
    <MentorWrap>
      <img src={summer} />
      <MentorDetail>
        <div className="mentor">MENTOR</div>
        <div className="name">SUMMER</div>
        <div className="notoBold detail-text">
          끊임없이 의심하고 끊임없이 탐구하세요! 스스로 문제를 해결할 수 있도록
          끝까지 도와드립니다.
        </div>
        <HashTagWrap>
            <div className="notoMedium hashtag">#자신감</div>
            <div className="notoMedium hashtag">#문제해결능력</div>
        </HashTagWrap>
      </MentorDetail>
    </MentorWrap>
  );
};

const MentorWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5.04rem;

  img {
    width: 17.6406rem;
    height: 22.6806rem;
  }
`;

const MentorDetail = styled.div`
  width: 13.875rem;
  margin-left: 2.5469rem;

  .mentor {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    color: transparent;
    font-size: 1rem;
    line-height: 1rem;
    -webkit-text-stroke: 0.0313rem #fe4a00;
  }

  .name {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: #fe4a00;
    margin: 0.75rem 0 1.0719rem 0;
  }

  .detail-text {
    font-size: 1rem;
    line-height: 1.625rem;
    color: #000000;
  }
`;

const HashTagWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.2406rem;

    .hashtag{
        width: fit-content;
        padding: 0 0.8125rem;
        height: 1.875rem;
        background: #F3F3F3;
        border-radius: 1.25rem;
        margin-right: 0.6875rem;
        text-align: center;

        font-size: 0.875rem;
        line-height: 1.875rem;
        color: #FE4A00;
    }
`;

export default MentorComponent;
