import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { client } from 'libs/api';

const LikeThumbnail = ({ data }) => {
  const [likeList, setLikeList] = useState([]);
  const [likeCount, setLikeCount] = useState(0);

  const getLikeList = async () => {
    const { data } = await client.get('/like');
    const filteredItems = data.data.filter((item, idx) => {
      if (idx < 4) return item;
    });
    setLikeList(filteredItems);
    setLikeCount(data.data.length);
  };

  useEffect(() => {
    getLikeList();
  }, [likeList, likeCount]);

  return (
    <LikeThumb>
      <ImageContainer>
        {likeList.map((movie, i) => (
          <img key={i} src={movie.imageColumn} alt="card_image" />
        ))}
      </ImageContainer>
      <LikeTitle>
        <div>{data.title}</div>
      </LikeTitle>
      <LikeNum>
        <div>{likeCount}</div>
      </LikeNum>
    </LikeThumb>
  );
};

export default LikeThumbnail;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 9.5rem);
  grid-gap: 0.4rem;
`;

const LikeThumb = styled.div`
  margin: 1rem;
`;

const LikeNum = styled.div`
  margin-top: 0.6rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const LikeTitle = styled.div`
  font-weight: 600;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
