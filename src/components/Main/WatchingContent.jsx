// import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { heart_filled, heart_white } from 'assets';
import { arrow_left_gray, arrow_right_gray } from 'assets/index';
import { client } from 'libs/api';
import { RectangleGray_width } from 'assets/index';

const WatchingContent = () => {
  const [list, setList] = useState([]);

  const getWatchingList = async () => {
    const { data } = await client.get('/watching');
    setList(data.data);
  };

  useEffect(() => {
    getWatchingList();
  }, []);

  return (
    <StyledContent>
      <Category movies={list} />
    </StyledContent>
  );
};

function Category(props) {
  const totalSlide = 3;
  const [scrollState, setScrollState] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!scrollState);
  // const slideRef = useRef(null);

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

  // useEffect(() => {
  //   if (slideRef) {
  //     document.getElementById(props.movies.contentId).style.transition = 'all 1s ease-in-out';
  //     document.getElementById(props.movies.contentId).style.transform = `translateX(-${scrollState * 20}%)`;
  //   }
  // }, [scrollState]);

  useEffect(() => {
    if ((localVisible && scrollState) || (localVisible && !scrollState)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }
    setLocalVisible(!scrollState);
  }, [localVisible, scrollState]);

  return (
    <div className="watching__main">
      <div className="watching__contents">박수아님이 시청중인 콘텐츠</div>
      {(!localVisible || animation) && (
        <img
          className="watching__arrowLeft"
          src={arrow_left_gray}
          onClick={() => {
            prevButton();
          }}
        />
      )}
      <img
        className="watching__arrowRight"
        src={arrow_right_gray}
        onClick={() => {
          nextButton();
        }}
      />
      <div className="watching__detail" id={props.movies.contentId}>
        {props.movies.map((a, i) => {
          return <MoviePost post={props.movies[i]} key={i} />;
        })}
      </div>
    </div>
  );
}

function MoviePost(props) {
  const [like, setLike] = useState(props.post.isLiked);
  const handleHeartClick = () => {
    setLike(!like);
  };
  return (
    <div className="watching__movies">
      {/* <img className="watching__image" src={props.post.image} /> */}
      <img className="watching__image" src={RectangleGray_width} />
      <button className="watching__heart" onClick={handleHeartClick}>
        <img src={like ? heart_filled : heart_white} />
      </button>
      <div className="watching__progress-bar">
        <div
          className="watching__progress-inner"
          percent={props.post.percent}
          style={{ width: `${props.post.percent}%` }}></div>
      </div>
    </div>
  );
}

export default WatchingContent;

const StyledContent = styled.div`
  width: 100%;
  .watching {
    &__main {
      overflow-x: hidden;
    }
    &__contents {
      font-size: 1.6rem;
    }
    &__detail {
      display: flex;
      margin-top: 0.8rem;
    }
    &__movies {
      display: flex;
      margin-bottom: 3rem;
      position: relative;
    }
    &__image {
      display: flex;
      margin-right: 0.2rem;
    }
    &__heart {
      background: transparent;
      padding: 0;
      position: absolute;
      right: 0.5rem;
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
    &__progress-bar {
      width: 11.4rem;
      height: 0.2rem;
      position: absolute;
      left: 3.6rem;
      bottom: -0.5rem;
      background-color: rgba(90, 91, 91, 1);
    }
    &__progress-inner {
      height: 0.2rem;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(211, 47, 39, 1);
    }
  }
`;
