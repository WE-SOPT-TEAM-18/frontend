import React from 'react';
import LikeData from './LikeData';
import LikeThumbnail from './LikeThumbnail';
import styled from 'styled-components';

const LikeCards = () => {
  return (
    <LikeView>
      {LikeData.map((datum, idx) => (
        <LikeThumbnail datum={datum} key={`thumb-${idx}`} />
      ))}
    </LikeView>
  );
};
export default LikeCards;

const LikeView = styled.div`
  width: 100%;
  padding: 1rem;
  display: inline-flex;
  flex-wrap: wrap;
`;
