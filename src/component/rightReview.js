import React from "react";
import styled from "styled-components";

const RightReview = ({ name, img_a, img_b, img_c, title, detail, who }) => {
  return (
    <Wrap>
      <div className="name">{name}</div>
      <ContentWrap>
        <div className="content-wrap">
          <div className="notoBold title-text">{title}</div>
          <div className="notoRegular article">{detail}</div>
          <div
            className="notoRegular article"
            style={{ color: "#7D7D7D", marginTop: "0" }}
          >
            {who}
          </div>
          <div className="small-pic-wrap">
            <img src={img_b} className="small-pic" />
            <img src={img_c} className="small-pic" />
          </div>
        </div>
        <img src={img_a} className="big-pic" />
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 5.5625rem;
  white-space: pre-wrap;
  @media (max-width: 73.75rem) {
    margin-top: 2.4375rem;
    margin-bottom: 3.4375rem;
  }

  .name {
    width: fit-content;
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-left: auto;
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

  .small-pic-wrap {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 73.75rem) {
      margin-top: 0.375rem;
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
    align-items: flex-end;
    margin-right: 7.5rem;
    @media (max-width: 73.75rem) {
      width: 13.125rem;
      margin-right: 0.4375rem;
    }
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    text-align: right;
    @media (max-width: 73.75rem) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      width: 13.125rem;
    }
  }

  .article {
    width: 44.375rem;
    font-size: 1.5rem;
    margin-top: 1.9375rem;
    text-align: right;
    @media (max-width: 73.75rem) {
      font-size: 0.75rem;
      line-height: 1.1875rem;
      width: 13.75rem;
      margin-top: 0.625rem;
    }
  }
`;

export default RightReview;
