import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieData from './MovieData.js';
import { btn_left, btn_right, heart_filled, heart_white } from 'assets/index';
import { listCategory } from 'libs/api';
import { client } from 'libs/api';
import Slider from 'react-slick';

const UserRecommend = ({ setFlag }) => {
  const [movies] = useState(MovieData);
  return (
    <RecommendWrapper>
      <div className="recommend">
        {movies.map((a, i) => {
          return <Category setFlag={setFlag} movies={movies[i]} key={i} />;
        })}
      </div>
    </RecommendWrapper>
  );
};

function Category(props) {
  const [list, setList] = useState([]);

  const categoryDataList = async () => {
    const dataList = await listCategory();
    setList(dataList);
  };

  useEffect(() => {
    categoryDataList();
  }, []);

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
    <div className="recommend__main">
      <div className="recommend__contents">{props.movies.title}</div>
      <Slider {...settings}>
        {list?.map((a, i) => {
          return (
            <MoviePost
              setFlag={props.setFlag}
              postImage={list[i].image}
              likes={list[i].isLiked}
              key={list[i].contentId}
              post={a}
            />
          );
        })}
      </Slider>
    </div>
  );
}

function MoviePost(props) {
  const [like, setLike] = useState(props.likes);
  const handleHeartClick = async () => {
    setLike(!like);
    await client.post(`/like/${props.post.contentId}`, props.post);
    props.setFlag((prev) => !prev);
  };
  return (
    <div className="recommend__movies">
      <img className="recommend__image" src={props.postImage} />
      <button className="recommend__heart" onClick={handleHeartClick}>
        <img src={like === true ? heart_filled : heart_white} />
      </button>
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
      margin-bottom: 1.2rem;
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
