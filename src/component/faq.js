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
          <div className="notoBold bottom-text">
            자주하는 질문들
          </div>
        </Title>
        <FaqWrap>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
            <FaqComponent/>
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

const FaqWrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 2.9375rem 0 15.625rem 0;
`;

export default Faq;
