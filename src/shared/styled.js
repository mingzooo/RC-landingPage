import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    //폰트 thin:200, light:300, regular:400, bold:500
    
    //Spoqa Han Sans
    @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 200;
    src: url('../src/fonts/SpoqaHanSans/SpoqaHanSansThin.ttf'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansThin.woff'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansThin.woff2');
    }
    @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    src: url('../src/fonts/SpoqaHanSans/SpoqaHanSansLight.ttf'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansLight.woff'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansLight.woff2');
    }
    @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    src: url('../src/fonts/SpoqaHanSans/SpoqaHanSansRegular.ttf'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2');
    }
    @font-face {
    font-family: 'Spoqa Han Sans';
    font-weight: 600;
    src: url('../src/fonts/SpoqaHanSans/SpoqaHanSansBold.ttf'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansBold.woff'),
    url('../src/fonts/SpoqaHanSans/SpoqaHanSansBold.woff2');
    }

    //Noto Sans KR
    @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 200;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Thin.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Light.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Regular.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Medium.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Medium.woff2');
    }
    @font-face {
    font-family: 'Noto Sans KR';
    font-weight: 600;
    src: url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.otf'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.woff'),
    url('../src/fonts/NotoSansKR-WEB/NotoSansKR-Bold.woff2');
    }
    @font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    @font-face {
        font-family: 'Hanson';
        font-weight: 700;
        src: url('../src/fonts/hanson-bold/Hanson-Bold.otf'),
        url('../src/fonts/hanson-bold/Hanson-Bold.ttf');
    }


    //font class

    .spoqaThin {
    font-family: 'Spoqa Han Sans';
    font-weight: 200;
    }
    .spoqaLight {
    font-family: 'Spoqa Han Sans';
    font-weight: 300;
    }
    .spoqaRegular {
    font-family: 'Spoqa Han Sans';
    font-weight: 400;
    }
    .spoqaBold {
    font-family: 'Spoqa Han Sans';
    font-weight: 700;
    }


    .notoThin {
    font-family: 'Noto Sans KR';
    font-weight: 200;
    }
    .notoLight {
    font-family: 'Noto Sans KR';
    font-weight: 300;
    }
    .notoRegular {
    font-family: 'Noto Sans KR';
    font-weight: 400;
    }
    .notoMedium {
    font-family: 'Noto Sans KR';
    font-weight: 500;
    }
    .notoBold {
    font-family: 'Noto Sans KR';
    font-weight: 700;
    }

    .gmarketBold{
        font-family: 'GmarketSansBold';
        font-weight: 700;
    }

    .hansonBold{
        font-family: 'Hanson';
        font-weight: 700;
    }
`;

export const PageWrap = styled.div`
  position: absolute;
  max-width: 120rem;
  top: 0;
  left: 0;
  right: 0;
`;
