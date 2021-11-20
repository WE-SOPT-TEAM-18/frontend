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
  background: linear-gradient(to top, rgba(20, 20, 20, 1) 25%, rgba(0, 0, 0, 0));
  margin-bottom: -27.7rem;
  overflow-x: hidden;

  @media ${({ theme }) => theme.device.mobile} {
    background: linear-gradient(to top, rgba(20, 20, 20, 1) 1%, rgba(0, 0, 0, 0));
  }
`;

const StyledMainImg = styled.img`
  width: 100%;
  z-index: -1;
  position: relative;

  @media ${({ theme }) => theme.device.mobile} {
    height: 37.3rem;
    width: auto;
    overflow-x: hidden;
    transform: translateX(-8.3rem);
  }
`;

const StyledTitleImg = styled.img`
  position: absolute;
  top: 26.5rem;
  left: 40rem;
  width: 25.9rem;
  height: 9.5rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

const StyledBtnWrapper = styled.div`
  position: absolute;
  top: 39.2rem;
  left: 40rem;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    top: 23.5rem;
    left: 2.9rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    left: 1.4rem;
  }

  & > button {
    font-weight: 500;
    font-size: 1.5rem;
    border-radius: 0.2rem;
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
