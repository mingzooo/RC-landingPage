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
    font-size: 1.375rem;
    line-height: 4.3125rem;
    color: #000000;
    margin-left: 1.75rem;
  }
`;

export default FaqComponent;
