import React from 'react';
import styled from 'styled-components';

import rc_logo from '../assets/img_risingcamp_logo_pc.png';

const Header = () => {
  return (
    <HeaderWrap>
        <MainHeader>
            <img className='rc-logo' src={rc_logo}/>
            <div className='header-right notoBold'>
                <div className='one-track' onClick={()=>window.open('https://www.notion.so/softsquared/1-1-992d14e2d0ac4398b3a9972c8550af4f#72724ecbeca9431cadff3d53e4bd6806 ','_blank')}>1:1 TRACK</div>
                <div className='reg-button' onClick={()=>window.open('https://forms.gle/NcFCngiVvRfoM6t6A ','_blank')}>신청하기</div>
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
        width:12.75rem;
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
        cursor: pointer;
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
        cursor: pointer;
    }
`;

export default Header