import React from "react";
import styled from "styled-components";

const MentorComponent = ({ img, name, detail, hashtag1, hashtag2 }) => {
  return (
    <MentorWrap>
      <img src={img} />
      <MentorDetail>
        <div className="mentor">MENTOR</div>
        <div className="name">{name}</div>
        <div className="notoBold detail-text">{detail}</div>
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
  @media (max-width: 73.75rem) {
    margin-bottom: 1.6619rem;
  }

  img {
    width: 17.6406rem;
    height: 22.6806rem;
    @media (max-width: 73.75rem) {
      width: 9.5388rem;
      height: 14.5231rem;
      object-fit: cover;
    }
  }
`;

const MentorDetail = styled.div`
  width: 15.125rem;
  margin-left: 2.5469rem;
  @media (max-width: 73.75rem) {
    width: 9.3125rem;
  }

  .mentor {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    color: transparent;
    font-size: 1rem;
    line-height: 1rem;
    -webkit-text-stroke: 0.0313rem #fe4a00;
    @media (max-width: 73.75rem) {
    font-size: 0.75rem;
    line-height: 0.75rem;
  }
  }

  .name {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: #fe4a00;
    margin: 0.75rem 0 1.0719rem 0;
    @media (max-width: 73.75rem) {
    font-size: 1.5rem;
    margin: 0.1875rem 0 0.625rem 0;
    line-height: 1.5rem;
  }
  }

  .detail-text {
    font-size: 1rem;
    line-height: 1.625rem;
    color: #000000;
    @media (max-width: 73.75rem) {
    font-size: 0.8125rem;
    line-height: 1.3125rem;
  }
  }
`;

const HashTagWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: auto;
  margin-top: 1.1875rem;
  @media (max-width: 73.75rem) {
    flex-direction: column;
    margin-top: 0;
  }

  .hashtag {
    width: fit-content;
    padding: 0 0.8125rem;
    height: 1.875rem;
    background: #f3f3f3;
    border-radius: 1.25rem;
    margin-right: 0.6875rem;
    text-align: center;

    font-size: 0.875rem;
    line-height: 1.875rem;
    color: #fe4a00;

    @media (max-width: 73.75rem) {
    flex-direction: column;
    margin-top: 0.5625rem;
  }
  }
`;

export default MentorComponent;
