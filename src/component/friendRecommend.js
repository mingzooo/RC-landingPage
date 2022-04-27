import React from "react";
import styled from "styled-components";
import BlogReview from "./blogReview";

import blog_pic from '../assets/blog-pic.png';

const FriendRecommend = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            FRIEND
            <br />
            RECOMMEN
            <br />
            -DATION.
          </div>
          <div className="notoMedium middle-text">수강생 리얼 후기</div>
          <div className="notoBold bottom-text">
            수강생 중 25%는 <span style={{ color: "#CAF200" }}>지인추천</span>
            으로
            <br />
            저희를 찾아와 주십니다.
          </div>
        </Title>
        <div className="reviews">
          <BlogReview
            name="단테 (라이징 캠프 2기 iOS)"
            detail="대학교 2학년 2학기때 휴학을 했었는데, 친구가 추천해줘서 라이징 캠프를 알았어요. 라이징 캠프를 하기전까지는 서버와 협업, 커뮤니케이션 하는 방법을 몰랐지만 라이징 캠프를 통해 실제 협업실력을 올릴 수 있었습니다."
            blog_pic={blog_pic}
          />
          <BlogReview
            name="단테 (라이징 캠프 2기 iOS)"
            detail="대학교 2학년 2학기때 휴학을 했었는데, 친구가 추천해줘서 라이징 캠프를 알았어요. 라이징 캠프를 하기전까지는 서버와 협업, 커뮤니케이션 하는 방법을 몰랐지만 라이징 캠프를 통해 실제 협업실력을 올릴 수 있었습니다."
            blog_pic={blog_pic}
          />
          <BlogReview
            name="단테 (라이징 캠프 2기 iOS)"
            detail="대학교 2학년 2학기때 휴학을 했었는데, 친구가 추천해줘서 라이징 캠프를 알았어요. 라이징 캠프를 하기전까지는 서버와 협업, 커뮤니케이션 하는 방법을 몰랐지만 라이징 캠프를 통해 실제 협업실력을 올릴 수 있었습니다."
            blog_pic={blog_pic}
          />
          <BlogReview
            name="단테 (라이징 캠프 2기 iOS)"
            detail="대학교 2학년 2학기때 휴학을 했었는데, 친구가 추천해줘서 라이징 캠프를 알았어요. 라이징 캠프를 하기전까지는 서버와 협업, 커뮤니케이션 하는 방법을 몰랐지만 라이징 캠프를 통해 실제 협업실력을 올릴 수 있었습니다."
            blog_pic={blog_pic}
          />
        </div>
      </ContentWrap>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrap = styled.div`
  width: 73.75rem;
  display: flex;
  flex-direction: column;

  .reviews{
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 9rem;
    line-height: 9rem;
    text-align: center;
  }

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin: 2.5rem 0 0.8125rem 0;
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: center;
    margin-bottom: 2.5rem;
  }
`;

export default FriendRecommend;
