import React from "react";
import styled from "styled-components";

const Class = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            REAL
            <br />
            LEARNING
            <br />
            CLASS.
          </div>
          <div className="text-wrap">
            <div className="notoMedium middle-text">
              수강생 분들이 얻어간 것
            </div>
            <div className="notoBold bottom-text">
              라이징캠프를 먼저 수강한 분들,
              <br />
              이런 결과를 얻어갔습니다.
            </div>
          </div>
        </Title>
        <CompareBox>
          <div className="red-box">
            <RedBox>
              <div className="notoBold white-fill">진짜로 "배우는" 수업</div>
              <div className="notoMedium white-outline">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium white-outline">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium white-outline">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium white-outline">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
            </RedBox>
          </div>
          <div className="green-text">VS</div>
          <div className="white-box">
            <WhiteBox>
              <div className="notoBold grey-text">
                교육 기간만 잡아먹는 커리큘럼
              </div>
              <div className="notoMedium grey-box">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium grey-box">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium grey-box">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
              <div className="notoMedium grey-box">
                Step 01. 커리큘럼이 들어갑니다.
              </div>
            </WhiteBox>
          </div>
        </CompareBox>
        <DetailWrap>
          <div className="left-wrap">
            <div className="notoBold left-title">
              하루 3시간 · 일주일에 1번 · 총 2달 수업
            </div>
            <div className="notoRegular left-text">
              2달 안에 외주까지 가능할 정도의 실력을 키울 수 있는 이유?
              <br />
              <span className="notoBold">
                “교육 기간만 잡아먹는 커리큘럼”, 싹 다 걷어냈습니다.
              </span>
              &nbsp;라이징캠프에서는
              <span className="notoBold">&nbsp;실무에서 중요한 개발</span>을
              알려드립니다.
            </div>
            <div
              className="notoRegular left-text"
              style={{ marginTop: "2rem" }}
            >
              🗸 생산성을 높여주는 라이브러리 사용 및 개발 경험
              <br />
              🗸 실무 일정 및 태스크 관리 경험 <br />
              🗸 클라이언트와 소통하는 방법 <br />
              🗸 개발 작업 정리 방법
            </div>
          </div>
          <div className="right-wrap">
            <div className="notoBold right-title">&lt; 라이징 테스트 &gt;</div>
            <div className="notoRegular right-text">
              라이징테스트는 쏘카, 배민 등 실제 서비스를 프론트엔드, 백엔드가
              한팀이 되어 2주동안 클론을 만들어보는 실전 프로젝트입니다.
              <br />
              테스트를 통과하면? 라이징캠프 수료는 물론, 실무 프로젝트에 참여할
              수 있는 기회를 얻을 수 있습니다.
            </div>
          </div>
        </DetailWrap>
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
  flex-direction: row;
  align-items: left;
  margin-top: 9rem;
  position: relative;

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
  }

  .text-wrap {
    position: absolute;
    bottom: 0;
    right: 0;
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
  }
`;

const CompareBox = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6.375rem;
  position: relative;

  .red-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42.9375rem;
    height: 29.6875rem;
    background: #fe4a00;
    box-shadow: 0 0.25rem 0.875rem 0.25rem rgba(218, 218, 218, 0.25);
    border-radius: 1.25rem;
  }

  .green-text {
    position: absolute;
    left: 39.375rem;
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    z-index: 999;
  }

  .white-box {
    width: 27.2013rem;
    height: 18.8656rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f7f7;
    border-radius: 1.25rem;
  }
`;

const RedBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .white-fill {
    width: 17.1875rem;
    height: 3rem;
    background: #ffffff;
    border-radius: 0.625rem;
    font-size: 24px;
    line-height: 3rem;
    color: #fe4a00;
    margin-bottom: 0.875rem;
  }

  .white-outline {
    margin-top: 0.8125rem;
    width: 33.8125rem;
    height: 3.9375rem;
    border: 0.0625rem solid #ffffff;
    border-radius: 0.625rem;
    font-size: 16px;
    line-height: 3.9375rem;
    color: #ffffff;
  }
`;

const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .grey-text {
    font-size: 1.25rem;
    color: #6c6c6c;
    margin-bottom: 0.8044rem;
  }

  .grey-box {
    width: 21.5712rem;
    height: 2.4863rem;
    background: #e7e7e7;
    border-radius: 0.625rem;
    margin-top: 0.5119rem;
    font-size: 1rem;
    line-height: 2.4863rem;
    color: #000000;
  }
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 18.625rem;
  margin-bottom: 11.75rem;

  .left-wrap {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 25.1875rem;
  }

  .left-title {
    font-size: 1.25rem;
    color: #000000;
    margin-bottom: 1rem;
  }

  .left-text {
    font-size: 1rem;
    line-height: 1.8125rem;
    color: #000000;
  }

  .right-wrap {
    width: 36.5625rem;
    height: 13.875rem;
    background: #e6e6e6;
    border-radius: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .right-title {
    font-size: 1rem;
    color: #000000;
  }

  .right-text {
    width: 27.6875rem;
    font-size: 15px;
    line-height: 1.6875rem;
    color: #000000;
    margin-top: 1.25rem;
  }
`;

export default Class;
