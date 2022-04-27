import React from "react";
import styled from "styled-components";

import big_Rec from "../assets/Big_Rec.png";
import small_Rec from "../assets/small-Rec.png";

const LeftReview = () => {
  return (
    <Wrap>
      <div className="name">KAKAO</div>
      <ContentWrap>
        <img src={big_Rec} className="big-pic" />
        <div className="content-wrap">
          <div>
            <img src={small_Rec} className="small-pic" />
            <img src={small_Rec} className="small-pic" />
          </div>
          <div className="notoBold title-text">
            제가 비전공자라서,
            <br />
            네이버 입사는 꿈도 못꿨었어요.
          </div>
          <div className="notoRegular article">
            후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가
            들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다.
            후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가
            들어갑니다.
          </div>
        </div>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 5.5625rem;
  .name {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-bottom: -2.5rem;
    margin-left: 2.8125rem;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .big-pic {
    z-index: -100;
  }

  .small-pic {
    width: 20.5rem;
    height: 14.4375rem;
    margin-left: 1.5rem;
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    margin-left: -10.625rem;
    margin-top: 2rem;
  }

  .article {
    width: 37.4375rem;
    font-size: 1.5rem;
    margin-top: 1.9375rem;
  }
`;

export default LeftReview;
