import React from "react";
import styled from "styled-components";

const Track = () => {
  return (
    <Container>
      <ContentWrap>
        <img />
        <div className="title-eng">android class</div>
        <div className="notoBold title-kor">안드로이드 클래스</div>
        <div className="notoRegular black-text" style={{marginBottom:"1.125rem"}}>
          내가 만들어보고자 했던 서비스를 직접 구현해보며, 안드로이드 개발자로
          성장해 나갑니다.
        </div>
        <div className="notoBold red-text">수업일정</div>
        <div className="notoRegular black-text">
          매주 월요일 / 화요일 수업 예정
        </div>
        <div className="notoBold red-text">주요언어</div>
        <img />
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 17.5625rem;
  height: 29.75rem;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 20px;
`;

const ContentWrap = styled.div`
  width: fit-content;
  padding: 0 1.875rem;
  display: flex;
  flex-direction: column;

  img {
    width: 3.0625rem;
    height: 3.0625rem;
    background: #c4c4c4;
  }

  .title-eng {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: #fe4a00;
    text-transform: uppercase;
    margin: 0.625rem 0 0.625rem 0;
  }

  .title-kor {
    font-size: 1.125rem;
    line-height: 1.125rem;
    color: #fe4a00;
    margin-bottom: 1.125rem;
  }

  .red-text {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fe4a00;
    margin: 0 0 0.375rem 0;
  }

  .black-text {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #272727;
    margin-bottom: 1.875rem;
  }
`;

export default Track;
