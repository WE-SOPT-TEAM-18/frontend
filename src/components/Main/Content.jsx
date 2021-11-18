import React, { useState } from 'react';
import styled from 'styled-components';
import { heart_filled, heart_white, RectangleGray_width } from 'assets';

const Content = () => {
  const [like, setLike] = useState(false);
  const handleHeartClick = () => {
    setLike(!like);
  };
  return (
    <StyledContent>
      <img src={RectangleGray_width} />
      <button onClick={handleHeartClick}>
        <img src={like ? heart_filled : heart_white} />
      </button>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 0.2rem;
  & > button {
    background: transparent;
    padding: 0;
    position: absolute;
    right: 0rem;
  }
`;
