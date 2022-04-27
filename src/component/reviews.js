import React from "react";
import styled from "styled-components";
import LeftReview from "./leftReview";
import RightReview from "./rightReview";

const Reviews = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            THE BEGINNING<br/>
            IS THE SAME.
          </div>
          <div className="notoMedium middle-text">성공한 선배들</div>
          <div className="notoBold bottom-text">
          여러분과 비슷한 수준에서 출발한 라이징캠프 선배들.<br/>
          지금 이렇게 성장하셨습니다.
          </div>
        </Title>
        <LeftReview/>
        <RightReview/>
        <LeftReview/>
        <RightReview/>
      </ContentWrap>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 73.75rem;
  display: flex;
  flex-direction: column;

`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5.375rem;

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
  }

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin: 1.5rem 0 0.8125rem 0;
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: left;
    margin-bottom: 2.5rem;
  }
`;

export default Reviews;
