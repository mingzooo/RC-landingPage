import React from "react";
import styled from "styled-components";
import MentorComponent from "./mentorComponent";

import summer from "../assets/img_risingcamp_summer.png";
import hannah from "../assets/img_risingcamp_hahan.png";
import david from "../assets/img_risingcamp_david.png";
import tech from "../assets/img_risingcamp_tech.png";
import zoe from "../assets/img_risingcamp_zoe.png";

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
          <MentorComponent
            img={summer}
            name="SUMMER"
            detail={
              "끊임없이 의심하고 끊임없이 탐구하세요! 스스로 문제를 해결할 수 있도록 끝까지 도와드립니다."
            }
            hashtag1={"#자신감"}
            hashtag2={"#문제해결능력"}
          />
          <MentorComponent
            img={hannah}
            name="HANNAH"
            detail={
              "진짜 나의 것! 휘발되는 지식이 아닌 탄탄한 사고력과 개발 태도를 함께 만들어요."
            }
            hashtag1={"#개발습관"}
            hashtag2={"#사고력"}
          />
          <MentorComponent
            img={david}
            name="DAVID"
            detail={
              "물고기를 잡아드리지 않습니다. 물고기를 잡는 법을 알려드립니다!"
            }
            hashtag1={"#개발습관"}
            hashtag2={"#성장"}
          />
          <MentorComponent
            img={tech}
            name="TECH"
            detail={
              "하고자 하는 열정이 있다면 그 열정이 헛되지 않게 도와드리겠습니다! 삽질하는 시간을  최소화 해드릴게요."
            }
            hashtag1={"#실무"}
            hashtag2={"#토론"}
          />
          <MentorComponent
            img={zoe}
            name="ZOE"
            detail={
              "‘앱 런칭이 가장 쉬웠어요!’ 혼자서 앱 런칭이 가능한 개발자로 만들어드리겠습니다."
            }
            hashtag1={"#자신감"}
            hashtag2={"#성장"}
          />
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
  @media (max-width: 75rem) {
    width: 22.5rem;
  }
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
  @media (max-width: 75rem) {
    flex-direction: column;
  }
`;

export default Mentor;
