import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import main from "../assets/img_banner.png";
import main_m from "../assets/_img_m_banner.png";

const MainImg = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://api-dev.neordinary.co/web/landing/education/rising-camp")
      .then((response) => {
        if (response.data.code == 1000) {
          setData(response.data.result[0]);
        }
      });
  }, []);

  return (
    <ImgWrap>
      <img id="pc-img" src={main} className="img-pc" />
      <img id="mobile-img" src={main_m} className="img-m" />
      <RegFloatingButton
        className="notoBold"
        onClick={() =>
          window.open(`${data.productApplyUrl}`, "_blank")
        }
      >
        {data.productLandingName}
      </RegFloatingButton>
    </ImgWrap>
  );
};

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 73.75rem) {
    #pc-img {
      display: block;
    }
    #mobile-img {
      display: none;
    }
  }

  .img-pc {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-m {
    width: 22.5rem;
    height: 42.625rem;
    object-fit: contain;
  }

  @media (max-width: 73.75rem) {
    #pc-img {
      display: none;
    }
    #mobile-img {
      display: block;
    }
  }
`;

const RegFloatingButton = styled.div`
  width: 13.0625rem;
  height: 4.75rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 4.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  z-index: 9999;
  cursor: pointer;
  position: absolute;
  bottom: 2.8125rem;
  position: fixed;

  @media (max-width: 73.75rem) {
    width: 7.375rem;
    height: 2.4581rem;
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }
`;

export default MainImg;
