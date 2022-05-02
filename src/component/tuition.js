import React from "react";
import styled from "styled-components";

import ticket from "../assets/img_risingcamp_ticket.png";

const Tuition = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            rising camp
            <br />
            tuition
          </div>
          <div className="notoRegular middle-text">라이징캠프 수강료 안내</div>
          <div className="notoBold bottom-text">라이징 캠프 수강료</div>
        </Title>
        <img src={ticket} />
        <TuitionDetailWrap>
          <div className="notoBold big-text">8주 교육에 72만원.</div>
          <div className="notoRegular small-text">
            기존 개발 부트캠프 대비 수강료를 절반 이상 확 낮추었지만,
            수강생분들께서{" "}
            <span className="notoBold">
              ‘진짜로 성장’하실 수 있는 환경을 제공
            </span>
            할 것을 약속드립니다. <br />
            <br />
            위의 내용을 보신분들이라면 72만원 이상의 배움을 얻어갈 수 있다는
            것을 아실거라 생각합니다. 라이징캠프의 가치를 알아보고,
            <span className="notoBold">끝까지 열심히 하실 분들과 함께</span>하길
            기대합니다.
          </div>
        </TuitionDetailWrap>
      </ContentWrap>
    </Page>
  );
};

const Page = styled.div`
  background-color: #fe4a00;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 73.75rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 75rem) {
    width: 22.5rem;
    align-items: center;
  }

  img {
    margin-top: 4.4375rem;
    width: 73.75rem;
    height: 30.875rem;
    @media (max-width: 75rem) {
      width: 19.6875rem;
      height: 8.25rem;
      margin-top: 1.5625rem;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10.5rem;
  text-align: center;
  color: #ffffff;

  .title-text {
    font-family: "Hanson";
    font-size: 6rem;
    line-height: 6rem;
    text-transform: uppercase;
    @media (max-width: 75rem) {
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
  }

  .middle-text {
    font-size: 1.5rem;
    margin: 0.8125rem 0 0.75rem 0;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
      margin: 0.8125rem 0 0.375rem 0;
    }
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }
`;

const TuitionDetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  margin: 3.875rem 0 9.5rem 0;
  @media (max-width: 75rem) {
      margin: 1.5625rem 0 1.25rem 0;
      width: 19.6875rem;
    }
  
  .big-text {
    width: 18rem;
    font-size: 4rem;
    line-height: 5.0625rem;
    @media (max-width: 75rem) {
      font-size: 1.25rem;
      width: 5.8125rem;
      line-height: 1.5625rem;
    }
  }

  .small-text {
    font-size: 1.5rem;
    line-height: 2.6875rem;
    width: 51.3125rem;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      width: 12.875rem;
      line-height: 1.5625rem;
    }
  }
`;

export default Tuition;
