import React from "react";
import styled from "styled-components";

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
            <img />
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
                <div className="notoRegular black-text" style={{color:'#929292'}}>
                    -이오 개발팀
                </div>
              </RecommendText>
            </div>
          </RecommendContainer>
          <RecommendContainer>
            <img />
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
                <div className="notoRegular black-text" style={{color:'#929292'}}>
                    -이오 개발팀
                </div>
              </RecommendText>
            </div>
          </RecommendContainer>
          <RecommendContainer>
            <img />
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
                <div className="notoRegular black-text" style={{color:'#929292'}}>
                    -이오 개발팀
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
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 9.4375rem;

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
    text-transform: uppercase;
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

const RecommendWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4.4375rem 0 5.625rem 0;
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

  img {
    width: 50%;
    background-color: #929292;
    border-radius: 1.25rem 0 0 1.25rem;
  }

  .recommend-text {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
`;

const RecommendText = styled.div`
  width: 26.25rem;
  margin: 2.8125rem 0 0 4.875rem ;

  .red-text {
    font-size: 1.5rem;
    line-height: 160%;
    color: #fe4a00;
    margin-bottom: 1.25rem;
  }

  .black-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 180%;
    color: #000000;
  }
`;

export default Recommendation;
