import React from 'react';
import styled from 'styled-components';
//import LikeData from 'LikeData';
import LikeCards from './LikeCards';

const LikeFiles = () => {
  return (
    <LikeBody>
      <LikeHeader>
        <LikeTitle>
          <h1 id="like_header">내가 찜한 컨텐츠</h1>
        </LikeTitle>
        <LikeAdd>
          <div id="like_add">+ 폴더생성</div>
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
  margin-top: 80px;
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
  font-size: 1.3rem;
  color: white;
  margin: auto 0;
  margin-left: 15px;
  font-weight: 400;
`;
