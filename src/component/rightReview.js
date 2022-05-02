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
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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

  .name {
    width: fit-content;
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-bottom: -2.5rem;
    margin-left: auto;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .big-pic {
    z-index: -100;
    width: 23.75rem;
    height: 35.4375rem;
  }

  .small-pic {
    width: 20.5rem;
    height: 14.4375rem;
  }

  .content-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 7.5rem;
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    text-align: right;
  }

  .article {
    width: 44.375rem;
    font-size: 1.5rem;
    margin-top: 1.9375rem;
    text-align: right;
  }
`;

export default RightReview;
