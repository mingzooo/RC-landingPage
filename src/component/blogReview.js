import React from "react";
import styled from "styled-components";

const BlogReview = ({
  profile,
  name,
  detail1,
  detail2,
  detail3,
  detail4,
  highlight1,
  highlight2,
  highlight3,
  link,
  blog_pic,
}) => {
  return (
    <ContainerWrap>
      <ContentWrap>
        <BlogWrap>
          <img src={profile} className="picture" />
          <DetailWrap>
            <div className="notoBold profile">{name}</div>
            <div className="text-wrap">
              <div className="notoRegular detail">
                {detail1}
                <span className="notoBold" style={{ color: "#FE4A00" }}>
                  {highlight1}
                </span>
                {detail2}
                <span className="notoBold" style={{ color: "#FE4A00" }}>
                  {highlight2}
                </span>
                {detail3}
                <span className="notoBold" style={{ color: "#FE4A00" }}>
                  {highlight3}
                </span>
                {detail4}
              </div>
              <div
                className="notoRegular link"
                onClick={() => window.open(`${link}`, "_blank")}
              >
                자세히 보기
              </div>
            </div>
          </DetailWrap>
        </BlogWrap>
        <img src={blog_pic} className="blog-pic" />
      </ContentWrap>
    </ContainerWrap>
  );
};

const ContainerWrap = styled.div`
  width: 35.75rem;
  background: #ffffff;
  box-shadow: -0.5rem 0.8125rem 0.875rem 0.8125rem rgba(223, 223, 223, 0.2);
  border-radius: 1.25rem;
  margin-bottom: 2.5rem;
  @media (max-width: 75rem) {
    width: 18.75rem;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.9375rem 2.125rem 3.4794rem 2.125rem;
  align-items: center;
  @media (max-width: 75rem) {
      padding: 1.5rem;
    }

  .blog-pic {
    width: 31.2381rem;
    height: 20.8869rem;
    border-radius: 1.125rem;
    margin-top: 2.5rem;
    @media (max-width: 75rem) {
      width: 13.9375rem;
      height: 9.3125rem;
    }
  }
`;

const BlogWrap = styled.div`
  display: flex;
  flex-direction: row;

  .picture {
    width: 5.4375rem;
    height: 5.6131rem;
    border-radius: 50%;
    @media (max-width: 75rem) {
      width: 2.3494rem;
      height: 2.3494rem;
    }
  }
`;

const DetailWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
  font-size: 1.5rem;
  @media (max-width: 75rem) {
    font-size: 0.875rem;
  }

  .text-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20.625rem;
    @media (max-width: 75rem) {
      height: 12.5rem;
    }
  }

  .profile {
    line-height: 2.4675rem;
    margin-bottom: 0.75rem;
  }

  .detail {
  }

  .link {
    color: #808080;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export default BlogReview;
