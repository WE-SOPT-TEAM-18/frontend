import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { heart_filled } from 'assets';
import { arrow_left_gray, arrow_right_gray } from 'assets/index';
import { client } from 'libs/api';

const HeartContent = ({ setFlag, heartList }) => {
  return (
    <StyledContent>
      <Category setFlag={setFlag} movies={heartList} />
    </StyledContent>
  );
};

function Category(props) {
  const totalSlide = 3;
  const [scrollState, setScrollState] = useState(0);
  const [animation, setAnimation] = useState(false);
  const [localVisible, setLocalVisible] = useState(!scrollState);
  const slideRef = useRef(null);
  const [current, setCurrent] = useState('sad');
  const [prev, setPrev] = useState(null);

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

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

  useEffect(() => {
    if (slideRef) {
      document.getElementById('heart-list').style.transition = 'all 1s ease-in-out';
      document.getElementById('heart-list').style.transform = `translateX(-${scrollState * 20}%)`;
    }
  }, [scrollState]);

  useEffect(() => {
    if ((localVisible && scrollState) || (localVisible && !scrollState)) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 500);
    }
    setLocalVisible(!scrollState);
  }, [localVisible, scrollState]);

  useEffect(() => {
    if (current !== null) {
      const currentBtn = document.getElementById(current);
      currentBtn.style.color = '#d32f27';
    }
    if (prev !== null) {
      const prevBtn = document.getElementById(prev);
      prevBtn.style.color = '#ffffff';
    }
    setPrev(current);
  }, [current]);

  return (
    <div className="heart__main">
      <Link to="/sub" className="heart__contents">
        내가 찜한 콘텐츠
      </Link>
      <StyledBox>
        <StyledBtnWrapper>
          <button onClick={handleClick} id="test">
            #시험 끝나면 볼 영화
          </button>
          <button onClick={handleClick} id="sad">
            #슬픈 영화
          </button>
          <button onClick={handleClick} id="series">
            #슬기로운 시리즈
          </button>
          <button onClick={handleClick} id="peace">
            #마음의 평화
          </button>
          <button onClick={handleClick} id="horror">
            #무서운거
          </button>
          <button onClick={handleClick} id="food">
            #음식
          </button>
        </StyledBtnWrapper>
      </StyledBox>
      {(!localVisible || animation) && (
        <img
          className="heart__arrowLeft"
          src={arrow_left_gray}
          onClick={() => {
            prevButton();
          }}
        />
      )}
      <img
        className="heart__arrowRight"
        src={arrow_right_gray}
        onClick={() => {
          nextButton();
        }}
      />
      <div className="heart__detail" id="heart-list">
        {props.movies.map((movie, i) => {
          return <MoviePost post={movie} setFlag={props.setFlag} key={i} />;
        })}
      </div>
    </div>
  );
}

function MoviePost(props) {
  const handleHeartClick = async () => {
    await client.post(`/like/${props.post.contentId}`, props.post);
    props.setFlag((prev) => !prev);
  };
  return (
    <div className="heart__movies">
      <img className="heart__image" src={props.post.imageRow} />
      <button className="heart__button" onClick={handleHeartClick}>
        <img src={heart_filled} />
      </button>
    </div>
  );
}

export default HeartContent;

const StyledContent = styled.div`
  width: 100%;
  .heart {
    &__main {
      overflow-x: hidden;
    }
    &__contents {
      font-size: 1.6rem;
      text-decoration: none;
      color: #ffffff;
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
    &__button {
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
  }
`;

const StyledBox = styled.div`
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledBtnWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  margin-top: 0.8rem;
  & > button {
    background: transparent;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0;
    margin-right: 1.5rem;
    margin-bottom: 0.8rem;
  }
  & > button.clicked {
    color: #d32f27;
  }
`;
