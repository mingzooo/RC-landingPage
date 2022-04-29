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
        <TuitionDetailWrap>
          <div className="notoBold big-text">
            하루 3시간, <br />
            일주일에 1번,
            <br /> 총 2달 수업
          </div>
          <div className="notoRegular small-text">
            2달 안에 외주까지 가능할 정도의 실력을 키울 수 있는 이유?
            <br />
            <span className="notoBold">
              “교육 기간만 잡아먹는 커리큘럼”, 싹 다 걷어냈습니다.
            </span>
            <br /> 라이징캠프에서는&nbsp;
            <span className="notoBold">실무에서 중요한 개발</span>을
            알려드립니다.
            <BoxWrap>
              <div className="notoMedium box">
                🗸 생산성을 높여주는&nbsp;
                <span style={{ color: "#fe4a00" }}>
                  라이브러리 사용 및 개발&nbsp;
                </span>
                경험
              </div>
              <div className="notoMedium box">
                🗸 생산성을 높여주는{" "}
                <span style={{ color: "#fe4a00" }}>
                  라이브러리 사용 및 개발
                </span>{" "}
                경험
              </div>
              <div className="notoMedium box">
                🗸 생산성을 높여주는{" "}
                <span style={{ color: "#fe4a00" }}>
                  라이브러리 사용 및 개발
                </span>{" "}
                경험
              </div>
              <div className="notoMedium box">
                🗸 생산성을 높여주는{" "}
                <span style={{ color: "#fe4a00" }}>
                  라이브러리 사용 및 개발
                </span>{" "}
                경험
              </div>
            </BoxWrap>
          </div>
        </TuitionDetailWrap>
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

const TuitionDetailWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fe4a00;
  margin: 10rem 0 9.5rem 0;

  .big-text {
    width: 18.0625rem;
    font-size: 3rem;
    line-height: 4.25rem;
  }

  .small-text {
    color: #000000;
    font-size: 1.5rem;
    line-height: 2.6875rem;
    width: 48.6875rem;
  }
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2.25rem;

  .box {
    width: 23.75rem;
    height: 4.5rem;
    background: #ffffff;
    box-shadow: -0.5rem 0.8125rem 0.875rem 0.8125rem rgba(223, 223, 223, 0.2);
    border-radius: 0.625rem;

    font-size: 1rem;
    line-height: 4.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.5625rem;
  }
`;

export default Class;
