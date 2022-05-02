import React from 'react'
import styled from 'styled-components'

import main from '../assets/img_banner.png';

const MainImg = () => {
  return (
    <ImgWrap>
      <img src={main} style={{width:"100%", height:"100%", objectFit:'cover'}}/>
      <RegFloatingButton className='notoBold'>4기 신청하기</RegFloatingButton>
    </ImgWrap>
  )
}

const ImgWrap = styled.div`
    height: 61.125rem;
    display: flex;
    justify-content: center;
    position: relative;
`;

const RegFloatingButton = styled.div`
  width: 17.9169rem;
  height: 5.375rem;
  background-color: #000000;
  color: #ffffff;
  border-radius: 4.6875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 9999;
  cursor: pointer;
  position: absolute;
  bottom: 5.625rem;
  position: fixed;
`;

export default MainImg