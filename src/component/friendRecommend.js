import React from "react";
import styled from "styled-components";
import BlogReview from "./blogReview";

import blog_pic from '../assets/blog-pic.png';
import profile_a from '../assets/profile.png';
import profile_b from '../assets/img_risingcamp_profile_b.png';
import profile_c from '../assets/img_risingcamp_profile_c.png';
import profile_d from '../assets/img_risingcamp_profile_d.png';
import blog_b from '../assets/img_risingcamp_blog_b.png';
import blog_c from '../assets/img_risingcamp_blog_c.png';
import blog_d from '../assets/img_risingcamp_blog_d.png';

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
            profile={profile_a}
            name="단테 (라이징 캠프 2기 iOS)"
            detail1="대학교 2학년 2학기때 휴학을 했었는데, 친구가 추천해줘서 라이징 캠프를 알았어요. 라이징 캠프를 하기전까지는&nbsp;"
            highlight1 = "서버와 협업, 커뮤니케이션 하는 방법"
            detail2="을 몰랐지만 라이징 캠프를 통해&nbsp;"
            highlight2 = "실제 협업실력"
            detail3 = "을 올릴 수 있었습니다."
            blog_pic={blog_pic}
            link={'https://velog.io/@rlawnstn01023/RC라이징캠프2기-마무리'}
          />
          <BlogReview
            profile={profile_b}
            name="디모 (라이징 캠프 WEB 리더 트랙)"
            detail1="평소에 알고있던 컴공선배 유튜브를 통해 지원하게 됐어요. 라캠에서 제일 좋았던 점은 멘토분들의&nbsp;"
            highlight1 = "실시간 질문 시스템"
            detail2="과"
            highlight2 = "&nbsp;매주 진행되는 과제 피드백"
            detail3 = "이었던 것 같아요! 저처럼&nbsp;"
            highlight3 ="학교 밖에서 개발"
            detail4 = "을 통해 뭔가를 만들고 싶다거나, 정체기를 느끼는 분들한텐 꼭 추천하고 싶어요. ㅎㅎ"
            blog_pic={blog_b}
            link={'https://minjoo-space.tistory.com/79'}
          />
          <BlogReview
            profile={profile_c}
            name="블란코 (라이징 캠프 1기 AOS)"
            detail1="원래는 컴공과를 졸업 후, 다른쪽으로 취업을 원했지만, 원하는 곳으로 취업이 되지 않았습니다. 그때 지인을 통해 라이징 캠프를 알게됐고, 현재는 수료후에 수료생들과 함께하는&nbsp;"
            highlight1 = "알고리즘 스터디"
            detail2="를 진행중입니다. 라이징 캠프의 가장 좋은 점은&nbsp;"
            highlight2 = "수료 후에도 커리어를 관리"
            detail3 = "해준다는 점인것 같습니다."
            blog_pic={blog_c}
            link={'https://jaehyeok.tistory.com/8'}
          />
          <BlogReview
            profile={profile_d}
            name="블란코 (라이징 캠프 1기 AOS)"
            detail1="저는 컴공선배 유튜브를 초창기부터 봐왔던 구독자에요. 처음에는 신청하는데 두려웠지만, 한번 도전해보자! 마음으로 신청했어요.라이징 캠프는&nbsp;"
            highlight1 = "하부르타 방식, 즉 자기주도학습이 메인"
            detail2="이에요. 그래서&nbsp;"
            highlight2 = "검색하는 법을 체화"
            detail3 = "시키면서&nbsp;"
            highlight3 ="모르는 것에 대한 두려움을 없애는&nbsp;"
            detail4 = "데 굉장히 좋은 커리큘럼이라고 생각해요!"
            blog_pic={blog_d}
            link={'https://velog.io/@alskek27/라이징-캠프-3기-그리고-수료'}
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
      justify-content: space-between;
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
