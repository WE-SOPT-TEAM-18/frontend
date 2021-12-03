import React from 'react';
import LikeData from './LikeData';
import LikeThumbnail from './LikeThumbnail';
import styled from 'styled-components';

const LikeCards = () => {
  return (
    <LikeView>
      {LikeData.map((data, idx) => (
        <LikeThumbnail data={data} key={`thumb-${idx}`} />
      ))}
    </LikeView>
  );
};
export default LikeCards;

const LikeView = styled.div`
  width: 100%;
  padding: 3rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 1.4rem;
  }
  display: inline-flex;
  flex-wrap: wrap;
`;
