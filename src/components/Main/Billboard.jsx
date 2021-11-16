import React from 'react';
import styled from 'styled-components';
import { img_header_main } from 'assets';
import { img_header_title } from 'assets';
import { ic_play } from 'assets';
import { ic_info } from 'assets';

const Billboard = () => {
  return (
    <StyledBillboard>
      <StyledMainImg src={img_header_main} />
      <StyledTitleImg src={img_header_title} />
      <StyledBtnWrapper>
        <button>
          <img src={ic_play} />
          <div>재생</div>
        </button>
        <button>
          <img src={ic_info} />
          <div>상세정보</div>
        </button>
      </StyledBtnWrapper>
    </StyledBillboard>
  );
};

export default Billboard;

const StyledBillboard = styled.div`
  box-shadow: inset 0 -33rem 8rem #141414;
  margin-bottom: -27.7rem;
`;

const StyledMainImg = styled.img`
  width: 100%;
  z-index: -1;
  position: relative;
`;

const StyledTitleImg = styled.img`
  position: absolute;
  top: 26.5rem;
  left: 40rem;
  width: 25.9rem;
  height: 9.5rem;
`;

const StyledBtnWrapper = styled.div`
  position: absolute;
  top: 39.2rem;
  left: 40rem;
  display: flex;

  & > button {
    font-weight: 500;
    font-size: 1.5rem;
    border-radius: 2px;
    padding: 1.1rem 2.3rem;
    display: flex;
    align-items: center;

    & > img {
      margin-right: 1rem;
    }
  }

  & > button:first-child {
    margin-right: 0.9rem;
    background: #ffffff;
  }

  & > button:last-child {
    background: #686868e5;
    color: #ffffff;
  }
`;
