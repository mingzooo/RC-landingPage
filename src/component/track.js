import React, { useState } from "react";
import styled from "styled-components";
import curriculum from "./curriculum.json";

const Track = ({img, track_eng, track_kor, detail, schedule, lang1, lang2, lang3, lang4, web, setTrack, isClicked, setAosClicked, setIosClicked, setServerClicked, setWebClicked }) => {

  // const [isClicked,setIsClicked] = useState(false);

  const onClickTrack = () => {
    if(track_kor==="안드로이드 클래스"){
      setTrack(curriculum.android);
      if(isClicked===false){
        setAosClicked(true);
        setIosClicked(false);
        setServerClicked(false);
        setWebClicked(false);
      }
    }
    if(track_kor==="iOS 클래스"){
      setTrack(curriculum.ios);
      if(isClicked===false){
        setAosClicked(false);
        setIosClicked(true);
        setServerClicked(false);
        setWebClicked(false);
      }
    }
    if(track_kor==="서버 클래스"){
      setTrack(curriculum.server);
      if(isClicked===false){
        setAosClicked(false);
        setIosClicked(false);
        setServerClicked(true);
        setWebClicked(false);
      }
    }
    if(track_kor==="웹 클래스"){
      setTrack(curriculum.web);
      if(isClicked===false){
        setAosClicked(false);
        setIosClicked(false);
        setServerClicked(false);
        setWebClicked(true);
      }
    }
  };

  return (
    <Container onClick={onClickTrack} isClicked={isClicked}>
      <ContentWrap>
        <img src={img}/>
        <div className="title-eng">{track_eng}</div>
        <div className="notoBold title-kor">{track_kor}</div>
        <div className="notoRegular black-text" style={{marginBottom:"1.125rem"}}>
          {detail}
        </div>
        <div className="notoBold red-text">수업일정</div>
        <BlackText web={web} className="notoRegular">
          {schedule}
        </BlackText>
        <div className="notoBold red-text">주요언어</div>
        <div style={{display:'flex', flexDirection:"row", width:"90%", justifyContent:"space-between"}}>
          <img src={lang1}/>
          <img src={lang2}/>
          <img src={lang3}/>
          <img src={lang4}/>
        </div>
      </ContentWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 17.5625rem;
  height: 29.75rem;
  display: flex;
  align-items: center;
  background: ${(props)=>(props.isClicked?'#FFECE4':'#ffffff')};
  border-radius: 20px;
  cursor: pointer;
  @media (max-width: 75rem) {
    margin-right: 1.125rem;
  }
`;

const ContentWrap = styled.div`
  width: fit-content;
  padding: 0 1.4375rem;
  display: flex;
  flex-direction: column;

  img {
    width: 3.0625rem;
    height: 3.0625rem;
    background: #ffffff;
    width: object-fit;
    background: transparent;
  }

  .title-eng {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: #fe4a00;
    margin: 0.625rem 0 0.625rem 0;
    width: 11.1875rem;
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
`;

const BlackText = styled.div`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #272727;
  margin-bottom: ${(props)=>((props.web) ? '0.625rem': '1.875rem')};
`;

export default Track;
