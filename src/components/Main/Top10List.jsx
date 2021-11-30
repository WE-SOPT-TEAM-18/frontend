import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { arrow_left_gray, arrow_right_gray, heart_filled, heart_white } from 'assets/index';
import { rank10Category } from 'libs/rank.api';
import { client } from 'libs/api';

const Top10List = ({ setFlag }) => {
  const totalSlide = 5;
  const [scrollState, setScrollState] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!scrollState);
  const slideRef = useRef(null);
  const [list, setList] = useState([]);

  const rankDataList = async () => {
    const rank10 = await rank10Category();
    setList(rank10);
  };

  useEffect(() => {
    rankDataList();
  }, []);

  const prevButton = () => {
    if (scrollState === 0) {
      setScrollState(totalSlide);
    } else {
      setScrollState(scrollState - 1);
    }
  };

  const nextButton = () => {
    if (scrollState >= totalSlide) {
      setScrollState(0);
    } else {
      setScrollState(scrollState + 1);
    }
  };

  useEffect(() => {
    if (slideRef) {
      document.getElementById('list').style.transition = 'all 1s ease-in-out';
      document.getElementById('list').style.transform = `translateX(-${scrollState * 20}%)`;
    }
  }, [scrollState]);
  useEffect(() => {
    if ((localVisible && scrollState) || (localVisible && !scrollState)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }
    setLocalVisible(!scrollState);
  }, [localVisible, scrollState]);
  return (
    <Top10Wrapper>
      <div className="recommend">
        <div className="recommend__contents">오늘 한국의 TOP 10 콘텐츠</div>
        {(!localVisible || animation) && (
          <img
            className="recommend__arrowLeft"
            src={arrow_left_gray}
            onClick={() => {
              prevButton();
            }}
          />
        )}
        <img
          className="recommend__arrowRight"
          src={arrow_right_gray}
          onClick={() => {
            nextButton();
          }}
        />
        <div className="recommend__detail" id="list">
          {list?.map((movie, i) => {
            return (
              <Top10Movies
                setFlag={setFlag}
                top10Image={list[i].image}
                top10RankImage={list[i].rankImage}
                top10Likes={list[i].isLiked}
                key={list[i].rank}
                post={movie}
              />
            );
          })}
        </div>
      </div>
    </Top10Wrapper>
  );
};

function Top10Movies(props) {
  const handleHeartClick = async () => {
    await client.post(`/like/${props.post.contentId}`, props.post);
    props.setFlag((prev) => !prev);
  };
  return (
    <div className="recommend__movies">
      <img className="recommend__number" src={props.top10RankImage} />
      <img className="recommend__image" src={props.top10Image} />
      <button className="recommend__heart" onClick={handleHeartClick}>
        <img src={props.top10Likes ? heart_filled : heart_white} />
      </button>
    </div>
  );
}

export default Top10List;

const Top10Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 8.5rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 23.5rem;
  }
  .recommend {
    &__main {
      overflow-x: hidden;
    }
    &__contents {
      font-size: 1.6rem;
      font-weight: 700;
      padding-left: 1rem;
    }
    &__detail {
      display: flex;
      margin-top: 0.8rem;
    }
    &__movies {
      position: relative;
      display: flex;
      margin-bottom: 3rem;
    }
    &__image {
      display: flex;
      position: relative;
      margin-left: 7rem;
    }
    &__heart {
      background: transparent;
      padding: 0;
      position: absolute;
      right: 0.5rem;
    }
    &__number {
      display: flex;
      position: absolute;
    }
    &__arrowLeft {
      animation-fill-mode: forwards;
      cursor: pointer;
      z-index: 100;
      float: left;
      position: relative;
      height: 14.3rem;
    }
    &__arrowRight {
      animation-fill-mode: forwards;
      z-index: 100;
      cursor: pointer;
      float: right;
      position: relative;
      height: 14.3rem;
    }
  }
`;
