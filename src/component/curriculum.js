import React, { useState } from "react";
import styled from "styled-components";
import CurriculumDetail from "./curriculumDetail";
import Track from "./track";
import curriculum from "./curriculum.json";

import img_and from "../assets/img_android.png";
import img_ios from "../assets/img_ios.png";
import img_server from "../assets/img_server.png";
import img_web from "../assets/img_web.png";

import kotlin from "../assets/img_kotlin.png";
import swift from "../assets/img_swift.png";
import server_a from "../assets/img_server_a.png";
import server_b from "../assets/img_server_b.png";
import server_c from "../assets/img_server_c.png";
import blank from "../assets/blank.png";

import react from '../assets/img_react.png';
import html from '../assets/img_html.png';
import css from '../assets/img_css.png';
import js from '../assets/img_js.png';

const Curriculum = () => {
  const [track, setTrack] = useState(curriculum.android);
  const [aosClicked, setAosClicked] = useState(true);
  const [iosClicked, setIosClicked] = useState(false);
  const [serverClicked, setServerClicked] = useState(false);
  const [webClicked, setWebClicked] = useState(false);

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
          <div className="notoBold bottom-text">라이징 캠프 커리큘럼</div>
        </Title>
        <TrackWrap>
          <Track
            img={img_and}
            track_eng={"ANDROID CLASS"}
            track_kor={"안드로이드 클래스"}
            detail={
              "내가 만들어보고자 했던 서비스를 직접 구현해보며, 안드로이드 개발자로 성장해 나갑니다."
            }
            schedule={"매주 월요일 / 화요일 수업 예정"}
            setTrack={setTrack}
            isClicked={aosClicked}
            setAosClicked={setAosClicked}
            setIosClicked={setIosClicked}
            setServerClicked={setServerClicked}
            setWebClicked={setWebClicked}
            lang1={kotlin}
            lang2={blank}
            lang3={blank}
            lang4={blank}
          />
          <Track
            img={img_ios}
            track_eng={"iOS CLASS"}
            track_kor={"iOS 클래스"}
            detail={
              "내가 만들어보고자 했던 서비스를 직접 구현해보며, iOS 개발자로 성장해 나갑니다."
            }
            schedule={"매주 토요일 수업 예정"}
            setTrack={setTrack}
            isClicked={iosClicked}
            setAosClicked={setAosClicked}
            setIosClicked={setIosClicked}
            setServerClicked={setServerClicked}
            setWebClicked={setWebClicked}
            lang1={swift}
            lang2={blank}
            lang3={blank}
            lang4={blank}
          />
          <Track
            img={img_server}
            track_eng={"SERVER CLASS"}
            track_kor={"서버 클래스"}
            detail={
              "서버를 직접 구축해보고 프론트엔드에게 알맞는 데이터를 제공하며, 서버에 대한 지식을 키워 나갑니다."
            }
            schedule={"매주 월요일 / 토요일 수업 예정"}
            setTrack={setTrack}
            isClicked={serverClicked}
            setAosClicked={setAosClicked}
            setIosClicked={setIosClicked}
            setServerClicked={setServerClicked}
            setWebClicked={setWebClicked}
            web={false}
            lang1={server_a}
            lang2={server_b}
            lang3={server_c}
            lang4={blank}
          />
          <Track
            img={img_web}
            track_eng={"WEB CLASS"}
            track_kor={"웹 클래스"}
            detail={
              "Web 서비스, 내가 만들어보고자 했던 서비스를 직접 구현해보며, 웹 개발자로 성장해 나갑니다."
            }
            schedule={"매주 평일 저녁 / 주말 오전 오후 수업 예정"}
            setTrack={setTrack}
            isClicked={webClicked}
            setAosClicked={setAosClicked}
            setIosClicked={setIosClicked}
            setServerClicked={setServerClicked}
            setWebClicked={setWebClicked}
            web={true}
            lang1={html}
            lang2={css}
            lang3={js}
            lang4={react}
          />
        </TrackWrap>
        <CurriculumDetail track={track} />
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
  @media (max-width: 75rem) {
    width: 22.5rem;
  }
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
  @media (max-width: 75rem) {
    overflow-x: scroll;
    width: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  }
`;

export default Curriculum;
