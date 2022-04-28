import React from "react";
import styled from "styled-components";

const FaqComponent = () => {
  return (
    <Wrap>
      <QuestionBox>
        <div className="notoBold question-text">
          Q. 저도 수업을 들을 수 있나요?
        </div>
      </QuestionBox>
      <div className="notoRegular answer-text">
        컴공 2~3학년 기준으로 클라이언트의 경우 객체 지향에 대한 이해 및
        조건문과 반복문을 활용한 프로그래밍 경험, 서버의 경우 DB에 대한 기본적인
        지식이 있다면 수강하시는데 큰 무리는 없습니다. 다만 웹 세션은
        html,css,js 에 대한 기초 지식이 있어야 수강하기 수월하다는 점
        참고해주세요 !
      </div>
      <div className="notoBold" style={{color:"#FE4A00", marginTop:"0.75rem"}}>👉 선배들의 생생한 수강 후기 보러가기!</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.375rem;
  width: 35rem;

  .answer-text {
    font-size: 1rem;
    line-height: 1.8125rem;
    color: #262626;
  }
`;

const QuestionBox = styled.div`
  width: 35rem;
  height: 4.3125rem;
  background: #f4f4f4;
  border-radius: 1.25rem;
  margin-bottom: 1.1875rem;

  .question-text {
    font-size: 1.125rem;
    line-height: 4.3125rem;
    color: #000000;
    margin-left: 1.75rem;
  }
`;

export default FaqComponent;
