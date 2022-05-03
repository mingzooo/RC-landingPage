import React from "react";
import styled from "styled-components";

import dev_a from "../assets/img_devteam_a.png";
import dev_b from "../assets/img_devteam_b.png";
import dev_c from "../assets/img_devteam_c.png";

const Recommendation = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            THE BEGINNING
            <br />
            IS THE SAME.
          </div>
          <div className="notoRegular middle-text">추천사</div>
          <div className="notoBold bottom-text">
            실무에 강할 수 밖에 없는 라이징캠프 수료생,
            <br />
            외부에서도 알아줍니다.
          </div>
        </Title>
        <RecommendWrap>
          <RecommendContainer>
            <img src={dev_a} />
            <div className="recommend-text">
              <RecommendText>
                <div className="notoBold red-text">
                  무엇보다 커뮤니케이션
                  <br />
                  능력이 좋으셨어요.
                </div>
                <div className="notoRegular black-text">
                  의사소통도 정말 잘되고, 이슈에 대해 자세하게 글로 남겨주셔서
                  디테일한 내용을 파악하기 쉬웠습니다. 개발적으로 성장의지도
                  강하시고, 학습도 빠르셔서 즐겁게 프로젝트를 진행할 수
                  있었습니다!
                </div>
                <div
                  className="notoRegular black-text"
                  style={{ color: "#929292" }}
                >
                  -이오 개발팀
                </div>
              </RecommendText>
            </div>
          </RecommendContainer>
          <RecommendContainer>
            <img src={dev_b} />
            <div className="recommend-text">
              <RecommendText>
                <div className="notoBold red-text">
                  프로젝트에 대한
                  <br />
                  이해도가 높으셨습니다.
                </div>
                <div className="notoRegular black-text">
                  기존에 진행중인 프로젝트를 추가 개발을 맡으셨는데, 기존 개발의
                  기획이 어려움에도 불구하고, 오히려 기획을 더 제안 해주실
                  정도로 업무 처리 능력이 좋으셨습니다. 그리고 개발중에 문제가
                  생기면 먼저 슬랙에 물어보며 확인하는 과정을 꼭 거치쳤어요.
                  덕분에 프로젝트 마감 지연없이 잘 마무리할 수 있었습니다.
                </div>
                <div
                  className="notoRegular black-text"
                  style={{ color: "#929292" }}
                >
                  -유니스 개발팀
                </div>
              </RecommendText>
            </div>
          </RecommendContainer>
          <RecommendContainer>
            <img src={dev_c} />
            <div className="recommend-text">
              <RecommendText>
                <div className="notoBold red-text">
                  커뮤니케이션부터 <br />
                  유지보수까지 잘 이끌어주셨습니다.
                </div>
                <div className="notoRegular black-text">
                  굉장히 빠듯한 일정이었음에도 불구하고 스콥 산정부터 소통,
                  사후관리에 이르기까지 거의 완벽한 대응을 해주셨습니다.
                  유지보수가 필요한 내용이 있어 향후에도 협업을 이어가고
                  있습니다. 기획적인 배경을 이해하려는 노력으로 퀄리티
                  관리해주시는 모습이 인상적이었습니다.
                </div>
                <div
                  className="notoRegular black-text"
                  style={{ color: "#929292" }}
                >
                  -박단 DK
                </div>
              </RecommendText>
            </div>
          </RecommendContainer>
        </RecommendWrap>
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
  @media (max-width: 75rem) {
    width: 22.5rem;
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 9.4375rem;
  @media (max-width: 75rem) {
    margin-top: 3.3125rem;
  }

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
    text-transform: uppercase;
    @media (max-width: 75rem) {
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
  }

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin: 1.5rem 0 0.8125rem 0;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
      margin: 0.625rem 0 0.5rem 0;
    }
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: left;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }
`;

const RecommendWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.4375rem 0 5.625rem 0;
  @media (max-width: 75rem) {
    margin: 1.625rem 0 3.6875rem 0;
  }
`;

const RecommendContainer = styled.div`
  width: 70.375rem;
  height: 22.3125rem;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  box-shadow: 0.75rem 0.9375rem 3.5rem rgba(139, 139, 139, 0.07);
  border-radius: 1.25rem;
  margin-bottom: 2.1875rem;
  @media (max-width: 75rem) {
    flex-direction: column;
    width: 19.6875rem;
    height: 27.5rem;
    justify-content: center;
  }

  img {
    width: 50%;
    border-radius: 1.25rem 0 0 1.25rem;
    @media (max-width: 75rem) {
      height: 40%;
      width: 100%;
      object-fit: cover;
      border-radius: 1.25rem 1.25rem 0 0;
    }
  }

  .recommend-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 75rem) {
      height: 50%;
      width: 100%;
      text-align: center;
    }
  }
`;

const RecommendText = styled.div`
  width: 28.125rem;
  @media (max-width: 75rem) {
    width: 18.9375rem;
  }

  .red-text {
    font-size: 1.875rem;
    line-height: 160%;
    color: #fe4a00;
    margin-bottom: 1.25rem;
    @media (max-width: 75rem) {
      font-size: 1rem;
      margin-bottom: 0.5625rem;
    }
  }

  .black-text {
    font-weight: 400;
    font-size: 1rem;
    line-height: 180%;
    color: #000000;
    @media (max-width: 75rem) {
      font-size: 0.8125rem;
    }
  }
`;

export default Recommendation;
