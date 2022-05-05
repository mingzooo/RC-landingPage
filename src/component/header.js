import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import rc_logo from "../assets/img_risingcamp_logo_pc.png";

const Header = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://api-dev.neordinary.co/web/landing/education/rising-camp")
      .then((response) => {
        if (response.data.code == 1000) {
          setData(response.data.result[response.data.result.length - 1]);
        }
      });
  }, []);

  return (
    <HeaderWrap>
      <MainHeader>
        <img className="rc-logo" src={rc_logo} />
        <div className="header-right notoBold">
          <div
            className="one-track"
            onClick={() => window.open(`${data.oneToOneTrackLink}`, "_blank")}
          >
            1:1 TRACK
          </div>
          <div
            className="reg-button"
            onClick={() => window.open(`${data.productApplyUrl}`, "_blank")}
          >
            신청하기
          </div>
        </div>
      </MainHeader>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  height: 6.25rem;
  position: relative;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 73.75rem) {
    height: 4.5625rem;
  }
`;

const MainHeader = styled.div`
  width: 67.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 73.75rem) {
    width: 22.5rem;
  }

  .rc-logo {
    width: 12.75rem;
    @media (max-width: 73.75rem) {
      width: 5.875rem;
    }
  }

  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .one-track {
    font-size: 1.25rem;
    color: #ffffff;
    margin-right: 2.4375rem;
    cursor: pointer;
    @media (max-width: 73.75rem) {
      font-size: 0.875rem;
      margin-right: 1.875rem;
    }
  }

  .reg-button {
    width: 9.125rem;
    height: 3.75rem;
    background-color: #fe4a00;
    border-radius: 4rem;
    color: #ffffff;
    font-size: 1.25rem;
    text-align: center;
    line-height: 3.75rem;
    cursor: pointer;
    @media (max-width: 73.75rem) {
      font-size: 0.875rem;
      width: 4.8125rem;
      height: 2rem;
      line-height: 2rem;
    }
  }
`;

export default Header;
