import React from "react";
import styled from "styled-components";
import LeftReview from "./leftReview";
import RightReview from "./rightReview";

import wmf_a from "../assets/img_wmf_a.png";
import wmf_b from "../assets/img_wmf_b.png";
import wmf_c from "../assets/img_wmf_c.png";
import line_a from "../assets/img_line_a.png";
import line_b from "../assets/img_line_b.png";
import line_c from "../assets/img_line_c.png";
import modu_a from "../assets/img_modu_a.png";
import modu_b from "../assets/img_modu_b.png";
import modu_c from "../assets/img_modu_c.png";

const Reviews = () => {
  return (
    <Page>
      <ContentWrap>
        <Title>
          <div className="title-text">
            THE BEGINNING
            <br />
            IS THE SAME.
          </div>
          <div className="notoMedium middle-text">성공한 선배들</div>
          <div className="notoBold bottom-text">
            여러분과 비슷한 수준에서 출발한 라이징캠프 선배들.
            <br />
            지금 이렇게 성장하셨습니다.
          </div>
        </Title>
        <LeftReview
          name={"위메프"}
          img_a={wmf_a}
          img_b={wmf_b}
          img_c={wmf_c}
          title="라이징캠프를 통해 CMC를 하게됐고, 데모데이를 통해 취업하게 됐어요!"
          detail="대학교 3학년 겨울방학부터 라이징 프로그래머 과정에 함께했습니다. 서버 쪽에 대해서는 거의 모른다고 해도 무방했는데, 막혔을 때 밤늦게까지 도와주는 튜터님과 좋은 팀원분들, 개발 교육부터 취업 연계까지 제 대학 생활에서 단연 최고로 뽑을 수 있는 프로그램이었습니다!"
          who="- 라이징 캠프 서버 수료생 캐시"
        />
        <RightReview
          name={"LINE"}
          img_a={line_a}
          img_b={line_b}
          img_c={line_c}
          title="수료 후에 외주로 실력쌓다보니 취업도 자연스럽게 했어요 :)"
          detail={`처음엔 저도 거의 개발지식이 굉장히 부족했었어요. \“\아 나도 어디가서 배워봐야겠다.\”\ 라는 생각에 라이징 캠프를 찾게 됐어요. 2달에 80만원이라는게 조금 부담스러웠지만, 나중에 라이징 캠프에서 외주연계를 해줘서 좋았어요. :) 개발지식도 쌓으면서 외주를 통한 실무경험까지 해보고 싶으신 분들에게 추천해요!`}
          who="- 라이징 캠프 서버 수료생 웨인"
        />
        <LeftReview
          name={"MODU 창업"}
          img_a={modu_a}
          img_b={modu_b}
          img_c={modu_c}
          title="라이징 캠프를 거쳐서 지금은 스타트업 CEO가 됐어요."
          detail="처음에는 대학교 동기들과 함께 들었는데, 수료후에 CMC를 하면서 다른 디자이너, 개발자 팀원들을 만나게 됐어요. 그 인연이 이어져서 지금까지 모두라는 앱을 지속적으로 발전시키고 있어요. 라이징 캠프는 단순히 취업만을 목표로 하는게 아닌, 개개인의 로드맵을 알려주고 원하는 목표를 이룰 수 있도록 도와주는 점이 좋다고 생각해요."
        />
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
  @media (max-width: 75rem) {
    width: 22.5rem;
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 5.375rem;

  @media (max-width: 75rem) {
    margin-top: 0;
  }

  .title-text {
    font-family: "Hanson";
    color: #caf200;
    font-size: 6rem;
    line-height: 6rem;
    text-align: left;
    @media (max-width: 75rem) {
      font-size: 1.875rem;
      line-height: 1.875rem;
    }
  }

  .middle-text {
    font-size: 1.5rem;
    color: #4f4f4f;
    margin: 1.5rem 0 0.8125rem 0;
    @media (max-width: 75rem) {
      font-size: 0.75rem;
      margin: 0.8125rem 0 0.375rem 0;
    }
  }

  .bottom-text {
    font-size: 2.25rem;
    line-height: 3.6rem;
    text-align: left;
    margin-bottom: 2.5rem;
    @media (max-width: 75rem) {
      font-size: 0.875rem;
      line-height: 1.375rem;
    }
  }
`;

export default Reviews;
