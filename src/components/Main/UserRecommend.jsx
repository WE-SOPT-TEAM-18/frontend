import React, { useState } from 'react';
import styled from 'styled-components';
import MovieData from './MovieData';
// import Top10Data from './Top10Data';

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
  }
`;

const UserRecommend = () => {
  const [movies] = useState(MovieData);
  // const [top10] = useState(Top10Data);
  return (
    <RecommentWrapper>
      <div className="recommend">
        {/* {top10.map((a, i) => {
          return <Top10 top10={top10[i]} key={i} />;
        })} */}
        {movies.map((a, i) => {
          return <Category movies={movies[i]} key={i} />;
        })}
      </div>
    </RecommentWrapper>
  );
};

// function Top10(props) {
//   return (
//     <div className="recommend__top10">
//       <img className="recommend__number" src={props.image} />
//       <img className="recommend__image" src={props.imageMovie} />
//     </div>
//   );
// }

function Category(props) {
  console.log(props.movies);
  return (
    <div className="recommend__main">
      <div className="recommend__contents">{props.movies.title}</div>
      <div className="recommend__detail">
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
      <img className="recommend__image" src={props.post.imageMovie} />
    </div>
  );
}

export default UserRecommend;
