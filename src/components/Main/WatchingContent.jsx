import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const WatchingContent = () => {
  return (
    <StyledWatchingContent>
      <Content />
      <StyledProgressBar>
        <StyledProgressInner />
      </StyledProgressBar>
    </StyledWatchingContent>
  );
};

export default WatchingContent;

const StyledWatchingContent = styled.div`
  display: inline-block;
`;

const StyledProgressBar = styled.div`
  width: 11.4rem;
  height: 0.2rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  position: relative;
  background-color: rgba(90, 91, 91, 1);
`;

const StyledProgressInner = styled.div`
  width: 50%;
  height: 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(211, 47, 39, 1);
`;
