import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MovieData from './MovieData';
import { arrow_left_gray, arrow_right_gray } from '../../assets/index';

const RecommentWrapper = styled.div`
  margin: 0 auto;
  width: 1100px;
  overflow: hidden;

  .recommend {
    &__main {
    }
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
      margin-right: 2px;
    }
    &__number {
      display: flex;
      position: absolute;
      padding-left: 55px;
    }
    &__arrowLeft {
      animation-fill-mode: forwards;
      cursor: pointer;
      z-index: 100;
      float: left;
      position: relative;
      margin-top: 8px;
    }
    &__arrowRight {
      animation-fill-mode: forwards;
      z-index: 100;
      cursor: pointer;
      float: right;
      position: relative;
      margin-top: 1px;
    }
  }
`;

const UserRecommend = () => {
  const [movies] = useState(MovieData);
  return (
    <RecommentWrapper>
      <div className="recommend">
        {movies.map((a, i) => {
          return <Category movies={movies[i]} key={i} />;
        })}
      </div>
    </RecommentWrapper>
  );
};

function Category(props) {
  const totalSlide = 6;
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
      document.getElementById(props.movies.id).style.transition = 'all 1s ease-in-out';
      document.getElementById(props.movies.id).style.transform = `translateX(-${scrollState * 15}%)`;
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
    <div className="recommend__main">
      <div className="recommend__contents">{props.movies.title}</div>
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
      <div className="recommend__detail" id={props.movies.id}>
        {props.movies.imageNumber.map((a, i) => {
          return <MoviePost post={props.movies.imageNumber[i]} key={i} />;
        })}
      </div>
    </div>
  );
}

function MoviePost(props) {
  return (
    <div className="recommend__movies">
      <img className="recommend__image" src={props.post.image} />
    </div>
  );
}

export default UserRecommend;
