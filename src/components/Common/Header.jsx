import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { btn_bell, btn_more, btn_search, ic_dropdown, img_profile, Netflix_logo } from 'assets';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollListener = () => {
    setIsScrolled(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <StyledHeader className={isScrolled ? 'scrolled' : undefined}>
      <StyledLeft>
        <Link to="/">
          <img src={Netflix_logo} />
        </Link>
        <ul>
          <Link to="/">
            <li>홈</li>
          </Link>
          <li>TV 프로그램</li>
          <li>영화</li>
          <li>NEW! 요즘 대세 콘텐츠</li>
          <Link to="/sub">
            <li>내가 찜한 콘텐츠</li>
          </Link>
        </ul>
        <StyledMenu>
          <div>메뉴</div>
          <img src={ic_dropdown} />
        </StyledMenu>
      </StyledLeft>
      <StyledRight>
        <img src={btn_search} />
        <img src={btn_bell} />
        <img src={img_profile} />
        <img src={btn_more} />
      </StyledRight>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  z-index: 999;
  width: calc(100% - 72rem);
  height: 5.2rem;
  padding-left: 4.7rem;
  padding-right: 3.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0));

  &.scrolled {
    background: rgba(20, 20, 20, 1);
  }
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  & > ul {
    display: flex;
    margin-left: 3.4rem;

    @media ${({ theme }) => theme.device.tablet} {
      margin-left: 0;
    }

    & > li,
    & > a {
      font-size: 1.2rem;
      margin-right: 1.5rem;
      cursor: pointer;

      @media ${({ theme }) => theme.device.tablet} {
        display: none;
      }
    }

    & > a {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

const StyledMenu = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.tablet} {
    display: flex;
    align-items: center;
    margin-left: 2.7rem;

    & > div {
      margin-right: 0.3rem;
      font-weight: 700;
      font-size: 1.2rem;
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;

  & > img:first-child {
    margin-right: 0.2rem;
  }

  & > img:nth-child(2) {
    margin-right: 1.1rem;
  }

  & > img:last-child {
    @media ${({ theme }) => theme.device.tablet} {
      display: none;
    }
  }
`;
