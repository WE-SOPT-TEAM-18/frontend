import React from 'react';
import styled from 'styled-components';
import LikeCards from './LikeCards';
import { ic_plus } from 'assets/index';

const LikeFiles = () => {
  return (
    <LikeBody>
      <LikeHeader>
        <LikeTitle>내가 찜한 콘텐츠</LikeTitle>
        <LikeAdd>
          <img src={ic_plus}></img>
          <div>폴더 생성</div>
        </LikeAdd>
      </LikeHeader>
      <LikeCards />
    </LikeBody>
  );
};
export default LikeFiles;

const LikeBody = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
`;

const LikeHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LikeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  color: white;
  margin-left: 4.1rem;
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 3rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 1.4rem;
  }
`;

const LikeAdd = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: white;
  margin-left: 1.5rem;
  font-weight: 400;

  & > div {
    margin-left: 0.5rem;
  }
`;
