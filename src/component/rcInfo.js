import React from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';

const RcInfo = () => {
  return (
    <Wrap>
      <ContentWrap>
        <div className="notoBold sorry-text">죄송합니다.</div>
        <span className="notoBold text-wrap">
          <span style={{ color: "#FE4A00" }}>'코딩 이론'</span>
          <span style={{ fontWeight: "1000" }}>만 배우고 싶은 분</span>께서는
          <br />
          라이징캠프를 나가주셔도 됩니다.
        </span>
        <ReactPlayer url='https://www.youtube.com/watch?v=POgtd-SID48' playing={false} controls width='61.25rem' height='34.5rem'/>
        <div className="notoBold quote">라이징 캠프는 <br/>진짜로 외주할 수 있는 실력까지 만들어드려요.</div>
        <Box>
          <div className="text">
            <div className="notoBold red-text">
            01. 코딩, 과연 이론이 중요한 걸까요?
            </div>
            <div className="notoRegular black-text">
            코딩, 이론만 배우고 실무에 적용하지 않는다면 IT 선생님의 지갑만 두둑히 채우는 행위입니다. 근데 과연 그런 수업을 선택한 수강생들의 잘못일까요? 라이징캠프에서는 교육 이후에도 수강생들이 지속적으로 성장할 수 
있게끔 환경을 만들어 주는 게 교육자의 책임이라고 생각합니다.
            </div>
          </div>
        </Box>
        <Box style={{marginTop:"2.0625rem", marginBottom:"12.0625rem"}}>
          <div className="text">
            <div className="notoBold red-text">
            02. 코딩으로 먹고 살 수 있는<br/>
            “진짜실력"을 만들어드립니다.
            </div>
            <div className="notoRegular black-text">
            라이징캠프는 배운 내용을 기반으로 <span style={{fontWeight:"bold"}}>외주 연계, 앱런칭 등을 경험해봄으로써, 실무역량을 대폭 키울 의지</span>가 있는 수강생만을 기다립니다. 
            라이징캠프는 <span style={{fontWeight:"bold"}}>“코딩으로 먹고 살 수 있는”, 진짜 실력</span>을 키워드릴 것을 약속드립니다.
            </div>
          </div>
        </Box>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 61.25rem;

  .sorry-text {
    margin-top: 4.6875rem;
    font-size: 4rem;
    color: #fe4a00;
  }

  .text-wrap {
    margin: 0.25rem 0 2.8125rem 0;
    font-size: 2rem;
    text-align: center;
  }

  .left-quote{
    margin-top: 6.25rem;
    font-size: 7.875rem;
    color: #FE4A00;
  }

  .quote{
    font-size: 1.875rem;
    color: #FE4A00;
    margin-right: auto;
    margin-bottom: 7.8125rem;
  }
`;

const Box = styled.div`
  width: 61.25rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 1.125rem 1.5rem 3.75rem rgba(115, 115, 115, 0.1);
  border-radius: 1.25rem 1.25rem 1.25rem 0;

  .text{
    display: flex;
    width: 55.625rem;
    flex-direction: column;
    margin: 3.3125rem auto;
    text-align: left;
  }

  .red-text{
    font-size: 1.625rem;
    color: #fe4a00;
    margin-bottom: 1.125rem;
  }

  .black-text{
    font-size: 1.25rem;
    color: #000000;
  }
`;

export default RcInfo;