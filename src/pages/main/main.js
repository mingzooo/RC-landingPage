import React from 'react'
import Header from '../../component/header'
import MainImg from '../../component/mainImg'
import RcInfo from '../../component/rcInfo'
import Result from '../../component/result'
import { PageWrap } from '../../shared/styled'

const Main = () => {
  return (
    <PageWrap>
        <Header/>
        <MainImg/>
        <RcInfo/>
        <Result/>
    </PageWrap>
  )
}

export default Main