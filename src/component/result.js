import React from 'react'
import styled from 'styled-components'

const Result = () => {
  return (
    <Page>
        <ContentWrap>
            <div className='title-wrap'>
                <div className='hansonBold title-text'>
                    RISING<br/>CAMP<br/>RESULT.
                </div>
                <div>
                    <div className='notoMedium'>수강생분들이 얻어간 것</div>
                    <div className='notoBold'>라이징캠프를 먼저 수강한 분들,<br/> 이런결과를 얻어갔습니다.</div>
                </div>
            </div>
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
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    
    .title-wrap{
        display: flex;
        flex-direction: row;
        margin-top: 11rem;
    }

    .title-text{
        font-size: 6rem;
        color: #ffffff;
        line-height: 6rem;
    }
`;

export default Result