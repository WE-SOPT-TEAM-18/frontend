import React from 'react';
import styled from 'styled-components';
import { heart_filled, heart_white } from 'assets/index';
import { client } from 'libs/api';
import Slider from 'react-slick';

const WatchingContent = ({ setFlag, watchingList }) => {
  return (
    <StyledContent>
      <Category setFlag={setFlag} movies={watchingList} />
    </StyledContent>
  );
};

const Category = (props) => {
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
    <div className="watching__main">
      <div className="watching__contents">박수아님이 시청중인 콘텐츠</div>
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
    <div className="watching__movies">
      <img className="watching__image" src={props.post.image} />
      <button className="watching__heart" onClick={handleHeartClick}>
        <img src={props.post.isLiked ? heart_filled : heart_white} />
      </button>
      <div className="watching__progress-bar">
        <div
          className="watching__progress-inner"
          percent={props.post.percent}
          style={{ width: `${props.post.percent}%` }}></div>
      </div>
    </div>
  );
};

export default WatchingContent;

const StyledContent = styled.div`
  width: 100%;
  .watching {
    &__main {
      overflow-x: hidden;
    }
    &__contents {
      font-size: 1.6rem;
      margin-bottom: 0.8rem;
    }
    &__movies {
      display: flex;
      margin-bottom: 3rem;
      position: relative;
      margin-right: 0.2rem;
    }
    &__image {
      display: flex;
      margin-right: 0.2rem;
      margin-bottom: 0.5rem;
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
    content: '<';
    font-size: 3rem;
  }
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next {
    right: 0;
  }
  .slick-next:before {
    opacity: 0;
    content: '>';
    font-size: 3rem;
  }
  .slick-next:hover:before {
    opacity: 1;
  }
`;
