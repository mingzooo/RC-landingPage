import React from "react";
import styled from "styled-components";

const RisingTest = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            rising
            <br />
            test!
          </div>
          <div className="notoMedium middle-text">라이징테스트 소개</div>
          <div className="notoBold bottom-text">
            라이징테스트를 통과하면,
            <br />
            "실무 프로젝트"를 할 수 있습니다.
          </div>
        </Title>
        <TestWrap>
          <div className="notoBold red-text">
            라이징<br/>테스트란?
          </div>
          <div className="notoRegular black-text">
            라이징테스트는 쏘카, 배민 등 실제 서비스를&nbsp;
            <span className="notoBold">프론트엔드, 백엔드가 한팀</span>이 되어
            2주동안&nbsp;
            <span className="notoBold">클론을 만들어보는 실전 프로젝트</span>
            입니다.
            <br />
            테스트를 통과하면 라이징 캠프 수료는 물론,&nbsp;
            <span className="notoBold">실무 프로젝트에 참여</span>할 수 있는
            기회를 얻을 수 있습니다.
          </div>
        </TestWrap>
      </ContentWrap>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fe4a00;
`;

const ContentWrap = styled.div`
  width: 73.75rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 75rem) {
    width: 22.5rem;
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 7.5625rem;
  color: #ffffff;

  @media (max-width: 75rem) {
    margin-top: 2.4375rem;
  }

  .title-text {
    font-family: "Hanson";
    color: #caf200;
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
    margin: 1.5rem 0 0.8125rem 0;
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

const TestWrap = styled.div`
  width: 74rem;
  height: 24.4375rem;
  background: #ffffff;
  border-radius: 29px;
  margin-top: 3.375rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 75rem) {
    width: 19.6875rem;
    height: 13rem;
    flex-direction: column;
    margin-top: 1.6875rem;
    align-items: center;
  }

  .red-text {
    width: 13.75rem;
    font-size: 48px;
    line-height: 4.25rem;
    color: #fe4a00;
    @media (max-width: 75rem) {
      font-size: 1.125rem;
      line-height: 1.5625rem;
      text-align: center;
    }
  }

  .black-text {
    width: 41.625rem;
    font-size: 1.5rem;
    line-height: 2.6875rem;
    color: #000000;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.5625rem;
      width: 17.5rem;
    }
  }
`;

export default RisingTest;
