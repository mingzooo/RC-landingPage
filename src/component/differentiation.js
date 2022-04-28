import React from "react";
import styled from "styled-components";

import pic from "../assets/blog-pic.png";

const Differentiation = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            The end of <br />
            studying is <br />
            practice.
          </div>
          <div className="notoMedium middle-text">라이징캠프 차별점</div>
          <div className="notoBold bottom-text">
            공부의 끝은 실전.
            <br />
            배운 내용을 써먹을 수 있는 환경을 조성해드립니다.
          </div>
        </Title>
        <ContainerWrap>
          <Container>
            <div className="wrap">
              <img src={pic} />
              <div className="notoBold title-text">1. 외주연계</div>
              <div className="notoRegular detail-text">
                교육 이후 우수하게 수료하신 분들에게 외주 경험이 제공됩니다.
                개발 팀장과 프로젝트 매니저와 함께 진행하며, 외주 수익금을
                쉐어합니다.
              </div>
            </div>
          </Container>
          <Container>
            <div className="wrap">
              <img src={pic} />
              <div className="notoBold title-text">1. 외주연계</div>
              <div className="notoRegular detail-text">
                교육 이후 우수하게 수료하신 분들에게 외주 경험이 제공됩니다.
                개발 팀장과 프로젝트 매니저와 함께 진행하며, 외주 수익금을
                쉐어합니다.
              </div>
            </div>
          </Container>
          <Container>
            <div className="wrap">
              <img src={pic} />
              <div className="notoBold title-text">1. 외주연계</div>
              <div className="notoRegular detail-text">
                교육 이후 우수하게 수료하신 분들에게 외주 경험이 제공됩니다.
                개발 팀장과 프로젝트 매니저와 함께 진행하며, 외주 수익금을
                쉐어합니다.
              </div>
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
  flex-direction: column;
  align-items: left;
  margin-top: 10.1875rem;

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
    margin: 1.5625rem 0 0.8125rem 0;
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
  margin-top: 5.3125rem;
`;

const Container = styled.div`
  width: 23.5rem;
  background: #ffffff;
  box-shadow: -0.5rem 0.8125rem 0.875rem 0.8125rem rgba(223, 223, 223, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .wrap {
    display: flex;
    flex-direction: column;
    width: 20.625rem;
    margin: 52px 0 87.9392px 0;
  }

  img {
    width: 20.5031rem;
    height: 13.7094rem;
    border-radius: 1.125rem;
  }

  .title-text {
    font-size: 1.625rem;
    line-height: 2rem;
    color: #fe4a00;
    margin: 1.4819rem 0 1.5rem 0;
  }

  .detail-text {
    font-size: 22px;
    line-height: 1.8125rem;
    color: #000000;
  }
`;

export default Differentiation;
