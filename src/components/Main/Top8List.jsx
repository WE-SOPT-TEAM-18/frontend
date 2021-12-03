import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { btn_left, btn_right } from 'assets/index';
import { rank10Category } from 'libs/api';
import Slider from 'react-slick';

const Top8List = ({ setFlag }) => {
  const [list, setList] = useState([]);

  const rankDataList = async () => {
    const rank10 = await rank10Category();
    setList(rank10);
  };

  useEffect(() => {
    rankDataList();
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
    <Top8Wrapper>
      <div className="recommend">
        <div className="recommend__contents">오늘 한국의 TOP 10 콘텐츠</div>
        <Slider {...settings}>
          {list?.map((movie, i) => {
            return (
              <Top8Movies
                setFlag={setFlag}
                top8Image={list[i].image}
                top8RankImage={list[i].rankImage}
                top8Likes={list[i].isLiked}
                key={list[i].rank}
                post={movie}
              />
            );
          })}
        </Slider>
      </div>
    </Top8Wrapper>
  );
};

function Top8Movies(props) {
  return (
    <div className="recommend__movies">
      <img className="recommend__number" src={props.top8RankImage} />
      <img className="recommend__image" src={props.top8Image} />
    </div>
  );
}

export default Top8List;

const Top8Wrapper = styled.div`
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
      margin-bottom: 1.2rem;
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
    &__number {
      display: flex;
      position: absolute;
    }
  }
  .slick-arrow {
    z-index: 100;
    width: 3.8rem;
    position: absolute;
    top: 5.2rem;
    height: 14rem;
    margin-top: 1.7rem;
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
