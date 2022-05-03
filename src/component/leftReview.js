import React from "react";
import styled from "styled-components";

const LeftReview = ({ name, img_a, img_b, img_c, title, detail, who }) => {
  return (
    <Wrap>
      <div className="name">{name}</div>
      <ContentWrap>
        <img src={img_a} className="big-pic" />
        <div className="content-wrap">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img src={img_b} className="small-pic" />
            <img src={img_c} className="small-pic" />
          </div>
          <div className="notoBold title-text">{title}</div>
          <div className="notoRegular article">{detail}</div>
          <div
            className="notoRegular article"
            style={{ color: "#7D7D7D", marginTop: "0" }}
          >
            {who}
          </div>
        </div>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 5.5625rem;
  @media (max-width: 73.75rem) {
    margin-top: 0;
  }
  .name {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 3.875rem;
    line-height: 3.875rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-bottom: 0.8125rem;
    @media (max-width: 73.75rem) {
      font-size: 1.75rem;
      line-height: 1.75rem;
      -webkit-text-stroke: 0.0625rem #caf200;
      margin-bottom: 0.5625rem;
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .big-pic {
    z-index: -100;
    width: 23.75rem;
    height: 40.4375rem;
    @media (max-width: 73.75rem) {
      width: 6.4375rem;
      height: 12.5rem;
    }
  }

  .small-pic {
    width: 20.5rem;
    height: 14.4375rem;
    @media (max-width: 73.75rem) {
      width: 6.375rem;
      height: 4.5rem;
    }
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
    width: 42.5625rem;
    @media (max-width: 73.75rem) {
      width: 13.125rem;
      margin-left: 0.4375rem;
    }
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    margin-top: 2rem;
    width: 39.5625rem;
    @media (max-width: 73.75rem) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 13.125rem;
      margin-top: 0.75rem;
    }
  }

  .article {
    width: 37.4375rem;
    font-size: 1.5rem;
    margin-top: 1.3125rem;
    @media (max-width: 73.75rem) {
      font-size: 0.75rem;
      line-height: 1.1875rem;
      width: 13.125rem;
      margin-top: 0.625rem;
    }
  }
`;

export default LeftReview;
