import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Top10Data from './Top10Data';
import { arrow_left_gray, arrow_right_gray } from '../../assets/index';

const Top10List = () => {
  const [top10s] = useState(Top10Data);
  const totalSlide = 3;
  const [scrollState, setScrollState] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!scrollState);
  const slideRef = useRef(null);

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
          {top10s.map((a, i) => {
            return <Top10Movies top10s={top10s[i]} key={i} />;
          })}
        </div>
      </div>
    </Top10Wrapper>
  );
};

function Top10Movies(props) {
  return (
    <div className="recommend__movies">
      <img className="recommend__number" src={props.top10s.image} />
      <img className="recommend__image" src={props.top10s.imageMovie} />
    </div>
  );
}

export default Top10List;

const Top10Wrapper = styled.div`
  margin: 0 auto;
  width: 1100px;
  overflow: hidden;

  .recommend {
    &__contents {
      font-size: 16px;
    }
    &__detail {
      display: flex;
      margin-top: 8px;
    }
    &__movies {
      display: flex;
      margin-bottom: 30px;
    }
    &__image {
      display: flex;
      position: relative;
      margin-left: 70px;
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
      height: 143px;
    }
    &__arrowRight {
      animation-fill-mode: forwards;
      z-index: 100;
      cursor: pointer;
      float: right;
      position: relative;
      height: 143px;
    }
  }
`;
