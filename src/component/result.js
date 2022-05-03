import React from "react";
import styled from "styled-components";
import "./style.css";

import mockup_a from "../assets/img_mockup_a.png";
import mockup_b from "../assets/img_mockup_b.png";
import mockup_c from "../assets/img_mockup_c.png";
import mockup_d from "../assets/img_mockup_d.png";
import activity from "../assets/img_activity.png";
import cmc from "../assets/img_cmc.png";

const Result = () => {
  return (
    <Page>
      <ContentWrap>
        <TitleWrap>
          <div className="title-text">
            RISING
            <br />
            CAMP
            <br />
            RESULT.
          </div>
          <div className="title-right">
            <div
              className="notoMedium"
              style={{ fontSize: "1.5rem", marginBottom: "0.8125rem" }}
            >
              수강생분들이 얻어간 것
            </div>
            <div className="notoBold" style={{ fontSize: "2.25rem" }}>
              라이징캠프를 먼저 수강한 분들,
              <br /> <span style={{ color: "#CAF200" }}>이런결과</span>를
              얻어갔습니다.
            </div>
          </div>
        </TitleWrap>
        <ContainerWrap>
          <div className="top-box">
            <div>
              {/* result1 */}
              <div id="grid" className="inside-box">
                <Circle className="left-circle" />
                <div className="text-wrap">
                  <div className="number">01</div>
                  <div className="title notoBold">
                    외주로 용돈 벌면서,
                    <br />
                    포트폴리오 쌓아요.
                  </div>
                  <div className="detail notoRegular">
                    참고: 프로젝트 갯수가 제한되어있다보니 수료생분 모두가 다
                    외주를 진행할 수 없다는 점, 솔직하게 말씀 드립니다. 그래도
                    염려치 마세요. ‘외주할 수 있는 실력’이 쌓이는 것은 변하지
                    않습니다.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid white",
                    padding: "2.5rem 0",
                  }}
                >
                  <img src={mockup_a} className="mock-up" />
                </div>
                <Circle className="right-circle" />
              </div>
              <div id="grid">
                <div
                  style={{
                    height: "2.0456rem",
                    borderRight: "0.5px solid white",
                  }}
                />
                <div
                  style={{
                    height: "2.0456rem",
                    borderLeft: "0.5px solid white",
                  }}
                />
              </div>
              {/* result2 */}
              <div id="grid" className="inside-box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid white",
                    padding: "2.5rem 0",
                  }}
                >
                  <img src={mockup_b} className="mock-up" />
                </div>
                <div className="text-wrap">
                  <div className="number">02</div>
                  <div className="title notoBold">
                    실력이 되니까,
                    <br />
                    그냥 창업해버렸어요.
                  </div>
                  <div className="detail notoRegular">
                    대학교 3학년 때 라이징캠프의 교육 듣고 앱런칭!
                    <br />
                    라이징캠프 수료생의 대표사례를 소개합니다.
                  </div>
                </div>
              </div>
              <div
                id="grid"
                style={{ border: "0.5px solid white", padding: "0 2.5rem" }}
              >
                <div
                  style={{ height: "2.0456rem", borderLeft: "1px solid white" }}
                />
                <div
                  style={{
                    height: "2.0456rem",
                    borderRight: "1px solid white",
                  }}
                />
              </div>
              <div className="inside-box">
                <MiddleContainer />
              </div>
              {/* result3 */}
              <div id="grid" className="inside-box">
                <div
                  style={{ height: "2.0456rem", borderLeft: "1px solid white" }}
                />
                <div
                  style={{
                    height: "2.0456rem",
                    borderRight: "1px solid white",
                  }}
                />
              </div>
              <div id="grid" className="inside-box">
                <Circle className="left-circle" />
                <div className="text-wrap">
                  <div className="number">03</div>
                  <div className="title notoBold">
                    네카라쿠배 취업?
                    <br />
                    저도 되더라구요.
                  </div>
                  <div className="detail notoRegular">
                    라이징캠프는 취업을 목표로 하지 않습니다.
                    <br />
                    그럼에도 자연스레 스펙이 쌓일 수 밖에 없습니다. <br />
                    라이징캠프에서 올바른 개발 공부 습관을 기르니까요.
                    <br />
                    잘만 따라와 주세요. 취업 관리는 덤으로 해드립니다.
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid white",
                    padding: "2.5rem 0",
                  }}
                >
                  <img src={mockup_c} className="mock-up" />
                </div>
                <Circle className="right-circle" />
              </div>
              <div id="grid">
                <div
                  style={{ height: "2.0456rem", border: "0.5px solid white" }}
                />
                <div
                  style={{ height: "2.0456rem", border: "0.5px solid white" }}
                />
              </div>
              {/* result4 */}
              <div id="grid" className="inside-box">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid white",
                    padding: "2.5rem 0",
                  }}
                >
                  <img src={mockup_d} className="mock-up" />
                </div>
                <div
                  style={{
                    border: "0.5px solid white",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="number">04</div>
                  <div className="title notoBold">
                    좋은 자극을 받는 개발자
                    <br />
                    커뮤니티를 얻었어요.
                  </div>
                  <div className="detail notoRegular">
                    “내 주변 5명의 평균이 곧 나 자신"이라는 말이 있죠.
                    <br />
                    배움에 목마른 구성원들로 만들어진 라이징캠프 커뮤니티. 혼자
                    말고 함께 성장해요.
                  </div>
                </div>
              </div>
              <div id="grid" className="inside-box">
                <div
                  style={{
                    height: "2.0456rem",
                    borderRight: "0.5px solid white",
                    borderLeft: "1px solid white",
                  }}
                />
                <div
                  style={{
                    height: "2.0456rem",
                    borderLeft: "0.5px solid white",
                    borderRight: "1px solid white",
                  }}
                />
              </div>
              <div id="grid" className="inside-box">
                <Left2 />
                <Right2 />
              </div>
              <div id="grid" className="inside-box">
                <div
                  style={{
                    height: "2.0456rem",
                    borderRight: "0.5px solid white",
                    borderLeft: "1.5px solid white",
                  }}
                />
                <div
                  style={{
                    height: "2.0456rem",
                    borderLeft: "0.5px solid white",
                    borderRight: "1px solid white",
                  }}
                />
              </div>
              <div id="grid" className="inside-box">
                <Right3 />
                <Left3 />
              </div>
            </div>
          </div>
        </ContainerWrap>
      </ContentWrap>
    </Page>
  );
};

const MiddleContainer = () => {
  return (
    <MiddleContainerWrap className="notoBold">
      <div className="top-text">
        여태까지
        <br />
        라이징 캠프와 함께한 분들이 이렇게 이뤄냈어요.
      </div>
      <div className="bottomContainerWrap">
        <div className="featureWrap">
          <div>총 서비스 개수</div>
          <div className="green-text">67개 +</div>
        </div>
        <div className="featureWrap">
          <div>누적 앱 다운로드</div>
          <div className="green-text">40만회 +</div>
        </div>
        <div className="featureWrap">
          <div>수료생 외주 프로젝트 매칭 수</div>
          <div className="green-text">300건+</div>
          <div className="notoRegular accumulate">22년도 상반기 누적</div>
        </div>
        <div className="featureWrap">
          <div>수료생 외주 수익 분배금</div>
          <div className="green-text">4억 6천만원</div>
          <div className="notoRegular accumulate">22년도 상반기 누적</div>
        </div>
      </div>
    </MiddleContainerWrap>
  );
};

const Left2 = () => {
  return (
    <LeftContainer>
      <div className="notoBold title">
        라이징 캠프와
        <br />
        함께 성장하는 환경
      </div>
      <ClubWrap>
        <div className="club-wrap">
          <div className="notoMedium club-box">딴딴클럽</div>
          <div className="notoRegular">
            루틴을 만들고
            <br />
            31일동안 인증하는
            <br />
            챌린지
          </div>
        </div>
        <div className="club-wrap">
          <div className="notoMedium club-box">머신러닝</div>
          <div className="notoRegular">
            다양한 액티비티와
            <br />
            운동을 함께하는
            <br />
            커뮤니티
          </div>
        </div>
        <div className="club-wrap">
          <div className="notoMedium club-box">반딧불이 원정대</div>
          <div className="notoRegular">
            1일 1커밋으로 <br />
            깃허브를 초록색으로 <br />
            채워나가는 챌린지
          </div>
        </div>
        <div className="club-wrap">
          <div className="notoMedium club-box">위클리 스크럼</div>
          <div className="notoRegular">
            같이 수강하는 팀원들과 <br />
            데일리로 진행상황을 <br />
            공유하는 회의
          </div>
        </div>
        <div className="club-wrap">
          <div className="notoMedium club-box">알고리즘 캠프</div>
          <div className="notoRegular">
            코딩테스트를 위한
            <br />
            알고리즘 교육 프로그램
          </div>
        </div>
      </ClubWrap>
    </LeftContainer>
  );
};

const Right2 = () => {
  return (
    <RightContainer>
      <img src={activity} />
    </RightContainer>
  );
};

const Left3 = () => {
  return (
    <div
      style={{
        border: "0.5px solid white",
        padding: "2.875rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          fontSize: "1.75rem",
          lineHeight: "2.5rem",
          marginBottom: "0.9375rem",
        }}
        className="notoBold"
      >
        수료생 중 141명,
        <br />
        <span style={{ color: "#CAF200" }}>CMC(메이커스챌린지)</span> 활동
      </div>
      <div
        className="notoRegular"
        style={{ fontSize: "1.25rem", marginTop: "1.25rem" }}
      >
        라이징캠프 수료생은 CMC 서류 합격 보장
        <br />
        (서류 합격률 5:1, 면접 합격률 3:1)
      </div>
    </div>
  );
};

const Right3 = () => {
  return (
    <RightContainer
      style={{
        border: "0.5px solid white",
      }}
    >
      <img src={cmc} />
    </RightContainer>
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
  }
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 11rem 0 7.875rem 0;
  position: relative;

  .title-text {
    font-size: 6rem;
    color: #ffffff;
    line-height: 6rem;

    font-family: "Hanson";
    @media (max-width: 75rem) {
      font-size: 1.375rem;
      line-height: 1.4375rem;
    }
  }

  .title-right {
    position: absolute;
    bottom: 0;
    right: 10.25rem;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
      right: 0;
    }
  }
`;

const ContainerWrap = styled.div`
  width: 100%;
  margin-bottom: 12.5rem;

  .top-box {
    border: 1px solid white;
    padding: 2.5rem 0;
    @media (max-width: 75rem) {
      padding: 0.625rem 0;
    }
  }

  .inside-box {
    position: relative;
    padding: 0 2.5rem;
    @media (max-width: 75rem) {
      padding: 0 0.5625rem;
    }
  }

  .text-wrap {
    border: 0.5px solid white;
    padding: 2.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 75rem) {
      font-size: 1.5rem;
      padding: 0.625rem;
    }
  }

  .number {
    width: fit-content;
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6.25rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1062rem #caf200;
    color: transparent;

    @media (max-width: 75rem) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }

  .title {
    font-size: 3rem;
    line-height: 3.8125rem;
    color: #caf200;
    @media (max-width: 75rem) {
      font-size: 1.25rem;
      line-height: 1.5625rem;
    }
  }

  .detail {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #ffffff;
    margin-top: 1.1875rem;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.4375rem;
      margin-top: 1.5625rem;
    }
  }

  .mock-up {
    width: 29.7369rem;
    height: 29.25rem;

    @media (max-width: 75rem) {
      width: 13.8975rem;
      height: 13.67rem;
    }
  }
`;

const MiddleContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 2.375rem;
  text-align: center;
  border: 0.5px solid white;
  align-items: center;
  @media (max-width: 75rem) {
    font-size: 1rem;
    line-height: 1.4375rem;
  }

  .top-text {
    margin-top: 3.75rem;
    @media (max-width: 75rem) {
      width: 12.5rem;
    }
  }
  .featureWrap {
    display: flex;
    flex-direction: column;
    margin: 0 1.25rem;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
      margin: 0.5625rem 0;
    }
  }

  .bottomContainerWrap {
    display: flex;
    flex-direction: row;
    margin: 2.125rem 0 4.375rem 0;
    @media (max-width: 75rem) {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  .accumulate {
    font-size: 1.125rem;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
    }
  }

  .green-text {
    font-size: 3rem;
    line-height: 4.8125rem;
    color: #caf200;
    @media (max-width: 75rem) {
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2.875rem 0;
  justify-content: center;
  border: 0.5px solid white;

  img {
    width: 29.0625rem;
    height: 22.25rem;
    @media (max-width: 75rem) {
      width: 16.625rem;
      height: 12.6875rem;
    }
  }
`;

const LeftContainer = styled.div`
  border-right: 0.5px solid white;
  border-left: 0.5px solid white;
  padding: 2.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 75rem) {
    padding: 0.5625rem;
  }

  .title {
    font-size: 1.75rem;
    line-height: 2.5rem;
    text-align: center;
    color: #caf200;
    margin-bottom: 0.9375rem;
    @media (max-width: 75rem) {
      margin-bottom: 0.625rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`;

const ClubWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #ffffff;
  font-size: 1rem;
  justify-content: space-evenly;

  @media (max-width: 75rem) {
    font-size: 0.875rem;
  }

  .club-wrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 8.125rem;
    @media (max-width: 75rem) {
      width: 8.6875rem;
    }
  }

  .club-box {
    height: 1.6875rem;
    background: #ffffff;
    border-radius: 0.4375rem;
    font-size: 1rem;
    line-height: 1.625rem;
    color: #fe4a00;
    padding: 0.1875rem 0.375rem;
    margin: 1.5rem 0 0.4375rem 0;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.375rem;
      height: 1.5625rem;
      padding: 0.0625rem 0.5rem;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 6rem;
  height: 12rem;
  background: #fe4a00;
  border: 0.125rem solid #ffffff;
  box-sizing: border-box;
  bottom: -7rem;

  .right-circle {
    border-radius: 6rem 0 0 6rem;
    right: 0;
    @media (max-width: 75rem) {
    }
  }

  .left-circle {
    border-radius: 0 6rem 6rem 0;
  }

  @media (max-width: 75rem) {
    height: 3.25rem;
    width: 1.625rem;
  }
`;

export default Result;
