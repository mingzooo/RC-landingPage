import React from "react";
import styled from "styled-components";
import CurriculumDetail from "./curriculumDetail";
import Track from "./track";

const Curriculum = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            rising camp
            <br />
            curriculum
          </div>
          <div className="notoRegular middle-text">라이징캠프 수업</div>
          <div className="notoBold bottom-text">
            라이징 캠프 커리큘럼
          </div>
        </Title>
        <TrackWrap>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </TrackWrap>
        <CurriculumDetail/>
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
  align-items: center;
  margin-top: 10.5rem;
  text-align: center;
  color: #ffffff;

  .title-text {
    font-family: "Hanson";
    font-size: 6rem;
    line-height: 6rem;
    text-transform: uppercase;
  }

  .middle-text {
    font-size: 1.5rem;
    margin: 0.8125rem 0 0.75rem 0;
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
  }
`;

const TrackWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3.8125rem 0;
`;

export default Curriculum;
