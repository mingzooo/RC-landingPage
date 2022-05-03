import React from "react";
import styled from "styled-components";

const FaqComponent = ({ question, answer, linkText, link }) => {
  return (
    <Wrap>
      <QuestionBox>
        <div className="notoBold question-text">{question}</div>
      </QuestionBox>
      <div className="notoRegular answer-text">{answer}</div>
      <div
        className="notoBold"
        onClick={() => window.open(`${link}`, "_blank")}
        style={{ color: "#FE4A00", marginTop: "0.75rem", cursor: "pointer" }}
      >
        {linkText}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.375rem;
  width: 35rem;
  @media (max-width: 75rem) {
    width: 19.6875rem;
    margin-bottom: 1.5625rem;
    font-size: 0.875rem;
    line-height: 1.625rem;
  }

  .answer-text {
    font-size: 1rem;
    line-height: 1.8125rem;
    color: #262626;
    @media (max-width: 75rem) {
    font-size: 0.875rem;
    line-height: 1.625rem;
  }
  }
`;

const QuestionBox = styled.div`
  width: 35rem;
  height: 4.3125rem;
  background: #f4f4f4;
  border-radius: 1.25rem;
  margin-bottom: 1.1875rem;
  @media (max-width: 75rem) {
    width: 19.6875rem;
    height: 3rem;
    margin-bottom: 0.6875rem;
  }

  .question-text {
    font-size: 1.375rem;
    line-height: 4.3125rem;
    color: #000000;
    margin-left: 1.75rem;
    @media (max-width: 75rem) {
    font-size: 0.8125rem;
    margin-left: 0.9375rem;
    line-height: 3rem;
  }
  }
`;

export default FaqComponent;
