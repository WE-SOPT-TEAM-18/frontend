import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import MovieData from './MovieData';
import { arrow_left_gray, arrow_right_gray } from 'assets/index';

const UserRecommend = () => {
  const [movies] = useState(MovieData);
  return (
    <RecommendWrapper>
      <div className="recommend">
        {movies.map((a, i) => {
          return <Category movies={movies[i]} key={i} />;
        })}
      </div>
    </RecommendWrapper>
  );
};

function Category(props) {
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
      document.getElementById(props.movies.id).style.transition = 'all 1s ease-in-out';
      document.getElementById(props.movies.id).style.transform = `translateX(-${scrollState * 20}%)`;
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

const RecommendWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .recommend {
    padding: 1rem;
    &__main {
      overflow-x: hidden;
    }
    &__contents {
      font-size: 1.6rem;
      font-weight: 700;
    }
    &__detail {
      display: flex;
      margin-top: 0.8rem;
    }
    &__movies {
      display: flex;
      margin-bottom: 3rem;
    }
    &__image {
      display: flex;
      margin-right: 0.2rem;
    }
    &__number {
      display: flex;
      position: absolute;
      padding-left: 5.5rem;
    }
    &__arrowLeft {
      animation-fill-mode: forwards;
      cursor: pointer;
      z-index: 100;
      float: left;
      position: relative;
      margin-top: 0.8rem;
    }
    &__arrowRight {
      animation-fill-mode: forwards;
      z-index: 100;
      cursor: pointer;
      float: right;
      position: relative;
      margin-top: 0.1rem;
    }
  }
`;
