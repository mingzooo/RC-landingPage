import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrap>
        <MainHeader>
            <div className='rc-logo'>라이징캠프 로고</div>
            <div className='header-right notoBold'>
                <div className='one-track'>1:1 TRACK</div>
                <div className='reg-button'>신청하기</div>
            </div>
        </MainHeader>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.div`
    height: 6.25rem;
    position: relative;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainHeader = styled.div`
    width: 67.5rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .rc-logo{
        width:8.375rem;
        height: 2.25rem;
        color:white;
        line-height: 2.25rem;
    }

    .header-right{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .one-track{
        font-size: 1.25rem;
        color:#ffffff;
        margin-right: 2.4375rem;
    }

    .reg-button{
        width: 9.125rem;
        height: 3.75rem;
        background-color: #FE4A00;
        border-radius: 4rem;
        color: #ffffff;
        font-size: 1.25rem;
        text-align: center;
        line-height: 3.75rem;
    }
`;

export default Header