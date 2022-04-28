import React from 'react'
import Class from '../../component/class'
import Curriculum from '../../component/curriculum'
import Differentiation from '../../component/differentiation'
import Faq from '../../component/faq'
import Footer from '../../component/footer'
import FriendRecommend from '../../component/friendRecommend'
import Header from '../../component/header'
import MainImg from '../../component/mainImg'
import Mentor from '../../component/mentor'
import RcInfo from '../../component/rcInfo'
import Recommendation from '../../component/recommendation'
import Result from '../../component/result'
import Reviews from '../../component/reviews'
import Study from '../../component/study'
import Tuition from '../../component/tuition'
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
        <Differentiation/>
        <Recommendation/>
        <Mentor/>
        <Curriculum/>
        <Tuition/>
        <Faq/>
        <Footer/>
    </PageWrap>
  )
}

export default Main