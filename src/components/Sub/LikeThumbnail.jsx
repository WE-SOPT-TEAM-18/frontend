import React from 'react';
import styled from 'styled-components';

const LikeThumbnail = ({ datum }) => {
  return (
    <LikeThumb>
      <ImageContainer>
        {datum.imageNumber.map((d, i) => (
          <img key={i} src={d.image} alt="card_image" />
        ))}
      </ImageContainer>
      <LikeTitle>
        <div>{datum.title}</div>
      </LikeTitle>
      <LikeNum>
        <div>{datum.count}</div>
      </LikeNum>
    </LikeThumb>
  );
};

export default LikeThumbnail;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 9.5rem);
  grid-gap: 0.3rem;
`;
const LikeThumb = styled.div`
  margin: 10px;
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
