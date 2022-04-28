import React from "react";
import styled from "styled-components";
import MentorComponent from "./mentorComponent";

const Mentor = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            rising camp
            <br />
            mentor
          </div>
          <div className="notoMedium middle-text">멘토 소개</div>
          <div className="notoBold bottom-text">
            멘토가 대신 결과물을 만들어드리지 않습니다.
            <br />
            스스로 성장할 수 있도록 가이드합니다.
          </div>
          <div className="notoRegular bottom">
            라이징캠프의 멘토님들은 여러분의 상황을 똑같이 경험해본 분들입니다.
            <br />
            여러분이 헤매는 부분, 걱정되는 상황-가장 가까이서 함께 고민하고
            성장해 나갑니다.
          </div>
        </Title>
        <MentorWrap>
            <MentorComponent/>
            <MentorComponent/>
            <MentorComponent/>
            <MentorComponent/>
            <MentorComponent/>
        </MentorWrap>
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
  align-items: center;
  text-align: center;

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
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
  }

  .bottom {
    margin-top: 1.875rem;
    font-size: 20px;
    line-height: 2.25rem;
    text-align: center;
    color: #000000;
  }
`;

const MentorWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 6.6875rem 0 6.25rem 0;
    justify-content: space-between;
`;

export default Mentor;
