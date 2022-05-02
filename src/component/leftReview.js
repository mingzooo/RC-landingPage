import React from "react";
import styled from "styled-components";

const LeftReview = ({name, img_a, img_b, img_c, title, detail, who}) => {
  return (
    <Wrap>
      <div className="name">{name}</div>
      <ContentWrap>
        <img src={img_a} className="big-pic" />
        <div className="content-wrap">
          <div style={{ display:'flex', flexDirection:"row", justifyContent:'space-between'}}>
            <img src={img_b} className="small-pic" />
            <img src={img_c} className="small-pic" />
          </div>
          <div className="notoBold title-text">
            {title}
          </div>
          <div className="notoRegular article">
            {detail}
          </div>
          <div className="notoRegular article" style={{color:'#7D7D7D', marginTop:'0'}}>
            {who}
          </div>
        </div>
      </ContentWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-top: 5.5625rem;
  .name {
    font-family: "Hanson";
    font-style: normal;
    font-weight: 700;
    font-size: 6rem;
    line-height: 6rem;
    -webkit-text-stroke: 0.1437rem #caf200;
    color: transparent;
    margin-bottom: -2.5rem;
    margin-left: 2.8125rem;
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
    margin-left: 5rem;
    width: 42.5625rem;
  }

  .title-text {
    font-size: 3rem;
    line-height: 4.29rem;
    margin-top: 2rem;
    width: 39.5625rem;
  }

  .article {
    width: 37.4375rem;
    font-size: 1.5rem;
    margin-top: 1.3125rem;
  }
`;

export default LeftReview;
