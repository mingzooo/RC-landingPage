import React from 'react'
import styled from 'styled-components'

const Result = () => {
  return (
    <Page>
        <ContentWrap>
            <TitleWrap>
                <div className='hansonBold title-text'>
                    RISING<br/>CAMP<br/>RESULT.
                </div>
                <div className='title-right'>
                    <div className='notoMedium' style={{fontSize:"1.5rem", marginBottom:"0.8125rem"}}>수강생분들이 얻어간 것</div>
                    <div className='notoBold' style={{fontSize:"2.25rem"}}>라이징캠프를 먼저 수강한 분들,<br/> <span style={{color:"#CAF200"}}>이런결과</span>를 얻어갔습니다.</div>
                </div>
            </TitleWrap>
        </ContentWrap>
    </Page>
  )
}

const Page = styled.div`
    background-color: #FE4A00;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrap = styled.div`
    width: 73.75rem;
    display: flex;
    flex-direction: column;
`;

const TitleWrap = styled.div`
    display: flex;
    flex-direction: row;
    margin: 11rem 0 7.875rem 0;
    position: relative;

    .title-text{
        font-size: 6rem;
        color: #ffffff;
        line-height: 6rem;
    }

    .title-right{
        position: absolute;
        bottom: 0;
        right: 10.25rem;
        display: flex;
        flex-direction: column;
        color: #ffffff;
    }
`;


export default Result