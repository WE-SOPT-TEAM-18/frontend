import React from 'react';
// import RectangleGray_like from 'assets/images/RectangleGray_like.png';
import styled from 'styled-components';
// import { ic_plus } from 'assets/index';

const LikeFiles = () => {
  console.log('hi');
  return (
    <>
      <LikeHeader>
        <LikeTitle>
          <h1 id="like_header">내가 찜한 컨텐츠</h1>
        </LikeTitle>
        <LikeAdd>
          <div id="like_add">+ 폴더생성</div>
        </LikeAdd>
      </LikeHeader>
      <LikeThumb>
        <LikeImage />
        <LikeImage />
        <LikeImage />
        <LikeImage />
      </LikeThumb>
      <div>
        <LikeHeadline>
          <div id="filename">#시험끝나면 볼 영화</div>
        </LikeHeadline>
        <LikeNum>
          <div id="num">12개</div>
        </LikeNum>
      </div>
    </>
  );
};
export default LikeFiles;

const LikeHeader = styled.h1`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const LikeTitle = styled.h1`
  font-size: 2rem;
  margin: auto 0;
  margin-left: 10px;
  font-weight: 500;
  color: white;
`;

const LikeAdd = styled.div`
  font-size: 1.2rem;
  color: white;
  margin: auto 0;
  margin-left: 15px;
  font-weight: 400;
`;
const LikeThumb = styled.div`
  width: 212px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4px;
`;
const LikeImage = styled.div`
  width: 94px;
  height: 132px;
  background-color: gray;
  border-radius: 3px;
`;

const LikeHeadline = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
  color: white;
`;
const LikeNum = styled.div`
  font-size: 12px;
  padding-left: 10px;
  color: gray;
  margin-top: 0;
`;
