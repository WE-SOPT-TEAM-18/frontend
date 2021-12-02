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

const LikeHeader = styled.title`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const LikeTitle = styled.h1`
  font-size: 2rem;
  margin: auto 0;
  margin-left: 2.4rem;
  font-weight: 500;
  color: white;
`;

const LikeAdd = styled.div`
  display: flex;
  font-size: 1.3rem;
  color: white;
  margin: auto 0;
  margin-left: 1.5rem;
  font-weight: 400;

  & > div {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }
`;
