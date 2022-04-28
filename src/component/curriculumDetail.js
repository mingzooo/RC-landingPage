import React from "react";
import styled from "styled-components";

const CurriculumDetail = () => {
  return (
    <>
      <div className="notoBold" style={{fontSize:"1.5rem", color:"#ffffff", marginBottom:"0.875rem"}}>상세 커리큘럼</div>
      <CurriculumWrap className="notoBold">
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
          </div>
        </CurriculumBox>
        <CurriculumBox>
          <div className="text">
            1주차 I OT & 플랫폼, 라이징 캠프 OT, 플랫폼이란?{" "}
            <span className="notoMedium" style={{ color: "#000000" }}>
              개발자로서의 자세, Manifests, Palette, Layout 학습 및 Front-end 를
              다루게 됩니다.
            </span>
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
    font-size: 1.125rem;
    line-height: 1.6875rem;
    color: #fe4a00;
    margin-left: 1.5rem;
  }
`;

export default CurriculumDetail;
