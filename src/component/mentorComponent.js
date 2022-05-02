import React from "react";
import styled from "styled-components";

import summer from "../assets/img_risingcamp_summer.png";

const MentorComponent = ({img, name, detail, hashtag1, hashtag2}) => {
  return (
    <MentorWrap>
      <img src={img} />
      <MentorDetail>
        <div className="mentor">MENTOR</div>
        <div className="name">{name}</div>
        <div className="notoBold detail-text">
          {detail}
        </div>
        <HashTagWrap>
            <div className="notoMedium hashtag">{hashtag1}</div>
            <div className="notoMedium hashtag">{hashtag2}</div>
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
  width: 15.125rem;
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
