import React from "react";
import styled from "styled-components";

import big_Rec from "../assets/Big_Rec.png";
import small_Rec from "../assets/small-Rec.png";

const RightReview = () => {
  return (
    <Wrap>
        
      <div className="name">LINE</div>
      <ContentWrap>
      <div className="content-wrap">
          <div className="notoBold title-text">
            저도 문법만 공부하다
            <br />
            여러번 포기했었어요.
          </div>
          <div className="notoRegular article">
            후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가
            들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다.
            후기가 들어갑니다. 후기가 들어갑니다. 후기가 들어갑니다. 후기가
            들어갑니다.
          </div>
          <div style={{marginTop:"2rem"}}>
            <img src={small_Rec} className="small-pic" />
            <img src={small_Rec} className="small-pic" />
          </div>
        </div>
        <img src={big_Rec} className="big-pic" />
       
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 5.5625rem;

  .name {
    width: fit-content;
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-bottom: -2.5rem;
    margin-left: auto;
    
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
    align-items: flex-end;
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    margin-top: 2rem;
    text-align: right;
    margin-right: -9.375rem;
  }

  .article {
    width: 37.4375rem;
    font-size: 1.5rem;
    margin-top: 1.9375rem;
    text-align: right;
    margin-right: -3.75rem;
  }
`;

export default RightReview;
