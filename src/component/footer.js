import React from "react";
import styled from "styled-components";

import comgong from "../assets/img_risingcamp_cgbro.png";
import cg_face from "../assets/img_risingcamp_face.png";
import cg_youtube from "../assets/img_risingcamp_youtube.png";
import icon_up from "../assets/ic_risingcamp_up.png";

const Footer = () => {
  return (
    <FooterWrap>
      <img
        src={icon_up}
        className="ic-up"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <FooterContentWrap>
        <FooterTop>
          <div>
            <img className="comgongbro-logo" src={comgong} />
            <div>
              <img
                className="sns-logo"
                src={cg_face}
                style={{ marginRight: "1.4375rem" }}
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/%EC%BB%B4%EA%B3%B5%EC%84%A0%EB%B0%B0-112624177204472 ",
                    "_blank"
                  )
                }
              />
              <img
                className="sns-logo"
                src={cg_youtube}
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCFY_Zc7Hdb5lHGPFmKywXCw ",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <FooterText>
              <div className="title-text">CONTACT US</div>
              <div className="notoRegular text">
                070-4001-4087
                <br />
                edu@softsquared.com
                <br />
                서울 마포구 마포대로10길 13 4층
              </div>
            </FooterText>
            <FooterText>
              <div className="title-text">Work hour</div>
              <div className="notoRegular text">
                Mon - Sun 10AM - 7PM
                <br />
                문의의 경우 24시간 답변이 가능합니다.
              </div>
            </FooterText>
          </div>
        </FooterTop>
        <FooterBottom className="notoRegular">
          <div>Copyright & Design by @softsquared</div>
          <div className="right-text">
            <div>이용약관</div>
            <div style={{ marginLeft: "2.375rem" }}>개인정보 처리방침</div>
            <div
              style={{ marginLeft: "2.375rem", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  "https://www.notion.so/softsquared/bfcc55fb4f1a496fbb6ffcacb10c9558",
                  "_blank"
                )
              }
            >
              환불약관
            </div>
          </div>
        </FooterBottom>
      </FooterContentWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  width: 100%;
  height: 28.625rem;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .ic-up {
    position: absolute;
    width: 5.0625rem;
    height: 5rem;
    top: -3.5rem;
    right: 18.75rem;
    cursor: pointer;
  }
`;

const FooterContentWrap = styled.div`
  width: 65.9375rem;
  display: flex;
  flex-direction: column;
  margin-top: 6.9375rem;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .comgongbro-logo {
    width: 4.3125rem;
    height: 4.3125rem;
    margin-bottom: 1.0625rem;
  }

  .sns-logo {
    width: 2.875rem;
    height: 2.875rem;
    cursor: pointer;
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-right: 3.3125rem;

  .title-text {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.125rem;
    line-height: 2.25rem;
    color: #d5d5d5;
  }
`;

const FooterBottom = styled.div`
  margin-top: 7.5rem;
  font-size: 18px;
  line-height: 2.25rem;
  color: #d5d5d5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .right-text {
    display: flex;
    flex-direction: row;
  }
`;

export default Footer;
