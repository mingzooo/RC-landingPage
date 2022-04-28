import React from "react";
import styled from "styled-components";

import pic_1 from "../assets/study_1.png";
import pic_2 from "../assets/study_2.png";
import pic_3 from "../assets/study_3.png";
import pic_4 from "../assets/study_4.png";

const Study = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            Development.
            <br />
            Keep studying.
          </div>
          <div className="notoRegular middle-text">라이징캠프 수강방법</div>
          <div className="notoBold bottom-text">
            가장 중요한 준비물은 끈기.
            <br />
            나머지는 라이징캠프가 알아서 다 제공해 드립니다.
          </div>
        </Title>
        <ContainerWrap>
          <StudyContainer>
            <img src={pic_1} />
            <div className="notoBold title">토론 방식의 수업</div>
            <div className="notoRegular feature">
              🗸 주 1회 3시간
              <br />
              🗸 1:6 소수정예
              <br />
              🗸 정확한 방향성 + 올바른 개발 습관화
            </div>
           <div style={{display:"flex", flexDirection:"row"}}>
              <HashTag className="notoRegular">#진짜로 이해될때까지!</HashTag>
              <HashTag className="notoRegular">#사고확장</HashTag>
           </div>
          </StudyContainer>
          <StudyContainer>
            <img src={pic_2} />
            <div className="notoBold title">1:1 맞춤형 피드백</div>
            <div className="notoRegular feature">
              🗸 이해한 점, 부족한 점 개별 체크
              <br />
              🗸 지식보다는 지혜를
              <br />
              🗸 문제의 근본적인 원인 파악
            </div>
            <HashTag className="notoRegular">#나의 상황을 이해하는 멘토</HashTag>
          </StudyContainer>
          <StudyContainer>
            <img src={pic_3} />
            <div className="notoBold title">실무실력 UP</div>
            <div className="notoRegular feature">
              🗸 실무 업무 프로세스 익히기
              <br />
              🗸 업무 일정 조율 방법
              <br />
              🗸 다른 개발자와 협업하는 방법
            </div>
            <HashTag className="notoRegular">#나의 상황을 이해하는 멘토</HashTag>
          </StudyContainer>
          <StudyContainer>
            <img src={pic_4} />
            <div className="notoBold title">라이징테스트</div>
            <div className="notoRegular feature">
              🗸 협업 스킬
              <br />
              🗸 실전 적용
              <br />
              🗸 수료 후 실제 프로젝트 투입 기회
            </div>
            <HashTag className="notoRegular">#나의 잠재력 확인</HashTag>
          </StudyContainer>
        </ContainerWrap>
      </ContentWrap>
    </Page>
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
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 9rem;
  position: relative;

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
    color: #ffffff;
    margin: 0.8125rem 0 0.75rem 0;
  }

  .bottom-text {
    font-size: 2.25rem;
    color: #ffffff;
    line-height: 3.6rem;
    text-align: left;
  }
`;

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StudyContainer = styled.div`
  width: 17.5rem;
  display: flex;
  flex-direction: column;
  margin: 1.8125rem 0 12.25rem 0;

  img {
    width: 17.5rem;
    height: 10rem;
    background: #e3e3e3;
    margin-bottom: 1.3125rem;
  }

  .title {
    font-size: 1.125rem;
    line-height: 2rem;
    color: #ffffff;
  }

  .feature {
    margin: 0.625rem 0 1.25rem 0;
    font-size: 16px;
    line-height: 1.8125rem;
    color: #ffffff;
  }
`;

const HashTag = styled.div`
  width: fit-content;
  padding:0.25rem;
  background: #FFFFFF;
  border-radius: 0.4375rem;
  margin-right: 0.5rem;

  font-size: 0.75rem;
  line-height: 1.375rem;
  color: #000000;

`;

export default Study;
