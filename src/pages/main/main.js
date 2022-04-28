import React from 'react'
import Class from '../../component/class'
import FriendRecommend from '../../component/friendRecommend'
import Header from '../../component/header'
import MainImg from '../../component/mainImg'
import RcInfo from '../../component/rcInfo'
import Result from '../../component/result'
import Reviews from '../../component/reviews'
import Study from '../../component/study'
import { PageWrap } from '../../shared/styled'

const Main = () => {
  return (
    <PageWrap>
        <Header/>
        <MainImg/>
        <RcInfo/>
        <Result/>
        <FriendRecommend/>
        <Reviews/>
        <Class/>
        <Study/>
    </PageWrap>
  )
}

export default Main