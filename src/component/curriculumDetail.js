import React from "react";
import styled from "styled-components";

const CurriculumDetail = ({track}) => {
  return (
    <>
      <div className="notoBold" style={{fontSize:"1.5rem", color:"#ffffff", marginBottom:"0.875rem"}}>상세 커리큘럼</div>
      <CurriculumWrap className="notoBold">
        {track.map((curri)=>(
          <CurriculumBox key={curri.id}>
          <div className="text">
            {curri.title}{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              {curri.detail}
            </span>
          </div>
        </CurriculumBox>
        ))}
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
  }
`;

export default CurriculumDetail;
