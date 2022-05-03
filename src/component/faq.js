import React from "react";
import styled from "styled-components";
import FaqComponent from "./faqComponent";

const Faq = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            ask,
            <br />
            everything.
          </div>
          <div className="notoRegular middle-text">FAQ</div>
          <div className="notoBold bottom-text">자주하는 질문들</div>
        </Title>
        <FaqWrap>
          <FaqComponent
            question={"Q. 저도 수업을 들을 수 있나요?"}
            answer={
              "컴공 2~3학년 기준으로 클라이언트의 경우 객체 지향에 대한 이해 및 조건문과 반복문을 활용한 프로그래밍 경험, 서버의 경우 DB에 대한 기본적인 지식이 있다면 수강하시는데 큰 무리는 없습니다. 다만 웹 세션은 html,css,js 에 대한 기초 지식이 있어야 수강하기 수월하다는 점 참고해주세요 !"
            }
            linkText={"👉 선배들의 생생한 수강 후기 보러가기!"}
            link={
              "https://softsquared.notion.site/d1bc034f2c694ec9ade8df1882b2747d"
            }
          />
          <FaqComponent
            question={"Q. 수업은 어떤 방식으로 진행되나요?"}
            answer={
              "수업은 약 3시간 내외로 진행되며 소수 정예 방식으로 트레이너와 6명의 멘티와 토론식으로 진행됩니다. 문법에 대한 수업은 진행되지 않으며, 수업 당일에는 그 전 주에 수행한 일에 대한 주도 면밀한 피드백을 진행합니다. 매 주차에 주제에 대한 세계관에 대해 짚어주며 그 한 주 동안 수행할 과제에 대해 방향성 및 개발 습관을 잡아드립니다."
            }
          />
          <FaqComponent
            question={"Q. 수업 전에 알아두면 좋은 게 있나요?"}
            answer={
              "저희가 수업 전에 필요한 지식들을 모아 놓은 링크가 있습니다. 꼼꼼히 숙지 해주시면 라이징 캠프 진행 시 큰 도움이 되실 거에요. 특히 웹세션은 아래 링크 학습해주셔야 진행하시는데 문제가 없으니, 꼭 확인 해주세요 !"
            }
            linkText={"👉 사전에 알아두면 좋을 지식"}
            link={
              "https://softsquared.notion.site/N-439df6992da54a83b513232400fa3015"
            }
          />
          <FaqComponent
            question={"Q. 수료는 어떻게 하나요?"}
            answer={
              "6주의 교육을 마치고 2주간의 Rising Test의 성과를 통해 결정됩니다! 성과가 미흡하다면 수료가 보류될 수 있습니다."
            }
          />
          <FaqComponent
            question={"Q. 비전공자인데 수업을 들을 수 있을까요?"}
            answer={
              "해당 수업에서는 문법을 다루지 않습니다. 따라서 하나의 언어로 프로그래밍을 해본 경험이 필요합니다! 반복문과 조건문을 활용한 알고리즘 문제들을 풀며 프로그래밍 구현 능력을 기르셨다면 충분히 따라오실 수 있습니다."
            }
          />
          <FaqComponent
            question={"Q. Rising Test란?"}
            answer={
              "쏘카, 배민, 카카오톡 등 일상생활 속에서 사용해보았던 서비스를 2주간 프론트엔드, 백엔드 팀을 이루어 클론을 만들어보는 것을 목표로 합니다."
            }
          />
          <FaqComponent
            question={"Q. 수업은 오프라인으로 진행되나요?"}
            answer={
              "물리적 거리에 구애 받지 않는 온라인으로 수업이 진행됩니다. 실제로 해외나 비수도권에서 거주하시는 분들도 수강하고 계십니다."
            }
          />
          <FaqComponent
            question={"Q. 클라이언트와 서버 클래스를 동시에 들을 수 있나요?"}
            answer={
              "한 클래스만으로도 벅찬 과정이므로 클래스를 동시에 듣기에는 어려운 과정입니다!"
            }
          />
        </FaqWrap>
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
  @media (max-width: 73.75rem) {
    width: 22.5rem;
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 9.4375rem;
  @media (max-width: 73.75rem) {
    width: 19.6875rem;
    margin-top: 2.375rem;
  }

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
    text-transform: uppercase;
    @media (max-width: 73.75rem) {
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
  }

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin: 1.5rem 0 0.8125rem 0;
    @media (max-width: 73.75rem) {
      font-size: 0.75rem;
      margin: 0.8125rem 0 0.375rem 0;
    }
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: left;
    @media (max-width: 73.75rem) {
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }
`;

const FaqWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.9375rem 0 15.625rem 0;
  @media (max-width: 73.75rem) {
    flex-direction: column;
  }
`;

export default Faq;
