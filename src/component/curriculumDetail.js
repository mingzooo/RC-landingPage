import React from "react";
import styled from "styled-components";

const CurriculumDetail = ({ track }) => {
  return (
    <>
      <div
        className="notoBold"
        style={{
          fontSize: "1.5rem",
          color: "#ffffff",
          marginBottom: "0.875rem",
        }}
      >
        상세 커리큘럼
      </div>
      <CurriculumWrap className="notoBold">
        {track.map((curri) => (
          <CurriculumBox key={curri.id}>
            <div className="text">
              {curri.title}{" "}
              <span className="notoMedium" style={{ color: "#000000" }}>
                {curri.detail}
              </span>
            </div>
          </CurriculumBox>
        ))}
        <CurriculumBox style={{ display: "flex", flexDirection: "column" }}>
          <div className="text">7-8주차 I 라이징 테스트</div>
          <div
            className="notoMedium"
            style={{ color: "#000000", margin: "0 1.5rem ",fontSize:"0.875rem" }}
          >
            팀 빌딩, git & template 세미나, 클론 코딩, 주 1회 개발팀장 주관 코드
            리뷰 와 같이 수업이 진행되며, 주 1회 수업, 과제 수행 후 수업 마다
            점검 받는 시스템으로 진행됩니다. 과제의 경우 수강생의 수준에 따라
            점검을 진행하며 3개의 세션으로 매 수업이 구성되어 있습니다.
          </div>
          <div style={{margin: "0 1.5rem",fontSize:"0.875rem"}}>
            <div className="notoMedium" style={{ color: "#000000" }}>
              <span className="text" style={{margin:"0", marginRight:"0.6875rem"}}>세션 소개</span>1. 과제 점검 및 피드백 -&gt; 2.
              토론식 세션 -&gt; 3. 실습
            </div>
          </div>
        </CurriculumBox>
      </CurriculumWrap>
    </>
  );
};

const CurriculumWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurriculumBox = styled.div`
  width: 100%;
  padding: 1.5625rem 0;
  background: #ffffff;
  border-radius: 0.75rem;
  margin-bottom: 1.3125rem;

  .text {
    font-size: 1rem;
    line-height: 1.6875rem;
    color: #fe4a00;
    margin: 0 1.5rem;
    @media (max-width: 75rem) {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  }
`;

export default CurriculumDetail;
