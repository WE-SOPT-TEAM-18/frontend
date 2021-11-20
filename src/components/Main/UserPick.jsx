import React from 'react';
import styled from 'styled-components';
import HeartContent from './HeartContent';
import WatchingContent from './WatchingContent';

const UserPick = () => {
  return (
    <StyledUserPick>
      <WatchingContent />
      <HeartContent />
    </StyledUserPick>
  );
};

export default UserPick;

const StyledUserPick = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  top: 50.8rem;

  @media ${({ theme }) => theme.device.tablet} {
    position: relative;
    top: 8.5rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: 23.5rem;
  }
`;
