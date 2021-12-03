import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { heart_filled, btn_left, btn_right } from 'assets/index';
import { client } from 'libs/api';
import Slider from 'react-slick';

const HeartContent = ({ setFlag, heartList }) => {
  return (
    <StyledContent>
      <Category setFlag={setFlag} movies={heartList} />
    </StyledContent>
  );
};

const Category = (props) => {
  const [prev, setPrev] = useState(null);
  const [current, setCurrent] = useState('sad');

  const handleClick = (e) => {
    setCurrent(e.target.id);
  };

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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.8,
        },
      },
    ],
  };
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
      <Slider {...settings}>
        {props.movies.map((movie, i) => {
          return <MoviePost post={movie} setFlag={props.setFlag} key={i} />;
        })}
      </Slider>
    </div>
  );
};

const MoviePost = (props) => {
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
};

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
      margin-bottom: 0.8rem;
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
  }
  .slick-arrow {
    z-index: 100;
    width: 3.8rem;
    height: 10.5rem;
    position: absolute;
    top: 5.2rem;
  }
  .slick-arrow:hover {
    background: rgba(20, 20, 20, 0.5);
  }
  .slick-prev {
    left: 0;
  }
  .slick-prev:before {
    opacity: 0;
    content: url(${btn_left});
  }
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next {
    right: 0;
  }
  .slick-next:before {
    opacity: 0;
    content: url(${btn_right});
  }
  .slick-next:hover:before {
    opacity: 1;
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
