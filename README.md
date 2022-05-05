# RisingCamp Landing Page

```폴더구조```

- public
    - index.html
- src
    - assets : 서비스에 필요한 이미지 파일이 있는 곳입니다.
    - components : 페이지를 구성하는 요소들을 분리해서 담아놓은 곳입니다.
        - Header : 헤더 + api 연동
        - MainImg : 메인 이미지 컴포넌트 + 플롯팅버튼 + api 연동
        - RcInfo : 상단 라이징캠프 소개
        - Result : risingcamp result
        - FriendRecommend : 지인추천 블로그 후기 
            - blogReview : 블로그 후기 컴포넌트
        - Reviews : 취업 및 창업 후기글
            - leftReview : 왼쪽 후기 컴포넌트
            - rightReview : 오른쪽 후기 컴포넌트
        - Class : 라이징캠프 비교 
        - RisingTest : 라이징테스트 설명 
        - Study : 라이징캠프 수업방법 
        - Differentiation : 라이징캠프 차별점 
        - Recommendation : 라이징캠프 추천사 
        - Mentor : 라이징캠프 멘토 소개 
            - mentorComponent : 멘토 소개 컴포넌트
        - Curriculum : 라이징캠프 커리뮬럼 
            - track : 트랙소개 컴포넌트
            - curriculumDetail : 트랙에 따른 커리큘럼 소개
            - curriculum.json : 트랙에 따른 커리큘럼 더미데이터 파일
        - Tuition : 라이징캠프 수강료 
        - Faq : 자주하는 질문 
        - Footer : 푸터 
    - fonts : 서비스에서 사용되는 font파일들이 있는 곳입니다.
    - pages : 컴포넌트로 분리되어있는 파일을 한 파일로 묶어놓은 페이지들이 있는 파일입니다.
    - routes : 파일들의 루트를 정리해놓은 곳입니다.
    - shared : 스타일과 관련된 파일/기능이 있는 곳입니다. (Ex. 글로벌스타일 및 페이지형식 등)
    - App.js : index.js 다음으로 실행되는 파일입니다.
    - index.js : 최상위 파일입니다.  
  
  
  
```파일 실행방법```    
  
npm install   
npm run start
