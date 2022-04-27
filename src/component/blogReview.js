import React from 'react';
import styled from 'styled-components';

import picture from '../assets/profile.png';


const BlogReview = ({name, detail, link, blog_pic}) => {
  return (
    <ContainerWrap>
        <ContentWrap>
            <BlogWrap>
                <img src={picture} className="picture"/>
                <DetailWrap>
                    <div className='notoBold profile'>
                        {name}
                    </div>
                    <div className='notoRegular detail'>
                    {detail}
                    </div>
                    <div className='notoRegular link' onClick={()=>window.open('','_blank')}>
                        자세히 보기
                    </div>
                </DetailWrap>
            </BlogWrap>
            <img src={blog_pic} className="blog-pic"/>
        </ContentWrap>
    </ContainerWrap>
  )
}

const ContainerWrap = styled.div`
    width: 33.125rem;
    background: #FFFFFF;
    box-shadow: -0.5rem 0.8125rem 0.875rem 0.8125rem rgba(223, 223, 223, 0.2);
    border-radius: 1.25rem;
    margin-bottom: 2.5rem;
`;

const ContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.9375rem 2.125rem 3.4794rem 2.125rem;
    align-items: center;

    .blog-pic{
        width: 31.2381rem;
        height: 20.8869rem;
        border-radius: 1.125rem;
        margin-top: 2.1563rem;
    }
`;

const BlogWrap = styled.div`
    display: flex;
    flex-direction: row;
    
    .picture{
        width: 5.4375rem;
        height: 5.6131rem;
        border-radius: 50%;
    }
`;

const DetailWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.75rem;

    .profile{
        font-size: 1.5rem;
        line-height: 2.4675rem;
        margin-bottom: 0.75rem;
    }

    .detail{
        font-size: 1.5rem;
        line-height: 2.4675rem;
    }

    .link{
        font-size: 1.5rem;
        color: #808080;
        text-decoration-line: underline;
        margin-top: 2.4375rem;
        cursor: pointer;
    }
`;

export default BlogReview