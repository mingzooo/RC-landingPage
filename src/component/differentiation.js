import React from "react";
import styled from "styled-components";

const Differentiation = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="text-wrap">
            <div className="notoMedium middle-text">라이징캠프 차별점</div>
            <div className="notoBold bottom-text">
              공부의 끝은 실전.
              <br />
              배운 내용을 써먹을 수 있는 환경을 조성해드립니다.
            </div>
          </div>
        </Title>
        <ContainerWrap>
          <Container>
            <img />
            <div className="notoBold title-text">1. 외주연계</div>
            <div className="notoRegular detail-text">
              교육 이후 우수하게 수료하신 분들에게 외주 경험이 제공됩니다. 개발
              팀장과 프로젝트 매니저와 함께 진행하며, 외주 수익금을 쉐어합니다.
            </div>
          </Container>
          <Container>
            <img />
            <div className="notoBold title-text">2. 메이커스 챌린지</div>
            <div className="notoRegular detail-text">
              전국 IT 관련 학과 학생들로 이루어진 동아리에서 앱런칭을 해볼 수
              있습니다. “수익형” 앱 런칭, 혹은 “나만의” 앱 런칭을 해볼 준비가
              되셨나요?
            </div>
          </Container>
          <Container>
            <img />
            <div className="notoBold title-text">3. 네트워킹</div>
            <div className="notoRegular detail-text">
              라이징캠프, 메이커스 동아리원들 모두가 속한 디스코드에서 함께
              성장합니다. 디스코드 내의 지식in 채널, 든든한 공부 지원군이
              되어드립니다.
            </div>
          </Container>
        </ContainerWrap>
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
  margin-top: 10.1875rem;

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin-bottom: 0.8125rem;
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: left;
  }
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5.3125rem 0 9.625rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.1875rem;

  img {
    width: 6.3125rem;
    height: 6.3125rem;
    border-radius: 50%;
  }

  .title-text {
    font-size: 1.125rem;
    line-height: 2rem;
    color: #000000;
    margin: 2.25rem 0 0.625rem 0;
  }

  .detail-text {
    font-size: 1rem;
    line-height: 1.8125rem;
    color: #000000;
  }
`;

export default Differentiation;
