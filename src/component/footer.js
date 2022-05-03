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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                className="sns-logo sns-logo-left"
                src={cg_face}
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
          <div className="footerTextWrap">
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
            <div className="bottom-text">개인정보 처리방침</div>
            <div
              className="bottom-text"
              style={{ cursor: "pointer" }}
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
  @media (max-width: 75rem) {
    height: max-content;
  }

  .ic-up {
    position: absolute;
    width: 5.0625rem;
    height: 5rem;
    top: -3.5rem;
    right: 18.75rem;
    cursor: pointer;

    @media (max-width: 75rem) {
      top: -5rem;
      right: 12.5rem;
      width: 3.2656rem;
      height: 3.225rem;
    }
  }
`;

const FooterContentWrap = styled.div`
  width: 65.9375rem;
  display: flex;
  flex-direction: column;
  margin-top: 6.9375rem;
  @media (max-width: 75rem) {
    width: 18.75rem;
  }
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .comgongbro-logo {
    width: 4.3125rem;
    height: 4.3125rem;
    margin-bottom: 1.0625rem;
    @media (max-width: 75rem) {
      width: 2.8125rem;
      height: 2.8125rem;
    }
  }

  .sns-logo {
    width: 2.875rem;
    height: 2.875rem;
    cursor: pointer;
    @media (max-width: 75rem) {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  .sns-logo-left {
    margin-right: 1.4375rem;
    @media (max-width: 75rem) {
      margin-right: 0.9375rem;
    }
  }

  .footerTextWrap {
    display: flex;
    flex-direction: row;

    @media (max-width: 75rem) {
      flex-direction: column;
      margin-left: 1.25rem;
      margin-top: -1.25rem;
    }
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin-right: 3.3125rem;
  @media (max-width: 75rem) {
    margin-right: 0;
  }

  .title-text {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
    @media (max-width: 75rem) {
      margin-bottom: 0.375rem;
      margin-top: 1.25rem;
    }
  }

  .text {
    font-size: 1.125rem;
    line-height: 2.25rem;
    color: #d5d5d5;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.75rem;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 7.5rem;
  font-size: 1.125rem;
  line-height: 2.25rem;
  color: #d5d5d5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 75rem) {
    flex-direction: column;
    font-size: 0.75rem;
    margin-left: auto;
    margin-top: 2.25rem;
  }

  .right-text {
    display: flex;
    flex-direction: row;
    @media (max-width: 75rem) {
      flex-direction: column;
    }
  }

  .bottom-text {
    margin-left: 2.375rem;
    @media (max-width: 75rem) {
      margin-left: 0;
    }
  }
`;

export default Footer;
